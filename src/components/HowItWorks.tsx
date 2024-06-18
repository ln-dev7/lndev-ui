"use client";
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

import {Alert, AlertActions, AlertDescription, AlertTitle} from '@/catalyst/alert'
import {useState} from 'react'

export default function HowItWorks() {
    let [isOpen, setIsOpen] = useState(false)
    return (
        <div className="w-full flex items-center justify-center mb-16">
            <Button type="button" onClick={() => setIsOpen(true)} color="amber">
                Read this before you start
            </Button>
            <Alert open={isOpen} onClose={setIsOpen}>
                <AlertTitle>
                    How it works ?
                </AlertTitle>
                <AlertDescription>
                    You can click on the "Get source code" button to get the source code of the component.
                    If you want to see the inspiration behind the component, you can click on the "Inspiration"
                    link.
                </AlertDescription>
                <AlertActions>
                    <Button onClick={() => setIsOpen(false)} outline>
                        Close
                    </Button>
                </AlertActions>
            </Alert>
        </div>
    )
}