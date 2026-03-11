import { NextRequest, NextResponse } from "next/server";

// ─── In-memory store (persists within a warm serverless instance) ─────────────
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

// Module-level array — persists per warm instance
let submissions: ContactSubmission[] = [];

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

    submissions.unshift(submission); // newest first

    // Keep only last 200 submissions in memory
    if (submissions.length > 200) submissions = submissions.slice(0, 200);

    return NextResponse.json({ ok: true, id: submission.id });
  } catch {
    return NextResponse.json({ error: "Chyba serveru" }, { status: 500 });
  }
}

// ─── GET /api/contact — list submissions (admin use) ────────────────────────
export async function GET() {
  return NextResponse.json({ submissions, total: submissions.length });
}

// ─── PATCH /api/contact — mark as read ──────────────────────────────────────
export async function PATCH(req: NextRequest) {
  try {
    const { id } = await req.json();
    const entry = submissions.find((s) => s.id === id);
    if (entry) entry.read = true;
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Chyba" }, { status: 500 });
  }
}

// ─── DELETE /api/contact — delete one submission ─────────────────────────────
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    submissions = submissions.filter((s) => s.id !== id);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Chyba" }, { status: 500 });
  }
}
