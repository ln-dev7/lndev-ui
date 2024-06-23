'use client'
import { SparkleIcon } from '@/components/SparkleIcon'
import { Button } from '@/catalyst/button'
import { Strong, Text, TextLink } from '@/catalyst/text'
import { Divider } from '@/catalyst/divider'
import { ButtonAllAccess } from '@/components/ButtonAllAccess'

import {
  Alert,
  AlertActions,
  AlertDescription,
  AlertTitle,
} from '@/catalyst/alert'
import { useState } from 'react'
import { ComponentListInterface } from '@/constants/components-list'
import { X } from 'lucide-react'

export function ButtonPremium({
  component,
}: {
  component: ComponentListInterface
}) {
  let [isOpen, setIsOpen] = useState(false)
  return (
    <div className="mt-4 w-fit">
      <Button
        className="w-fit"
        onClick={() => setIsOpen(true)}
        aria-label={`Component: ${component.name}`}
        type="button"
      >
        <SparkleIcon className="mr-1 h-4 w-4 shrink-0" />
        Get source code
        <span className="h-1 w-1 rounded-full bg-white"></span>
        <span className="">{component.price} €</span>
      </Button>
      <Alert open={isOpen} onClose={setIsOpen}>
        <div className="absolute right-4 top-4 flex items-center justify-center rounded-full">
          <Button
            onClick={() => setIsOpen(false)}
            className="cursor-pointer !rounded-full"
            outline
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <AlertTitle>{component.name}</AlertTitle>
        <AlertDescription>
          You would like to pay <Strong>{component.price} euro</Strong> to have
          access to the source code of this component. <br />
          After your purchase you will receive a zip containing the component
          code. <br />
          <Divider className="my-4" />
          This zip will be available at any time after your purchase from your{' '}
          <Strong>
            <TextLink
              href="https://app.lemonsqueezy.com/my-orders"
              target="_blank"
            >
              Lemon Squeezy dashboard
            </TextLink>
          </Strong>
          , So once you&apos;ve paid, simply log in to your dashboard to access
          it again.
          <Divider className="my-4" />
          If you have any questions, please{' '}
          <Strong>
            <TextLink href="mailto:leonelngoya@gmail.com">Contact me</TextLink>
          </Strong>
          .
          <Divider className="mt-4" />
        </AlertDescription>
        <AlertActions>
          <Button href={component.purchase} target="_blank" color="amber">
            Buy now
          </Button>
          <span>or</span>
          <ButtonAllAccess />
        </AlertActions>
      </Alert>
    </div>
  )
}
