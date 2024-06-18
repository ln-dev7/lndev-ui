"use client";
import {Button} from '@/components/Button'
import {useState} from "react";

export function DiscountAlert() {
    const DISCOUNT_CODE = 'LNDEVUI00'
    let [isOpen, setIsOpen] = useState(true)
    const handleDismiss = () => {
        setIsOpen(false)
    }
    let [isCopied, setIsCopied] = useState(false)
    const handleCouponClick = () => {
        navigator.clipboard.writeText(DISCOUNT_CODE)
        setIsCopied(true)
        const interval =
            setInterval(() => {
                setIsCopied(false)
            }, 3000)
        return () => clearInterval(interval)
    }
    return (
        <>
            {
                isOpen ? (
                    <div
                        className={`pointer-events-none fixed inset-x-0 bottom-0 z-10 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8`}
                    >
                        <div
                            className="pointer-events-auto flex items-center justify-between gap-x-6 bg-black dark:bg-white px-6 py-2.5 backdrop-blur-md sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
                            <p className="text-sm leading-6 text-white dark:text-black">For the launch of lndev/ui we offer 15% discount
                                with this coupon code <a href="#" onClick={handleCouponClick}
                                >

                    <span
                        className="ml-1 cursor-pointer rounded-full bg-white dark:bg-black px-2 py-0.5 text-sm font-medium text-black dark:text-white">
                        {
                            isCopied ? 'Copied !' : DISCOUNT_CODE
                        }
                    </span></a>
                            </p>
                            <button type="button" className="-m-1.5 flex-none p-1.5"
                                    onClick={handleDismiss}
                            ><span className="sr-only">Dismiss</span>
                                <svg className="h-5 w-5 text-white dark:text-black" viewBox="0 0 20 20" fill="currentColor"
                                     aria-hidden="true">
                                    <path
                                        d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                ) : (
                    <></>
                )
            }
        </>
    )
}