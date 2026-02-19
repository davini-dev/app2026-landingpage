import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const _geist = Geist({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});
const _geistMono = Geist_Mono({ 
  subsets: ["latin"],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: 'SR Saúde Real | Microverdes Orgânicos e Naturais em Praia Grande e Mongaguá',
  description: 'Microverdes frescos para academias, chefs gourmet e entusiastas fitness. 100% orgânicos, colhidos na sexta e entregues em horas. O segredo dos pratos diferenciados.',
  keywords: ['microverdes', 'produtos orgânicos', 'alimentação fitness', 'chef gourmet', 'restaurantes saudáveis', 'academias Praia Grande', 'produtos naturais', 'microgreens Brasil'],
  authors: [{ name: 'SR Saúde Real' }],
  openGraph: {
    title: 'SR Saúde Real | Microverdes Orgânicos e Naturais',
    description: 'O frescor real que sua dieta fitness e seus pratos gourmet precisam. Entregas exclusivas em Praia Grande e Mongaguá.',
    url: 'https://landingpage.sauderealmicroverdes.club',
    siteName: 'SR Saúde Real',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
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
      <body className={`font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "SR Saúde Real - Microverdes Orgânicos",
              "image": "https://landingpage.sauderealmicroverdes.club/logo-saude-real.webp",
              "@id": "https://landingpage.sauderealmicroverdes.club",
              "url": "https://landingpage.sauderealmicroverdes.club",
              "telephone": "+5513978178145",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jd. Real",
                "addressLocality": "Praia Grande",
                "addressRegion": "SP",
                "postalCode": "11700-000",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -24.0089,
                "longitude": -46.4128
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Friday",
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.instagram.com/sauderealmicroverdes"
              ],
              "description": "Microverdes orgânicos e naturais para academias, chefs gourmet e dietas fitness. Entregas em Praia Grande e Mongaguá."
            })
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
