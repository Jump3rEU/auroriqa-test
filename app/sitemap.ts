import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://auroriqa.cz'
  const currentDate = new Date()

  // Blog posts - pouze publikované články
  const blogPosts = [
    'webovy-design-trendy-2026',
    'jak-vybrat-web-agenturu',
    'optimalizace-rychlosti-webu',
    'react-vs-vue-porovnani-2026',
    'seo-optimalizace-kompletni-pruvodce',
    'nextjs-performance-tipy',
    'ui-ux-design-best-practices',
    'typescript-proc-pouzivat',
    'webova-bezpecnost-zaklady'
  ];

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Dynamicky vygenerované blog posty
    ...blogPosts.map(slug => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
