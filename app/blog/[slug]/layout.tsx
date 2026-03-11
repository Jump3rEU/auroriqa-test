import type { Metadata } from "next";
import { blogPostsBySlug, blogPosts } from "@/lib/blog-data";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPostsBySlug[params.slug];
  if (!post) return { title: "Článek nenalezen | Auroriqa Blog" };

  const ogImage = `https://auroriqa.cz/api/og?title=${encodeURIComponent(post.titleCS)}&category=${encodeURIComponent(post.category)}`;

  return {
    title: `${post.titleCS} | Auroriqa Blog`,
    description: post.excerptCS,
    keywords: [post.category, "auroriqa", "webový vývoj", post.titleCS.toLowerCase()].join(", "),
    alternates: {
      canonical: `https://auroriqa.cz/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.titleCS,
      description: post.excerptCS,
      url: `https://auroriqa.cz/blog/${post.slug}`,
      publishedTime: new Date(post.date).toISOString(),
      authors: ["Auroriqa Team"],
      tags: [post.category],
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.titleCS }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.titleCS,
      description: post.excerptCS,
      images: [ogImage],
    },
  };
}

export default function BlogSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
