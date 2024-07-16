import { StaticImageData } from 'next/image'
import CreativePortfolio from '@/images/tempaltes/creative-portfolio.jpg'
import DeveloperPortfolio from '@/images/tempaltes/developer-portfolio.png'

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
  image: StaticImageData
  imageWidth: number
  imageHeight: number
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
    image: CreativePortfolio,
    imageWidth: 1600,
    imageHeight: 1200,
  },
  {
    name: 'Developer Portfolio',
    date: '2024-05-10',
    title: 'Developer Portfolio',
    summary: [
      'Discover a developer portfolio site showcasing a collection of projects and skills. This site features a clean and professional design, highlighting expertise in web development and software engineering. Ideal for showcasing a portfolio of work and attracting potential clients or employers.',
    ],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/1fa6d2af-7efb-4f9b-886e-976f52f1865f',
    preview: 'https://v1.lndev.me/',
    stack: ['Next 13 - Page', 'Scss', 'Framer Motion', 'TS'],
    price: 99,
    image: DeveloperPortfolio,
    imageWidth: 2870,
    imageHeight: 1556,
  },
]
