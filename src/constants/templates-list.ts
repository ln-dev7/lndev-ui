import { StaticImageData } from 'next/image'
import CreativePortfolio1 from '@/images/tempaltes/creative-portfolio.jpg'

export interface TemplatesListInterface {
  name: string
  date: string
  title: string
  summary: string[]
  purchase: string
  preview: string
  stack: string[]
  price: number
  inspiration?: string
  images: StaticImageData[]
}

export const templatesList: TemplatesListInterface[] = [
  {
    name: 'Creative Portfolio',
    date: '2024-07-17',
    title: 'Creative Portfolio',
    summary: [
      'Explore a creative portfolio site showcasing innovative and aesthetically pleasing web interfaces. This site features recent projects, demonstrating expertise in front-end development and modern design integration. Ideal for discovering inspiring examples of web design and interactive application development.',
    ],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/a7b4451c-b383-4e1f-b215-8a793292f5a0',
    preview: 'https://v0.leonelngoya.com/',
    stack: ['NextJS', 'Tailwind', 'Framer Motion', 'GSAP', 'TS'],
    price: 129,
    images: [CreativePortfolio1],
  },
]
