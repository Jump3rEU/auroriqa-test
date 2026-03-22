import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  createdAt: string;
  read: boolean;
  sourceIp?: string;
}

const REDIS_KEY = "auroriqa:contact:submissions";
const RATE_WINDOW_SECONDS = 60;
const MAX_REQUESTS_PER_WINDOW = 5;

function getRedis(): Redis | null {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) return null;
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
}

function clientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for") || "";
  return forwarded.split(",")[0]?.trim() || "unknown";
}

function emailValid(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function readAll(redis: Redis): Promise<ContactSubmission[]> {
  const raw = await redis.get<ContactSubmission[]>(REDIS_KEY);
  return Array.isArray(raw) ? raw : [];
}

async function saveAll(redis: Redis, submissions: ContactSubmission[]): Promise<void> {
  await redis.set(REDIS_KEY, submissions.slice(0, 500));
}

async function rateLimit(redis: Redis, ip: string): Promise<boolean> {
  const key = `auroriqa:contact:rate:${ip}`;
  const count = await redis.incr(key);
  if (count === 1) {
    await redis.expire(key, RATE_WINDOW_SECONDS);
  }
  return count <= MAX_REQUESTS_PER_WINDOW;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // anti-spam honeypot
    if (typeof body.website === "string" && body.website.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const startedAt = Number(body.startedAt || 0);
    if (!Number.isFinite(startedAt) || Date.now() - startedAt < 1200) {
      return NextResponse.json({ error: "Podezřelé odeslání formuláře" }, { status: 400 });
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const message = String(body.message || "").trim();
    const phone = String(body.phone || "").trim();
    const projectType = String(body.projectType || "other").trim();

    if (!name || name.length > 200) return NextResponse.json({ error: "Jméno je povinné" }, { status: 400 });
    if (!email || email.length > 320 || !emailValid(email)) return NextResponse.json({ error: "Neplatný email" }, { status: 400 });
    if (!message || message.length < 10 || message.length > 5000) return NextResponse.json({ error: "Neplatná zpráva" }, { status: 400 });
    if (phone && !/^[+()\d\s-]{7,20}$/.test(phone)) return NextResponse.json({ error: "Neplatné telefonní číslo" }, { status: 400 });

    const redis = getRedis();
    const ip = clientIp(req);

    if (redis) {
      const allowed = await rateLimit(redis, ip);
      if (!allowed) return NextResponse.json({ error: "Příliš mnoho požadavků, zkus to prosím za chvíli" }, { status: 429 });
    }

    const submission: ContactSubmission = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: name.slice(0, 200),
      email,
      phone: phone.slice(0, 30),
      projectType: projectType.slice(0, 50) || "other",
      message: message.slice(0, 5000),
      createdAt: new Date().toISOString(),
      read: false,
      sourceIp: ip,
    };

    if (redis) {
      const all = await readAll(redis);
      all.unshift(submission);
      await saveAll(redis, all);
    }

    return NextResponse.json({ ok: true, id: submission.id });
  } catch {
    return NextResponse.json({ error: "Chyba serveru" }, { status: 500 });
  }
}

export async function GET() {
  const redis = getRedis();
  if (!redis) return NextResponse.json({ submissions: [], total: 0, warning: "Redis not configured" });
  const submissions = await readAll(redis);
  return NextResponse.json({ submissions, total: submissions.length });
}

export async function PATCH(req: NextRequest) {
  try {
    const { id } = await req.json();
    const redis = getRedis();
    if (redis) {
      const all = await readAll(redis);
      const entry = all.find((s) => s.id === id);
      if (entry) {
        entry.read = true;
        await saveAll(redis, all);
      }
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Chyba" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    const redis = getRedis();
    if (redis) {
      const all = await readAll(redis);
      await saveAll(redis, all.filter((s) => s.id !== id));
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Chyba" }, { status: 500 });
  }
}
