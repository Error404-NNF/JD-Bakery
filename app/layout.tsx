import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  // This is what people see in big blue text on Google
  title: "JD Bakery", 
  description: "Discover the finest artisan breads, wedding cakes, and custom treats at JD's Confectioners Bakery.",
  verification: {
    google: 'aKZGRxV41nxT5Is8n48TMK8enJNHwnXYWsy7c-HuR64',
  },
  openGraph: {
    // This replaces the "Vercel" text with your brand name
    siteName: "JD's Confectioners", 
    url: 'https://jd-bakery.vercel.app/',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This tells Google's search engine exactly who you are
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': "JD's Confectioners",
    'url': 'https://jd-bakery.vercel.app/',
  }

  return (
    <html lang="en">
      <head>
        {/* Verification and Robots tags are handled by metadata, but keeping them here for safety */}
        <meta name="google-site-verification" content="aKZGRxV41nxT5Is8n48TMK8enJNHwnXYWsy7c-HuR64" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
