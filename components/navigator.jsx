'use client'
import { cn } from '@/app/lib/cn'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navigator({ pages, match, className }) {
    const [activePage, setActivePage] = useState(null)

    const router = useRouter()
    const pathname = usePathname()

    const matchPath = path => {
        if (path.indexOf('#') !== -1) {
            return path.substring(1) == activePage
        }
        return path == pathname
    }
    const handleNavigate = route => {
        if (route.indexOf('#') === -1) {
            router.push(route)
            return
        }
        const dom = document.getElementById(route.substring(1))
        window.scrollTo({
            top: dom.offsetTop - 79,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        const handleScroll = () => {
            for (const page of pages) {
                if (page.route.indexOf('#') === -1) {
                    continue
                }
                const id = page.route.substring(1)
                const dom = document.getElementById(id)
                const rect = dom.getBoundingClientRect()

                if (
                    (rect.top >= 0 && rect.top < window.innerHeight / 2) ||
                    (rect.bottom >= 0 && rect.bottom > window.innerHeight / 2)
                ) {
                    setActivePage(id)
                    break
                }
            }
        }
        if (match) {
            document.addEventListener('scroll', handleScroll)
            handleScroll()
        }

        return () => match && removeEventListener('scroll', handleScroll)
    }, [])

    return pages.map(page => (
        <a
            key={page.route}
            onClick={() => handleNavigate(page.route)}
            className={cn(className, match && matchPath(page.route) && 'text-main')}
        >
            {page.label}
        </a>
    ))
}
