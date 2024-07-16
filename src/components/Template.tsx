import { SparkleIcon } from '@/components/SparkleIcon'
import Link from 'next/link'
import { Button } from '@/catalyst/button'
import { Border } from '@/components/Border'
import { formatDate } from '@/libs/formatDate'
import { Badge } from '@/catalyst/badge'
import { Heading, Subheading } from '@/catalyst/heading'
import { Text } from '@/catalyst/text'
import { TemplatesListInterface } from '@/constants/templates-list'
import { ExternalLink, Lock } from 'lucide-react'
import { ButtonPremium } from '@/components/ButtonPremium'
import Image from 'next/image'

export default function Template({
  template,
}: {
  template: TemplatesListInterface
}) {
  const id = template.name.toLowerCase().replace(/\s/g, '-')
  return (
    <article id={id}>
      <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pb-4 pt-6 md:pb-10 md:pt-16">
        <div className="col-span-full lg:col-span-1">
          <div className="sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:block">
            <div className="hidden sm:flex sm:items-center sm:gap-x-6 lg:block">
              <Subheading className="mt-6 sm:mt-0 lg:mt-8">
                {template.name}
              </Subheading>
            </div>
            {template.summary && (
              <div className="mb-5 mt-3 space-y-6 text-base text-neutral-600">
                {template.summary.map((paragraph) => (
                  <Text key={paragraph}>{paragraph}</Text>
                ))}
              </div>
            )}
            <div className="mt-1 flex flex-wrap gap-4 sm:mt-0 lg:block">
              <div className="flex flex-wrap gap-3 lg:mt-2">
                {template.stack.map((stack) => (
                  <Badge key={stack}>{stack}</Badge>
                ))}
              </div>
              <Text className="lg:mt-2">
                <time dateTime={template.date}>
                  {formatDate(template.date)}
                </time>
              </Text>
            </div>
          </div>
          <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row">
            <Button
              className="w-full sm:w-fit"
              href={template.purchase}
              target="_blank"
              aria-label={`Component: ${template.name}`}
              color="amber"
            >
              Get source code
              <Lock className="h-4 w-4" />
            </Button>
            <Button
              className="w-full sm:w-fit"
              href={template.preview}
              target="_blank"
              aria-label={`Component: ${template.name}`}
            >
              Live preview
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="col-span-full lg:col-span-2">
          <Heading className="flex items-center">
            {template.price > 0 && (
              <SparkleIcon className="mr-2 h-4 w-4 shrink-0" />
            )}
            <Link href={`#${id}`}>{template.title}</Link>
            {template.price > 0 ? (
              <Badge className="ml-2 shrink-0" color="amber">
                {template.price} €
              </Badge>
            ) : (
              <Badge className="ml-2 shrink-0" color="green">
                Free
              </Badge>
            )}
          </Heading>
          <div className="relative mt-6 flex h-[400px] w-full items-center justify-center rounded-xl border border-black/10 p-1 md:h-[640px] md:flex-1 dark:border-white/10">
            <Image
              src={template.image}
              alt={template.title}
              className="h-full w-full rounded-lg object-cover"
              width={template.imageWidth}
              height={template.imageHeight}
            />
          </div>
          <div className="mt-4 flex w-full items-center justify-between">
            {template.inspiration && (
              <Button
                href={template.inspiration}
                className=""
                target="_blank"
                plain
              >
                Inspiration
                <ExternalLink className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </Border>
    </article>
  )
}
