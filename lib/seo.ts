import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  noindex?: boolean
}

export function generateSEO({
  title = 'Auroriqa - Prémiová Tvorba Webů & Digitální Řešení',
  description = 'Navrhujeme a vyvíjíme moderní webové stránky, aplikace a digitální produkty. Profesionální webdesign, SEO optimalizace a pokročilé technologie pro váš úspěch.',
  keywords = [
    'tvorba webů',
    'webdesign',
    'vývoj aplikací',
    'digitální agentura',
    'SEO optimalizace',
    'responzivní design',
    'Next.js',
    'React',
    'moderní web',
    'web development',
    'UI/UX design',
    'Praha',
    'Česká republika'
  ],
  canonical = 'https://auroriqa.cz',
  ogImage = 'https://auroriqa.cz/opengraph-image',
  noindex = false,
}: SEOProps = {}): Metadata {
  return {
    metadataBase: new URL('https://auroriqa.cz'),
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Auroriqa Team' }],
    creator: 'Auroriqa',
    publisher: 'Auroriqa',
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      locale: 'cs_CZ',
      url: canonical,
      title,
      description,
      siteName: 'Auroriqa',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@auroriqa',
    },
    verification: {},

    category: 'technology',
  }
}

export const jsonLdWebsite = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Auroriqa',
  description: 'Prémiová digitální agentura specializující se na tvorbu moderních webových stránek a aplikací',
  url: 'https://auroriqa.cz',
  logo: 'https://auroriqa.cz/icon.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@auroriqa.cz',
    availableLanguage: ['cs', 'en'],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CZ',
  },
}

export const jsonLdWebPage = (title: string, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description,
  url: 'https://auroriqa.cz',
  inLanguage: 'cs-CZ',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Auroriqa',
    url: 'https://auroriqa.cz',
  },
})

export const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Development',
  provider: {
    '@type': 'Organization',
    name: 'Auroriqa',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Czech Republic',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Webový Design',
          description: 'Moderní a responzivní webdesign',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Vývoj Aplikací',
          description: 'Vývoj webových a mobilních aplikací',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO Optimalizace',
          description: 'Optimalizace pro vyhledávače',
        },
      },
    ],
  },
}

// Blog-specific structured data
export const jsonLdBlogPage = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Auroriqa Blog',
  description: 'Blog o webovém vývoji, designu a digitálním marketingu',
  url: 'https://auroriqa.cz/blog',
  inLanguage: 'cs-CZ',
  publisher: {
    '@type': 'Organization',
    name: 'Auroriqa',
    logo: {
      '@type': 'ImageObject',
      url: 'https://auroriqa.cz/icon.svg',
    },
  },
}

export const jsonLdBlogPost = (
  title: string,
  description: string,
  slug: string,
  datePublished: string,
  dateModified: string,
  authorName: string = 'Auroriqa Team',
  keywords: string[] = []
) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: title,
  description,
  image: `https://auroriqa.cz/opengraph-image`,
  datePublished,
  dateModified,
  author: {
    '@type': 'Person',
    name: authorName,
    url: 'https://auroriqa.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Auroriqa',
    logo: {
      '@type': 'ImageObject',
      url: 'https://auroriqa.cz/icon.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://auroriqa.cz/blog/${slug}`,
  },
  keywords: keywords.join(', '),
  inLanguage: 'cs-CZ',
})

// Breadcrumb structured data
export const jsonLdBreadcrumb = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

// FAQ structured data
export const jsonLdFAQ = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})
