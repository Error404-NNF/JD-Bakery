import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "JD Bakery | Fresh Pastries & Custom Cakes", // This replaces the URL in search
  description: "Delicious artisan breads and custom baked goods from JD Bakery.",
  verification: {
    google: 'aKZGRxV41nxT5Is8n48TMK8enJNHwnXYWsy7c-HuR64',
  },
  openGraph: {
    siteName: 'JD Bakery', // This tells Google your brand name
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'JD Bakery',
    'url': 'https://jd-bakery.vercel.app/',
  }

  return (
    <html lang="en">
      <head>
        {/* Your verification meta tags are already handled by the metadata object above, 
            but keeping them here doesn't hurt anything. */}
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
