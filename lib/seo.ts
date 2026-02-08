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
  canonical = 'https://auroriqa.com',
  ogImage = 'https://auroriqa.com/og-image.jpg',
  noindex = false,
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Auroriqa Team' }],
    creator: 'Auroriqa',
    publisher: 'Auroriqa',
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical,
      languages: {
        'cs-CZ': canonical,
        'en-US': `${canonical}/en`,
      },
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
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
    category: 'technology',
  }
}

export const jsonLdWebsite = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Auroriqa',
  description: 'Prémiová digitální agentura specializující se na tvorbu moderních webových stránek a aplikací',
  url: 'https://auroriqa.com',
  logo: 'https://auroriqa.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+420-XXX-XXX-XXX',
    contactType: 'customer service',
    email: 'hello@auroriqa.com',
    availableLanguage: ['cs', 'en'],
  },
  sameAs: [
    'https://www.linkedin.com/company/auroriqa',
    'https://twitter.com/auroriqa',
    'https://github.com/auroriqa',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CZ',
    addressLocality: 'Praha',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '42',
  },
}

export const jsonLdWebPage = (title: string, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description,
  url: 'https://auroriqa.com',
  inLanguage: 'cs-CZ',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Auroriqa',
    url: 'https://auroriqa.com',
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
