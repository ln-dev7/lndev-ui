'use client'
import { SparkleIcon } from '@/components/SparkleIcon'
import { Button } from '@/catalyst/button'
import { Strong, Text, TextLink } from '@/catalyst/text'
import { Divider } from '@/catalyst/divider'

import {
  Alert,
  AlertActions,
  AlertDescription,
  AlertTitle,
} from '@/catalyst/alert'
import { useState } from 'react'
import { ComponentListInterface } from '@/constants/components-list'
import { X } from 'lucide-react'

export function ButtonAllAccess() {
  let [isOpen, setIsOpen] = useState(false)
  const PRICE = 25
  return (
    <div className="flex w-full items-center justify-center">
      <Button
        className="w-full rounded-full !border-white sm:w-fit"
        onClick={() => setIsOpen(true)}
        aria-label={`Component: All Access to lndev/ui`}
        type="button"
        color="white"
      >
        <SparkleIcon className="mr-1 h-4 w-4 shrink-0" />
        Get all access
        <span className="h-1 w-1 rounded-full bg-black"></span>
        <span className="">{PRICE} €</span>
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
        <AlertTitle>All access to lndev/ui ( components ) Premium</AlertTitle>
        <AlertDescription>
          You wish to pay <Strong>{PRICE} euros</Strong> for lifetime access to
          all premium components. <br />
          After your purchase, you will receive a zip file containing the source
          code of every available component. <br />
          Additionally, each time a new component is added, you will
          automatically receive the zip file of the new component along with any
          updates. <br />
          <Divider className="my-4" />
          All zip files will be available at any time after your purchase from
          your{' '}
          <Strong>
            <TextLink
              href="https://app.lemonsqueezy.com/my-orders"
              target="_blank"
            >
              Lemon Squeezy dashboard
            </TextLink>
          </Strong>
          . Once the payment is made, simply log in to your dashboard to access
          the files and updates again.
          <Divider className="my-4" />
          If you have any questions, please{' '}
          <Strong>
            <TextLink href="mailto:leonelngoya@gmail.com">Contact me</TextLink>
          </Strong>
          .
          <Divider className="mt-4" />
        </AlertDescription>
        <AlertActions className="!w-full">
          <Button
            href="https://lndev-ui.lemonsqueezy.com/buy/3a21351e-5fe2-4664-9a94-a4bcde619e2d"
            target="_blank"
            color="amber"
            className="!w-full"
          >
            Get all access
          </Button>
        </AlertActions>
      </Alert>
    </div>
  )
}
