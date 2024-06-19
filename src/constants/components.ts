interface Component {
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

export const allComponents = [
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
        inspiration: 'https://x.com/kaihenthoiwane/status/1715445477548970011',
        price: 0
    },
]