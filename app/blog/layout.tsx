import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Blog | Auroriqa – Webový vývoj, Design & SEO",
  description:
    "Nejnovější trendy ve webovém vývoji, designu a SEO optimalizaci. Next.js, React, TypeScript tutoriály a best practices pro moderní web.",
  canonical: "https://auroriqa.cz/blog",
  keywords: [
    "webový blog",
    "Next.js tutoriál",
    "webdesign trendy",
    "SEO optimalizace",
    "React vývoj",
    "TypeScript",
    "webová bezpečnost",
    "UI UX design",
  ],
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
