import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// This section tells Google your Brand Name and Keywords
export const metadata = {
  title: "JD Bakery | Fresh Pastries & Custom Cakes",
  description: "Experience the best artisan breads, fresh pastries, and custom baked goods at JD Bakery.",
  verification: {
    google: 'aKZGRxV41nxT5Is8n48TMK8enJNHwnXYWsy7c-HuR64',
  },
  openGraph: {
    siteName: 'JD Bakery',
    url: 'https://jd-bakery.vercel.app/',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This JSON-LD helps Google show "JD Bakery" instead of the URL link
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'JD Bakery',
    'url': 'https://jd-bakery.vercel.app/',
  }

  return (
    <html lang="en">
      <head>
        {/* The metadata export above handles your verification tags automatically, 
            but keeping your manual meta tags here as a backup is safe. */}
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
