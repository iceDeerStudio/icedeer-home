'use client'

import { cn } from '@/app/lib/cn'

export default function Title({ route, title, white }) {
    const handleNavigate = () => {
        const dom = document.getElementById(route)
        window.scrollTo({
            top: dom.offsetTop - 72,
            behavior: 'smooth',
        })
    }
    return (
        <h2
            onClick={handleNavigate}
            className={cn(
                'group mr-sm h-16 cursor-pointer whitespace-nowrap text-5xl font-bold leading-[64px]',
                !white && 'text-main',
            )}
        >
            <span className='group-hover:underline'>#</span> {title}
        </h2>
    )
}
