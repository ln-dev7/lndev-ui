import {SparkleIcon} from '@/components/SparkleIcon'
import {StarField} from "@/components/StarField"
import {IconLink} from "@/components/IconLink"
import {Layout} from '@/components/Layout'
import {Container} from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import {Button} from '@/catalyst/button'
import {Border} from '@/components/Border'
import {formatDate} from "@/libs/formatDate";
import {Badge} from '@/catalyst/badge'
import {Heading, Subheading} from '@/catalyst/heading'
import {Strong, Text, TextLink} from '@/catalyst/text'

import HowItWorks from "@/components/HowItWorks";
import {allComponents} from "@/constants/components";
import {ExternalLink} from "lucide-react";

export default function Page() {
    return (
        <Layout>
            <Container className="mt-0">
                {/*<HowItWorks />*/}
                <div className="space-y-10 sm:space-y-12 lg:space-y-16">
                    {allComponents.map((component) => (
                        <article key={component.name}>
                            <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-6 md:pt-16">
                                <div
                                    className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                                    <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                                        <Subheading className="mt-6 sm:mt-0 lg:mt-8">
                                            {component.name}
                                        </Subheading>
                                    </div>
                                    <div className="mt-1 flex flex-wrap gap-4 sm:mt-0 lg:block">
                                        <div className="flex gap-3 lg:mt-2 flex-wrap">
                                            {component.stack.map((stack) => (
                                                <Badge key={stack}>{stack}</Badge>
                                            ))}
                                        </div>
                                        <Text className="lg:mt-2">
                                            <time dateTime={component.date}>
                                                {formatDate(component.date)}
                                            </time>
                                        </Text>
                                    </div>
                                </div>
                                <div className="col-span-full lg:col-span-2">
                                    <Heading className="flex items-center">
                                        {
                                            component.price > 0 && (
                                                <SparkleIcon className="w-4 h-4 mr-2 shrink-0"/>
                                            )
                                        }
                                        <Link href={component.purchase}>{component.title}</Link>
                                        {
                                            component.price > 0 ? (
                                                <Badge className="ml-2 shrink-0"
                                                       color="amber">{component.price} €</Badge>
                                            ) : (
                                                <Badge className="ml-2 shrink-0" color="green">Free</Badge>
                                            )
                                        }
                                    </Heading>
                                    <div
                                        className="flex h-[400px] p-1 mt-6 w-full items-center justify-center rounded-xl border border-black/10 dark:border-white/10 md:h-[640px] md:flex-1">
                                        <iframe
                                            src={component.preview}
                                            className="w-full h-full rounded-lg"
                                            loading="lazy"
                                            title={component.name}
                                        />
                                    </div>
                                    <div className="mt-6 space-y-6 text-base text-neutral-600">
                                        {component.summary.map((paragraph) => (
                                            <Text key={paragraph}>{paragraph}</Text>
                                        ))}
                                    </div>
                                    <div className="mt-8 flex flex-col gap-2">
                                        <Button
                                            className="w-fit"
                                            href={component.purchase}
                                            target="_blank"
                                            aria-label={`Component: ${component.name}`}
                                        >
                                            {
                                                component.price > 0 && (
                                                    <SparkleIcon className="w-4 h-4 mr-1 shrink-0"/>
                                                )
                                            }
                                            Get source code
                                            {
                                                component.price > 0 && (
                                                    <>
                                                        <span className="w-1 h-1 bg-white rounded-full"></span>
                                                        <span className="">{component.price} €</span>
                                                    </>
                                                )
                                            }
                                        </Button>
                                        {
                                            component.inspiration && (
                                                <Button href={component.inspiration} className="self-end" target="_blank"
                                                        plain>
                                                    Inspiration
                                                    <ExternalLink className="w-4 h-4"/>
                                                </Button>
                                            )
                                        }
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