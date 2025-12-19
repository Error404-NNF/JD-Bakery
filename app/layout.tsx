import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  verification: {
    google: 'aKZGRxV4lnxT5Is8n40TMK8enJNHwnXYWsy7c-HuR64'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google site verification - raw meta tag added for extra compatibility */}
        <meta name="google-site-verification" content="aKZGRxV4lnxT5Is8n40TMK8enJNHwnXYWsy7c-HuR64" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
