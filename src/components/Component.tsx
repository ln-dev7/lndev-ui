import { SparkleIcon } from '@/components/SparkleIcon'
import Link from 'next/link'
import { Button } from '@/catalyst/button'
import { Border } from '@/components/Border'
import { formatDate } from '@/libs/formatDate'
import { Badge } from '@/catalyst/badge'
import { Heading, Subheading } from '@/catalyst/heading'
import { Text } from '@/catalyst/text'
import { ComponentListInterface } from '@/constants/components-list'
import { ExternalLink } from 'lucide-react'
import { ButtonPremium } from '@/components/ButtonPremium'
import Image from 'next/image'

export default function Component({
  component,
}: {
  component: ComponentListInterface
}) {
  const id = component.name.toLowerCase().replace(/\s/g, '-')
  return (
    <article id={id}>
      <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pb-4 pt-6 md:pb-10 md:pt-16">
        <div className="col-span-full lg:col-span-1">
          <div className="sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:block">
            <div className="hidden sm:flex sm:items-center sm:gap-x-6 lg:block">
              <Subheading className="mt-6 sm:mt-0 lg:mt-8">
                {component.name}
              </Subheading>
            </div>
            <div className="mt-1 flex flex-wrap gap-4 sm:mt-0 lg:block">
              <div className="flex flex-wrap gap-3 lg:mt-2">
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
          {component.price > 0 ? (
            <ButtonPremium component={component} />
          ) : (
            <Button
              className="mt-4 w-fit"
              href={component.purchase}
              target="_blank"
              aria-label={`Component: ${component.name}`}
            >
              Get source code
            </Button>
          )}
        </div>
        <div className="col-span-full lg:col-span-2">
          <Heading className="flex items-center">
            {component.price > 0 && (
              <SparkleIcon className="mr-2 h-4 w-4 shrink-0" />
            )}
            <Link href={`#${id}`}>{component.title}</Link>
            {component.price > 0 ? (
              <Badge className="ml-2 shrink-0" color="amber">
                {component.price} €
              </Badge>
            ) : (
              <Badge className="ml-2 shrink-0" color="green">
                Free
              </Badge>
            )}
          </Heading>
          <div className="relative mt-6 flex h-[400px] w-full items-center justify-center rounded-xl border border-black/10 p-1 md:h-[640px] md:flex-1 dark:border-white/10">
            {component.image ? (
              <Link
                href={component.preview}
                target="_blank"
                className="group absolute inset-0 h-full w-full p-1"
              >
                <Image
                  src={component.image}
                  alt={component.name}
                  className="h-full w-full rounded-lg object-cover duration-300 ease-in-out group-hover:opacity-50"
                  loading="lazy"
                />
                <span className="text-md absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-black bg-white px-5 py-2 font-medium opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 dark:border-white dark:bg-black">
                  Live preview
                </span>
              </Link>
            ) : (
              <iframe
                src={component.preview}
                className="h-full w-full rounded-lg"
                loading="lazy"
                title={component.name}
              />
            )}
          </div>
          <div className="mt-4 flex w-full items-center justify-between">
            <Button href={component.preview} className="" target="_blank" plain>
              Preview
              <ExternalLink className="h-4 w-4" />
            </Button>
            {component.inspiration && (
              <Button
                href={component.inspiration}
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
