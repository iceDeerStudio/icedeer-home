"use client"

import { cn } from '@/lib/cn'
import IcedeerFontSvg from './icedeer-font-svg'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Header({ pages }) {
    const [fade, setFade] = useState(true)
    const [activePage, setActivePage] = useState(null)

    const pathname = usePathname()
    const matchPath = (path) => {
        if (path.indexOf('#') !== -1) {
            return path.substring(1) == activePage
        }
        return path == pathname
    }

    useEffect(() => {
        const handleScroll = () => {
            if (!fade && window.scrollY <= 32) {
                setActivePage(null)
                setFade(true)
            } else if (fade && window.scrollY > 32) {
                setFade(false)
            }
        }
        document.addEventListener("scroll", handleScroll)

        return () => removeEventListener("scroll", handleScroll)
    }, [fade])

    useEffect(() => {
        const handleScroll = () => {
            for (const page of pages) {
                if (page.route.indexOf('#') === -1) {
                    continue;
                }
                const id = page.route.substring(1)
                const dom = document.getElementById(id)
                const rect = dom.getBoundingClientRect()

                if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                    setActivePage(id)
                    break;
                }
            }
        }
        document.addEventListener("scroll", handleScroll)

        return () => removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={cn(
            "sticky top-0 left-0 h-16 z-50 transition-all",
            fade ? "bg-bg2" : "use-shadow border-minor/5 bg-bg1"
        )}>
            <div className='useMax h-full flex items-center gap-4 text-sm'>
                <IcedeerFontSvg className='h-6 text-main' />
                <span className='w-[1px] h-6 ml-4 bg-slate-900/20'></span>
                {pages.map(page => (
                    <a key={page.route} href={page.route}>
                        <div
                            className={cn(
                                'block hover:bg-blue-800/5 px-4 h-9 leading-9 font-bold text-minor rounded',
                                matchPath(page.route) ? 'text-main' : 'text-minor'
                            )}
                        >
                            {page.label}
                        </div>
                    </a>
                ))}
                <button className='px-4 h-9 ml-auto rounded bg-minor text-bg1'>联系我们</button>
            </div>
        </header>

    )
}