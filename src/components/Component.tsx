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

export default function Component({
  component,
}: {
  component: ComponentListInterface
}) {
  return (
    <article id={component.name.toLowerCase().replace(/\s/g, '-')}>
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
            <Link href={component.preview} target="_blank">
              {component.title}
            </Link>
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
            <iframe
              src={component.preview}
              className="h-full w-full rounded-lg"
              loading="lazy"
              title={component.name}
            />
            {component.blur && (
              <div className="absolute inset-0 p-1">
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-black/5 backdrop-blur-lg dark:bg-black/50">
                  <Button
                    className="absolute bottom-4"
                    href={component.preview}
                    target="_blank"
                  >
                    View demo on big screen
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
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
