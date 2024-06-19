"use client";
import {SparkleIcon} from '@/components/SparkleIcon'
import {Button} from '@/catalyst/button'
import {Strong, Text, TextLink} from '@/catalyst/text'
import {Divider} from '@/catalyst/divider'

import {Alert, AlertActions, AlertDescription, AlertTitle} from '@/catalyst/alert'
import {useState} from 'react'
import { ComponentListInterface} from "@/constants/components-list";

export default function ButtonPremium(
    {component}: {
        component: ComponentListInterface
    }
) {
    let [isOpen, setIsOpen] = useState(false)
    return (
        <div className="w-fit mt-4">
            <Button
                className="w-fit"
                onClick={() => setIsOpen(true)}
                aria-label={`Component: ${component.name}`}
                type="button"
            >
                <SparkleIcon className="w-4 h-4 mr-1 shrink-0"/>
                Get source code
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span className="">{component.price} €</span>
            </Button>
            <Alert open={isOpen} onClose={setIsOpen}>
                <AlertTitle>
                    {component.name}
                </AlertTitle>
                <AlertDescription>
                    You would like to pay <Strong>{component.price} euro</Strong> to have access to the source code of
                    this
                    component. <br/>
                    After your purchase you will receive a zip containing the component code. <br/>
                    <Divider className="my-4"/>
                    This zip will be available at any time after your purchase from your <Strong><TextLink
                    href="https://app.lemonsqueezy.com/my-orders" target="_blank">Lemon Squeezy
                    dashboard</TextLink></Strong>, So once you&apos;ve paid, simply log in to your dashboard to access it
                    again.
                    <Divider className="mt-4"/>
                </AlertDescription>
                <AlertActions>
                    <Button onClick={() => setIsOpen(false)} outline>
                        Close
                    </Button>
                    <Button href={component.purchase} target="_blank" color="amber">
                        Buy now
                    </Button>
                </AlertActions>
            </Alert>
        </div>
    )
}