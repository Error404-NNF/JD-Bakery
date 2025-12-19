import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "JD's Confectioners - Served with Passion",
  description:
    "Premium bakery offering wedding cakes, birthday cakes, rock buns, chelsea buns, biscuits, red cakes, muffins, dikuku scones and more. Open Monday to Sunday, 06H00-18H00.",
  keywords: "bakery, cakes, wedding cakes, birthday cakes, confectionery, baked goods",
    generator: 'v0.app',
      
  Verification: {
    google:<meta name="google-site-verification" content="aKZGRxV4lnxT5Is8n40TMK8enJNHwnXYWsy7c-HuR64" />
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
