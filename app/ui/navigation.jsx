'use client'

import { cn } from '@/app/lib/cn'
import IcedeerFontSvg from '../../public/icedeer-font-svg'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navigation({ pages }) {
    const [fade, setFade] = useState(true)
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
            top: dom.offsetTop - 64,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        const handleScroll = () => {
            if (!fade && window.scrollY <= 32) {
                setActivePage(pages.find(page => page.route.indexOf('') !== -1).route.substring(1))
                setFade(true)
            } else if (fade && window.scrollY > 32) {
                setFade(false)
            }
        }
        document.addEventListener('scroll', handleScroll)

        return () => removeEventListener('scroll', handleScroll)
    }, [fade])

    useEffect(() => {
        const handleScroll = () => {
            for (const page of pages) {
                if (page.route.indexOf('#') === -1) {
                    continue
                }
                const id = page.route.substring(1)
                const dom = document.getElementById(id)
                const rect = dom.getBoundingClientRect()

                if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                    setActivePage(id)
                    break
                }
            }
        }
        document.addEventListener('scroll', handleScroll)

        return () => removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={cn(
                'sticky left-0 top-0 z-50 h-16 transition-all',
                fade ? 'bg-bg2' : 'use-shadow border-minor/5 bg-bg1',
            )}
        >
            <div className='useMax flex h-full items-center gap-4 text-sm'>
                <IcedeerFontSvg className='h-6 text-main' />
                <span className='ml-4 h-6 w-[1px] bg-slate-900/20'></span>
                {pages.map(page => (
                    <a key={page.route} onClick={() => handleNavigate(page.route)}>
                        <div
                            className={cn(
                                'block h-9 select-none rounded px-4 font-bold leading-9 text-minor hover:bg-blue-800/5',
                                matchPath(page.route) ? 'text-main' : 'text-minor',
                            )}
                        >
                            {page.label}
                        </div>
                    </a>
                ))}
                <button className='ml-auto h-9 rounded bg-minor px-4 text-bg1'>联系我们</button>
            </div>
        </header>
    )
}
