"use client"

import { cn } from '@/lib/cn'
import IcedeerFontSvg from './icedeer-font-svg'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Header({ pages }) {
    const [fade, setFade] = useState(true)

    const pathname = usePathname()
    const matchPath = (path) => {
        return path === pathname
    }

    useEffect(() => {
        const listener = () => {
            if (!fade && window.scrollY <= 16) {
                setFade(true)
            } else if (fade && window.scrollY > 16) {
                setFade(false)
            }
        }
        document.addEventListener("scroll", listener)

        return () => removeEventListener("scroll", listener)
    }, [fade])

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