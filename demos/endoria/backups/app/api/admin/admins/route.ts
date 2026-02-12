import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const ADMINS_FILE = path.join(process.cwd(), 'data', 'admins.json');

function ensureAdminsFile() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(ADMINS_FILE)) {
    fs.writeFileSync(ADMINS_FILE, JSON.stringify([
      {
        id: "1",
        username: "admin",
        password: "endoria2026",
        role: "admin",
        createdAt: new Date().toISOString()
      }
    ], null, 2));
  }
}

// GET - Read admins
export async function GET() {
  try {
    ensureAdminsFile();
    const admins = JSON.parse(fs.readFileSync(ADMINS_FILE, 'utf-8'));
    return NextResponse.json(admins);
  } catch (error) {
    console.error('Error reading admins:', error);
    return NextResponse.json({ error: 'Failed to read admins' }, { status: 500 });
  }
}

// POST - Save admins
export async function POST(request: Request) {
  try {
    ensureAdminsFile();
    const body = await request.json();
    fs.writeFileSync(ADMINS_FILE, JSON.stringify(body, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving admins:', error);
    return NextResponse.json({ error: 'Failed to save admins' }, { status: 500 });
  }
}
