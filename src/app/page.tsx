import {SparkleIcon} from '@/components/SparkleIcon'
import {StarField} from "@/components/StarField"
import {IconLink} from "@/components/IconLink"
import {Layout} from '@/components/Layout'
import {Container} from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import {Button} from '@/components/Button'
import {Border} from '@/components/Border'
import {formatDate} from "@/libs/formatDate";

const allComponents = [
    {
        client: 'Bright Path',
        service: 'Web design & development',
        date: '2021-03-01',
        title: 'Bright Path',
        summary: [
            'Bright Path is a leading provider of online learning solutions for schools and universities. They needed a new website to showcase their products and services.',
            'We designed and built a custom website that highlights their unique value proposition and drives conversions.',
        ],
        href: '/case-studies/bright-path',
    },
    {
        client: 'Family Fund',
        service: 'Web design & development',
        date: '2021-02-15',
        title: 'Family Fund',
        summary: [
            'Family Fund is a charity that provides grants to families raising disabled or seriously ill children. They needed a new website to improve the grant application process.',
            'We designed and built a custom website that makes it easy for families to apply for grants and access support services.',
        ],
        href: '/case-studies/family-fund',
    },
    {
        client: 'Green Life',
        service: 'Web design & development',
        date: '2021-01-30',
        title: 'Green Life',
        summary: [
            'Green Life is a sustainable living blog that promotes eco-friendly products and services. They needed a new website to attract more readers and advertisers.',
            'We designed and built a custom website that showcases their content and drives revenue through advertising and affiliate marketing.',
        ],
        href: '/case-studies/green-life',
    },
    {
        client: 'Home Work',
        service: 'Web design & development',
        date: '2021-01-15',
        title: 'Home Work',
        summary: [
            'Home Work is a remote job board that connects job seekers with employers offering remote work opportunities. They needed a new website to improve the job search experience.',
            'We designed and built a custom website that makes it easy for job seekers to find and apply for remote jobs.',
        ],
        href: '/case-studies/home-work',
    },
    ]

export default function Page() {
    return (
        <Layout>
            <Container className="mt-40">
                <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
                    {allComponents.map((component) => (
                        <article key={component.client}>
                            <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                                <div
                                    className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                                    <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                                        <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                                            {component.client}
                                        </h3>
                                    </div>
                                    <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                                        <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                                            {component.service}
                                        </p>
                                        <p className="text-sm text-neutral-950 lg:mt-2">
                                            <time dateTime={component.date}>
                                                {formatDate(component.date)}
                                            </time>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                                    <p className="font-display text-4xl font-medium text-neutral-950">
                                        <Link href={component.href}>{component.title}</Link>
                                    </p>
                                    <div className="mt-6 space-y-6 text-base text-neutral-600">
                                        {component.summary.map((paragraph) => (
                                            <p key={paragraph}>{paragraph}</p>
                                        ))}
                                    </div>
                                    <div className="mt-8 flex">
                                        <Button
                                            href={component.href}
                                            aria-label={`Read case study: ${component.client}`}
                                        >
                                            Buy this component
                                        </Button>
                                    </div>
                                </div>
                            </Border>
                        </article>
                    ))}
                </div>
            </Container>
        </Layout>
    )
}