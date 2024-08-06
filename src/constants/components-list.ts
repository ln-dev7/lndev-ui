import { StaticImageData } from 'next/image'
import DynamicCarousel0 from '@/images/components/dynamic-carousel-0.png'
import DynamicCarousel1 from '@/images/components/dynamic-carousel-1.png'
import InteractiveTouristicGallery from '@/images/components/interactive-touristic-gallery.png'
import WillYouBeMyValentine from '@/images/components/will-you-be-my-valentine.png'
import ContinentMedals from '@/images/components/continent-medals.png'

export interface ComponentListInterface {
  name: string
  title: string
  summary: string[]
  purchase: string
  preview: string
  stack: string[]
  price: number
  inspiration?: string
  image?: StaticImageData
}

export const componentsList: ComponentListInterface[] = [
  {
    name: 'Continent Medals',
    title: 'Continent Medals Animation',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/a4d98ff3-37d3-447c-ad8d-9a9a0c5e0fde',
    preview: 'https://continent-medals-animation.vercel.app/',
    stack: ['NextJS', 'Framer Motion', 'Lottie', 'Tailwind'],
    price: 10,
    image: ContinentMedals,
  },
  {
    name: 'Email Interaction',
    title: 'Email Interaction',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/9b19cde7-0fb3-46bd-9a76-92f2256aa589',
    preview: 'https://email-interaction.vercel.app/',
    stack: ['Vite/Html', 'JS/Gsap', 'Tailwind'],
    inspiration: 'https://x.com/alisamadi__/status/1817002092625822138',
    price: 3,
  },
  {
    name: 'Dynamic Carousel 3',
    title: 'Dynamic Carousel 3',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/ec61db6b-2571-41c0-9f00-0bad77dd675f',
    preview: 'https://stripe-section-3.vercel.app/',
    stack: ['Vite/Html', 'JS/Gsap', 'Tailwind'],
    inspiration: 'https://stripe.com/en-de/use-cases/finance-automation',
    price: 0,
  },
  {
    name: 'Next Component 1',
    title: 'Next Component 1',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/ba75b4f2-759f-4db6-b692-6062931efda9',
    preview: 'https://next-comp-1.vercel.app/',
    stack: ['Vite/Html', 'JS/Gsap', 'Tailwind'],
    inspiration: 'https://nextjs.org',
    price: 0,
  },
  {
    name: 'Guest Picker',
    title: 'Guest Picker',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/e956737e-2866-4d8c-b9a7-f5551c948cd8',
    preview: 'https://guest-picker-animation.vercel.app/',
    stack: ['Vite/Html', 'JS/Gsap', 'Tailwind'],
    inspiration: 'https://x.com/60fpsdesign/status/1816533872198189185',
    price: 3,
  },
  {
    name: 'Feedback Interaction',
    title: 'Feedback Interaction',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/ef75bb48-9140-45fb-aa77-141f346bc357',
    preview: 'https://feedback-interaction.vercel.app/',
    stack: ['Vite/Html', 'JS/Gsap', 'Tailwind'],
    inspiration: 'https://x.com/musabalfawal/status/1816845946044465339',
    price: 0,
  },
  {
    name: 'Counter Animation 1',
    title: 'Counter Animation 1',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/ab12e35f-cd97-40d9-8822-c33cbc0d4d43',
    preview: 'https://counter-animation-1.vercel.app/',
    stack: ['Vite/Html', 'JS/Gsap', 'Tailwind'],
    inspiration: 'https://x.com/alisamadi__/status/1808697530303271369',
    price: 0,
  },
  {
    name: 'Dynamic Carousel 2',
    title: 'Dynamic Carousel 2',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/cb538723-fff1-49f6-9e13-72c17831338e',
    preview: 'https://stripe-section-2.vercel.app/',
    stack: ['Vite/Html', 'JS/Gsap', 'Tailwind'],
    inspiration: 'https://stripe.com/',
    price: 3,
  },
  {
    name: 'Dynamic Carousel 1',
    title: 'Dynamic Carousel 1',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/ae035003-80d6-49c6-9a61-6e3ea0db9941',
    preview: 'https://stripe-section-1.vercel.app/',
    stack: ['Vite/Html', 'JS/Gsap', 'Tailwind'],
    inspiration: 'https://stripe.com/',
    price: 0,
    image: DynamicCarousel1,
  },
  {
    name: 'Steps animation',
    title: 'Steps animation',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/308263c9-5299-4c6d-9640-52bdaef6d4b9',
    preview: 'https://steps-animation-pied.vercel.app/',
    stack: ['Vite/Html', 'JS/Gsap', 'Tailwind'],
    inspiration: 'https://x.com/zzerou_/status/1812509007648846300?s=46',
    price: 3,
  },
  {
    name: 'Input animation',
    title: 'Input animation',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/ddcc71e2-7183-43b3-bc8e-08db3e81d234',
    preview: 'https://password-strength-anim.vercel.app/',
    stack: ['Vite/Html', 'JS/Gsap', 'Scss'],
    inspiration: 'https://x.com/ln_dev7/status/1721123003180748881?s=46',
    price: 3,
  },
  {
    name: 'Clerk Component 1',
    title: 'Clerk Component 1',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/7b3be3e1-395d-421b-91e7-d842e11868be',
    preview: 'https://clerk-comp-1.vercel.app/',
    stack: ['Vite/Html', 'JS/Gsap', 'Tailwind'],
    inspiration: 'https://clerk.com',
    price: 0,
  },
  {
    name: 'Dynamic Carousel 0',
    title: 'Dynamic Carousel 0',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/6b618584-11c6-4d37-8a37-dfc5edf33fdb',
    preview: 'https://bc-challenge-04-06-24.vercel.app/',
    stack: ['NextJS', 'Tailwind'],
    inspiration: 'https://www.youtube.com/watch?v=L_vtMGGkfoI',
    price: 0,
    image: DynamicCarousel0,
  },
  {
    name: 'Will you be my valentine',
    title: 'Will you be my valentine',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/12b07402-e831-481c-b2f4-5f114067ba4c',
    preview: 'https://will-you-be-my-valentine-6lvl.vercel.app/',
    stack: ['Vite/Html', 'JS/Gsap', 'Scss'],
    inspiration:
      'https://www.figma.com/proto/aJApWjxpJFumL0bWIKjobP/Will-you-be-my-Valentine%3F-(Community)?type=design&node-id=1-2&t=aJIwMu7bwluIs3Le-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2',
    price: 3,
    image: WillYouBeMyValentine,
  },
  {
    name: 'Interactive Touristic Gallery',
    title: 'Interactive Touristic Gallery',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/bb8deae7-098e-40c2-a34e-33de9c7833c5',
    preview: 'https://interactive-bloc-touristic-gallery.vercel.app/',
    stack: ['Vite/Html', 'JS/Gsap', 'Tailwind'],
    inspiration: 'https://x.com/EmaniUi/status/1804922365828051220',
    price: 0,
    image: InteractiveTouristicGallery,
  },
  {
    name: 'Interactive Hamburger Menu',
    title: 'Interactive Hamburger Menu',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/d3ecca80-fa9c-4d8f-bb0e-1980027132c3',
    preview: 'https://interactive-hamburger-menu.vercel.app/',
    stack: ['Vite/Html', 'JS/Gsap', 'Tailwind'],
    inspiration: 'https://x.com/EmaniUi/status/1804514213399765244',
    price: 3,
  },
  {
    name: 'Dynamic Action Bar',
    title: 'Dynamic Action Bar',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/ccac8754-562c-4be3-9266-ceb4d8011160',
    preview: 'https://dynamic-action-bar.vercel.app/',
    stack: ['Vite/Html', 'JS/Gsap', 'Tailwind'],
    inspiration: 'https://x.com/henrikruscon/status/1800862855648129449',
    price: 0,
  },
  {
    name: 'Login Button',
    title: 'Login Button',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/6d231eb6-515b-454a-868c-dfd199753e2b',
    preview: 'https://login-button-1.vercel.app/',
    stack: ['Vite/Html', 'JS/Gsap', 'Sass'],
    price: 3,
  },
  {
    name: 'Dual Button',
    title: 'Dual Button',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/daaea3a5-2c69-4254-8dfd-d041276b3268',
    preview: 'https://dual-button-proto.vercel.app/',
    stack: ['Vite/Html', 'JS/Gsap', 'Sass'],
    inspiration:
      'https://www.figma.com/file/xIZPFfjruOuPR1oiVgVUgC/Prototype-Dial-Button-(Community)?node-id=1%3A191&mode=dev',
    price: 0,
  },
  {
    name: 'Dark Mode Toggle',
    title: 'Dark Mode Toggle',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/ead34820-936b-43d3-8e54-5814e4a77044',
    preview: 'https://toggle-dark-mode-button.vercel.app/',
    stack: ['Vite/Html', 'JS/Gsap', 'Sass'],
    price: 0,
  },
  {
    name: 'Delete Interaction',
    title: 'Delete Interaction',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/8e600533-d148-4727-8004-6b0f1611b5c7',
    preview: 'https://delete-interaction-1.vercel.app/',
    stack: ['Vite/Html', 'JS/Gsap', 'Sass'],
    price: 0,
  },
  {
    name: 'Form With Validation',
    title: 'Form With Validation',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/2052c9a1-9132-47dc-bb57-34fc926dc435',
    preview: 'https://form-with-validation1.vercel.app/',
    stack: ['Html', 'JS', 'Sass'],
    price: 0,
  },
]
