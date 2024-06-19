export interface ComponentListInterface {
    name: string
    date: string
    title: string
    summary: string[]
    purchase: string
    preview: string
    stack: string[]
    price: number
    inspiration?: string
}

export const componentsList: ComponentListInterface[] = [
    {
        name: 'Dynamic Action Bar',
        date: '2024-06-13',
        title: 'Dynamic Action Bar',
        summary: [
            ''
        ],
        purchase: 'https://lndev-ui.lemonsqueezy.com/buy/ccac8754-562c-4be3-9266-ceb4d8011160',
        preview: 'https://dynamic-action-bar.vercel.app/',
        stack: ['Vite/Html', 'JS/Gsap', 'Tailwind'],
        inspiration: 'https://x.com/henrikruscon/status/1800862855648129449',
        price: 0
    },
    {
        name: 'Login Button',
        date: '2024-06-12',
        title: 'Login Button',
        summary: [
            ''
        ],
        purchase: 'https://lndev-ui.lemonsqueezy.com/buy/6d231eb6-515b-454a-868c-dfd199753e2b',
        preview: 'https://login-button-1.vercel.app/',
        stack: ['Vite/Html', 'JS/Gsap', 'Sass'],
        price: 3
    },
    {
        name: 'Dual Button',
        date: '2023-11-05',
        title: 'Dual Button',
        summary: [
            ''
        ],
        purchase: 'https://lndev-ui.lemonsqueezy.com/buy/daaea3a5-2c69-4254-8dfd-d041276b3268',
        preview: 'https://dual-button-proto.vercel.app/',
        stack: ['Vite/Html', 'JS/Gsap', 'Sass'],
        inspiration: 'https://www.figma.com/file/xIZPFfjruOuPR1oiVgVUgC/Prototype-Dial-Button-(Community)?node-id=1%3A191&mode=dev',
        price: 0
    },
    {
        name: 'Dark Mode Toggle',
        date: '2023-10-22',
        title: 'Dark Mode Toggle',
        summary: [
            ''
        ],
        purchase: 'https://lndev-ui.lemonsqueezy.com/buy/ead34820-936b-43d3-8e54-5814e4a77044',
        preview: 'https://toggle-dark-mode-button.vercel.app/',
        stack: ['Vite/Html', 'JS/Gsap', 'Sass'],
        price: 0
    },
    {
        name: 'Delete Interaction',
        date: '2023-07-21',
        title: 'Delete Interaction',
        summary: [
            ''
        ],
        purchase: 'https://lndev-ui.lemonsqueezy.com/buy/8e600533-d148-4727-8004-6b0f1611b5c7',
        preview: 'https://delete-interaction-1.vercel.app/',
        stack: ['Vite/Html', 'JS/Gsap', 'Sass'],
        price: 0
    },
    {
        name: 'Form With Validation',
        date: '2022-10-20',
        title: 'Form With Validation',
        summary: [
            ''
        ],
        purchase: 'https://lndev-ui.lemonsqueezy.com/buy/2052c9a1-9132-47dc-bb57-34fc926dc435',
        preview: 'https://form-with-validation1.vercel.app/',
        stack: ['Html', 'JS', 'Sass'],
        price: 0
    },
]