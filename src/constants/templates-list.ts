import { StaticImageData } from 'next/image'
import CreativePortfolio from '@/images/templates/creative-portfolio.jpg'
import DeveloperPortfolio from '@/images/templates/developer-portfolio.png'
import TheFrenchTototte from '@/images/templates/the-french-tototte.png'
import CanonYaounde from '@/images/templates/canon-yaounde.png'
import FlutterCameroon from '@/images/templates/flutter-cameroon.png'
import WebAppPhotography from '@/images/templates/web-app-photography.png'

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
    name: 'The French Tototte',
    date: '2024-05-31',
    title: 'The French Tototte',
    summary: [
      'A premium e-commerce template designed for high-end baby products. Featuring customizable "totottes" with exquisite flavors and luxurious accessories, this template showcases your products with style and elegance.',
    ],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/f9a16c7d-f012-4ebd-baf1-46ebbf356a4c',
    preview: 'https://thefrenchtototte.lndev.me/',
    stack: ['NextJS', 'Tailwind', 'Swiper', 'GSAP', 'TS'],
    inspiration: 'https://www.youtube.com/watch?v=FVEqE47pOLw',
    price: 0,
    image: TheFrenchTototte,
    imageWidth: 2870,
    imageHeight: 1556,
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
  {
    name: 'Football Club',
    date: '2022-11-21',
    title: 'Football Club',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/0edfc331-bfcc-41aa-b749-d94925f420ad',
    preview: 'https://canon-yde-inte.vercel.app/',
    stack: ['Html', 'Scss', 'JS'],
    price: 0,
    image: CanonYaounde,
    imageWidth: 2872,
    imageHeight: 1552,
  },
  {
    name: 'Photography Web App',
    date: '2022-09-23',
    title: 'Photography Web App',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/a92bf7e5-0cfe-4a93-8729-9e2de7d284f0',
    preview: 'https://web-app-photography.vercel.app/',
    stack: ['Html/Vite', 'Scss', 'JS'],
    price: 0,
    image: WebAppPhotography,
    imageWidth: 2872,
    imageHeight: 1552,
  },
  {
    name: 'Community Event',
    date: '2022-08-07',
    title: 'Community Event',
    summary: [''],
    purchase:
      'https://lndev-ui.lemonsqueezy.com/buy/67825a89-e9ad-4dde-a225-85f6880f393e',
    preview: 'https://flutter-cm-inte.vercel.app/',
    stack: ['Html', 'Scss', 'JS'],
    price: 0,
    image: FlutterCameroon,
    imageWidth: 2872,
    imageHeight: 1552,
  },
]
