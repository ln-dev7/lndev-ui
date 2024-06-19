import {type Metadata} from 'next'
import {Inter} from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import {Providers} from '@/app/providers'

import '@/styles/tailwind.css'
import {DiscountAlert} from "@/components/DiscountAlert";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

const monaSans = localFont({
    src: '../fonts/Mona-Sans.var.woff2',
    display: 'swap',
    variable: '--font-mona-sans',
    weight: '200 900',
})

// let siteUrl = process.env.NEXT_PUBLIC_SITE_URL
let siteUrl = "https://ui.lndev.me"

export const metadata: Metadata = {
    title: "lndev/ui",
    description:
        'A fun collection of small, well-coded components to streamline your development process.',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://ui.lndev.me/',
        siteName: 'lndev/ui',
        images: [
            {
                url: 'https://ui.lndev.me/banner.png',
                width: 2560,
                height: 1440,
                alt: 'lndev/ui',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@ln_dev7',
        creator: '@ln_dev7',
        images: [
            {
                url: 'https://ui.lndev.me/banner.png',
                width: 2560,
                height: 1440,
                alt: 'lndev/ui',
            },
        ],
    },
    authors: [{name: 'Leonel NGOYA', url: 'https://lndev.me/'}],
    keywords: ['ui', 'lndev', 'components'],
    alternates: {
        types: {
            'application/rss+xml': `${siteUrl}/feed.xml`,
        },
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="en"
            className={clsx('h-full antialiased', inter.variable, monaSans.variable)}
            suppressHydrationWarning
        >
        <body className="flex min-h-full flex-col bg-white dark:bg-gray-950">
        <Providers>
            {children}
            {/*<DiscountAlert/>*/}
        </Providers>
        </body>

        </html>
    )
}


