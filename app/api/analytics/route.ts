import { NextRequest, NextResponse } from "next/server";

/**
 * Lightweight page-view analytics API.
 *
 * ─── Storage options ───────────────────────────────────────────────────────
 * Development  : in-memory Map (resets on server restart – OK for local dev)
 * Production   : add Vercel KV (upstash/redis) and swap the helpers below.
 *                npm install @vercel/kv → replace Map usage with kv.hincrby / kv.hgetall
 * ──────────────────────────────────────────────────────────────────────────
 */

// In-memory store – works for local dev, resets on Vercel cold start.
// Replace with Vercel KV for persistence in production.
const store: Map<string, number> = new Map();

function allowed(page: string): boolean {
  return typeof page === "string" && page.startsWith("/") && page.length < 128;
}

// GET /api/analytics → { pages: { "/": 42, "/blog": 7, ... } }
export async function GET() {
  const pages: Record<string, number> = {};
  store.forEach((count, page) => {
    pages[page] = count;
  });
  return NextResponse.json({ pages }, { status: 200 });
}

// POST /api/analytics  { page: "/blog" }  → 204
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const page: string = body?.page ?? "/";
    if (!allowed(page)) return NextResponse.json({ error: "invalid" }, { status: 400 });

    store.set(page, (store.get(page) ?? 0) + 1);
    return new NextResponse(null, { status: 204 });
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }
}
