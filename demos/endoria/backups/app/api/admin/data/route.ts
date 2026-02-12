import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'admin-data.json');

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({
      teamMembers: [
        { name: "SetProfile", role: "Owner", description: "Zakladatel a hlavní administrátor serveru" },
        { name: "Lacjim168", role: "Co-Owner", description: "Spoluzakladatel serveru" },
        { name: "FaZeTraRanTula", role: "Elite Helper", description: "Zkušený helper s rozšířenými právy" },
        { name: "Sh1payy", role: "Trial Helper", description: "Nový člen týmu v zkušební době" },
        { name: "vlk_1", role: "Trial Helper", description: "Nový člen týmu v zkušební době" },
      ],
      serverInfo: {
        minecraftIP: "mc.endoria.eu",
        minecraftVersion: "1.21 - 1.21.11",
        hytaleIP: "hytale.endoria.eu",
        discordURL: "https://discord.endoria.eu",
      },
      socialLinks: {
        youtube: "https://youtube.com/@endoriaeu",
        instagram: "https://instagram.com/endoriaeu",
        tiktok: "https://tiktok.com/@endoriaeu",
        discord: "https://discord.endoria.eu",
      },
      rules: [
        { id: "1", title: "Respekt k hráčům", description: "Buďte slušní a respektujte ostatní hráče" },
        { id: "2", title: "Zákaz cheatu", description: "Používání neoprávněných modifikací je přísně zakázáno" },
        { id: "3", title: "Zákaz griefingu", description: "Ničení cizích staveb je zakázáno" },
      ],
      votingSites: [
        { name: "Czech-Craft", url: "https://czech-craft.eu/server/endoria/", reward: "100 coinů" },
        { name: "Minecraft-List", url: "https://minecraft-list.cz/server/endoria", reward: "50 coinů" },
      ],
      recruitment: {
        enabled: true,
        positions: [
          { 
            role: "Helper", 
            requirements: "Min. 50 hodin na serveru, 15+ let, Discord",
            description: "Pomáháš hráčům s dotazy a dohlížíš na pravidla"
          }
        ],
        applicationURL: "https://forms.gle/example",
      }
    }, null, 2));
  }
}

// GET - Read data
export async function GET() {
  try {
    ensureDataDir();
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading data:', error);
    return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
  }
}

// POST - Save data
export async function POST(request: Request) {
  try {
    ensureDataDir();
    const body = await request.json();
    
    // Merge with existing data
    const existingData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    const newData = { ...existingData, ...body };
    
    fs.writeFileSync(DATA_FILE, JSON.stringify(newData, null, 2));
    
    return NextResponse.json({ success: true, data: newData });
  } catch (error) {
    console.error('Error saving data:', error);
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}
