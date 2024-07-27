import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { AllTemplatesList } from '@/components/AllTemplatesList'
import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Templates',
  description:
    'A collection of templates to help you get started with your next project faster.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ui.lndev.me/templates',
    siteName: 'lndev/ui templates',
    images: [
      {
        url: 'https://ui.lndev.me/banner-templates.png',
        width: 2560,
        height: 1440,
        alt: 'lndev/ui templates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ln_dev7',
    creator: '@ln_dev7',
    images: [
      {
        url: 'https://www.lndev.me/banner-templates.png',
        width: 2560,
        height: 1440,
        alt: 'lndev/ui templates',
      },
    ],
  },
}

export default function Page() {
  return (
    <Layout page="templates">
      <Container className="mt-0">
        <div className="space-y-10 sm:space-y-12 lg:space-y-16">
          <Suspense fallback={<div>Loading...</div>}>
            <AllTemplatesList />
          </Suspense>
        </div>
      </Container>
    </Layout>
  )
}
