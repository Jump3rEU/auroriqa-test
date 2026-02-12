import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const AUDIT_FILE = path.join(process.cwd(), 'data', 'audit-log.json');

function ensureAuditFile() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(AUDIT_FILE)) {
    fs.writeFileSync(AUDIT_FILE, JSON.stringify([], null, 2));
  }
}

// GET - Read audit log
export async function GET() {
  try {
    ensureAuditFile();
    const logs = JSON.parse(fs.readFileSync(AUDIT_FILE, 'utf-8'));
    return NextResponse.json(logs);
  } catch (error) {
    console.error('Error reading audit log:', error);
    return NextResponse.json({ error: 'Failed to read audit log' }, { status: 500 });
  }
}

// POST - Add audit entry
export async function POST(request: Request) {
  try {
    ensureAuditFile();
    const body = await request.json();
    
    const newEntry = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      admin: body.admin || 'Unknown',
      action: body.action,
      details: body.details,
    };
    
    const logs = JSON.parse(fs.readFileSync(AUDIT_FILE, 'utf-8'));
    logs.unshift(newEntry);
    
    // Keep only last 500 entries
    const trimmedLogs = logs.slice(0, 500);
    fs.writeFileSync(AUDIT_FILE, JSON.stringify(trimmedLogs, null, 2));
    
    return NextResponse.json({ success: true, entry: newEntry });
  } catch (error) {
    console.error('Error adding audit entry:', error);
    return NextResponse.json({ error: 'Failed to add audit entry' }, { status: 500 });
  }
}

// DELETE - Clear audit log
export async function DELETE() {
  try {
    ensureAuditFile();
    fs.writeFileSync(AUDIT_FILE, JSON.stringify([], null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error clearing audit log:', error);
    return NextResponse.json({ error: 'Failed to clear audit log' }, { status: 500 });
  }
}
