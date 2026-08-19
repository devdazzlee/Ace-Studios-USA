import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SITE_URL } from '@/config/config'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

const SITE_NAME = 'Ace Studios'
const SITE_TITLE = 'Ace Studios | Design, E-Commerce & Digital Growth Agency'
const SITE_DESCRIPTION =
  'Ace Studios helps brands build profitable online businesses — brand design, web development, Amazon FBA, TikTok Shop, Shopify & digital marketing.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Ace Studios',
  },
  description: SITE_DESCRIPTION,
  generator: 'v0.app',
  applicationName: SITE_NAME,
  publisher: SITE_NAME,
  creator: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  category: 'business',
  keywords: [
    'web development agency',
    'Shopify development',
    'e-commerce agency',
    'Amazon FBA management',
    'TikTok Shop management',
    'digital marketing agency USA',
    'brand design agency',
  ],
  icons: {
    icon: '/Logo.svg',
    apple: '/Logo.svg',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: '/',
    images: [
      {
        url: '/hero-image.jpg',
        width: 1024,
        height: 1024,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/hero-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/Logo.svg`,
  image: `${SITE_URL}/Logo.svg`,
  description: SITE_DESCRIPTION,
  telephone: '+1-737-394-5403',
  email: 'contact@acestudiosus.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5900 Balcones Dr. STE 100',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    postalCode: '78731',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-737-394-5403',
    email: 'contact@acestudiosus.com',
    contactType: 'customer service',
    areaServed: 'US',
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { '@id': `${SITE_URL}/#organization` },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#0a0c10] scroll-smooth" style={{ fontFamily: poppins.style.fontFamily }}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
