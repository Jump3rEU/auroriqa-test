import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://auroriqa.com'
  const currentDate = new Date()

  // Blog posts - můžete rozšířit dynamicky z databáze
  const blogPosts = [
    'webovy-design-trendy-2026',
    'jak-vybrat-web-agenturu',
    'optimalizace-rychlosti-webu',
    'react-vs-vue-porovnani-2026',
    'seo-optimalizace-kompletni-pruvodce',
    'nextjs-performance-tipy',
    'ui-ux-design-best-practices',
    'mobilni-aplikace-vs-web',
    'typescript-proc-pouzivat',
    'webova-bezpecnost-zaklady',
    'api-design-restful-graphql',
    'css-grid-flexbox-modernitechnik',
    'accessibility-pristupny-web',
    'web-analytics-google-analytics',
    'e-commerce-vyvoj-kompletni-guide',
    'progresivni-webove-aplikace-pwa',
    'headless-cms-porovnani',
    'deployment-hosting-nejlepsi-volby',
    'version-control-git-best-practices',
    'testing-automatizace-web-aplikaci'
  ];

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/#services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#how-we-work`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
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
