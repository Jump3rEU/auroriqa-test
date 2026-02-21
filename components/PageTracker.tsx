"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Drop into any layout to automatically track page views via POST /api/analytics.
 * Fires once per route change (batched to avoid double-calls in dev strict mode).
 */
export default function PageTracker() {
  const pathname = usePathname();
  const reported = useRef<string | null>(null);

  useEffect(() => {
    if (reported.current === pathname) return;
    reported.current = pathname;

    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page: pathname }),
    }).catch(() => {}); // silent fail — never block the UI
  }, [pathname]);

  return null;
}
