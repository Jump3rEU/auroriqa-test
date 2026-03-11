import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

// ─── Types ────────────────────────────────────────────────────────────────────
export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  createdAt: string;
  read: boolean;
}

const REDIS_KEY = "auroriqa:contact:submissions";

// Lazy init — falls back gracefully if env vars not set (local dev)
function getRedis(): Redis | null {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null;
  }
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
}

async function readAll(redis: Redis): Promise<ContactSubmission[]> {
  const raw = await redis.get<ContactSubmission[]>(REDIS_KEY);
  return Array.isArray(raw) ? raw : [];
}

async function saveAll(redis: Redis, submissions: ContactSubmission[]): Promise<void> {
  // Keep at most 500, newest first
  await redis.set(REDIS_KEY, submissions.slice(0, 500));
}

// ─── POST /api/contact — add new submission ──────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate required fields
    const { name, email, message } = body;
    if (!name || typeof name !== "string" || name.length > 200) {
      return NextResponse.json({ error: "Jméno je povinné" }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Neplatný email" }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.length > 5000) {
      return NextResponse.json({ error: "Zpráva je povinná" }, { status: 400 });
    }

    const submission: ContactSubmission = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: name.trim().slice(0, 200),
      email: email.trim().toLowerCase().slice(0, 320),
      phone: (body.phone ?? "").trim().slice(0, 30),
      projectType: (body.projectType ?? "other").slice(0, 50),
      message: message.trim().slice(0, 5000),
      createdAt: new Date().toISOString(),
      read: false,
    };

    const redis = getRedis();
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

// ─── GET /api/contact — list submissions (admin use) ────────────────────────
export async function GET() {
  const redis = getRedis();
  if (!redis) return NextResponse.json({ submissions: [], total: 0, warning: "Redis not configured" });
  const submissions = await readAll(redis);
  return NextResponse.json({ submissions, total: submissions.length });
}

// ─── PATCH /api/contact — mark as read ──────────────────────────────────────
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

// ─── DELETE /api/contact — delete one submission ─────────────────────────────
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
