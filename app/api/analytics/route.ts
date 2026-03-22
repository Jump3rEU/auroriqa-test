import { NextRequest, NextResponse } from "next/server";

const pageStore: Map<string, number> = new Map();
const eventStore: Map<string, number> = new Map();

function allowedPage(page: string): boolean {
  return typeof page === "string" && page.startsWith("/") && page.length < 128;
}

function allowedEvent(event: string): boolean {
  return typeof event === "string" && /^[a-z0-9_:-]{3,64}$/i.test(event);
}

export async function GET() {
  const pages: Record<string, number> = {};
  const events: Record<string, number> = {};

  pageStore.forEach((count, page) => {
    pages[page] = count;
  });
  eventStore.forEach((count, event) => {
    events[event] = count;
  });

  return NextResponse.json({ pages, events }, { status: 200 });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body?.type === "event") {
      const event = String(body?.event || "").trim();
      if (!allowedEvent(event)) return NextResponse.json({ error: "invalid event" }, { status: 400 });
      eventStore.set(event, (eventStore.get(event) ?? 0) + 1);
      return new NextResponse(null, { status: 204 });
    }

    const page: string = body?.page ?? "/";
    if (!allowedPage(page)) return NextResponse.json({ error: "invalid page" }, { status: 400 });

    pageStore.set(page, (pageStore.get(page) ?? 0) + 1);
    return new NextResponse(null, { status: 204 });
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }
}
