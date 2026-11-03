import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: 'AI Solutions Architect | Senior AI / ML Engineer',
    template: '%s | AI Solutions Architect',
  },

  description:
    'AI Solutions Architect and Senior AI/ML Engineer specializing in Generative AI, LLMs, RAG, AI Agents, Machine Learning, MLOps, and production AI systems.',

  openGraph: {
    title: 'Egor Dzhin — AI Solutions Architect | Senior AI / ML Engineer',
    description:
      'Production AI, LLM/RAG, machine learning, computer vision, data engineering, backend architecture, and cloud-native systems.',
    url: baseUrl,
    siteName: 'Egor Dzhin — AI Solutions Architect',
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Egor Dzhin — AI Solutions Architect | Senior AI / ML Engineer',
    description:
      'Production AI, LLM/RAG, machine learning, computer vision, data engineering, backend architecture, and cloud-native systems.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes: (string | undefined | false)[]) =>
  classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased">
        <main className="max-w-4xl mx-auto px-6 py-12">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
