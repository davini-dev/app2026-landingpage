import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SR Saúde Real - Microverdes Orgânicos Rastreados | Praia Grande - SP',
  description: 'Microverdes frescos 100% orgânicos com rastreamento QR Code. 40x mais nutrientes, cultivados no litoral sul de SP. Entregas Peruíbe até Santos.',
  keywords: ['microverdes', 'orgânicos', 'rastreamento', 'QR Code', 'Praia Grande', 'Santos', 'saúde', 'nutrição'],
  authors: [{ name: 'SR Saúde Real' }],
  openGraph: {
    title: 'SR Saúde Real - Microverdes Orgânicos',
    description: 'Microverdes frescos com rastreamento QR Code. 40x mais nutrientes!',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
