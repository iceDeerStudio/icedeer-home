'use client'

import { cn } from '@/app/lib/cn'

import IcedeerFontSvg from '../../public/icedeer-font-svg'
import Navigator from '@/components/navigator'

import { useEffect, useState } from 'react'

export default function Navigation({ pages }) {
    const [fade, setFade] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            if (!fade && window.scrollY <= 32) {
                setFade(true)
            } else if (fade && window.scrollY > 32) {
                setFade(false)
            }
        }
        document.addEventListener('scroll', handleScroll)

        return () => removeEventListener('scroll', handleScroll)
    }, [fade])

    return (
        <header
            className={cn('sticky left-0 top-0 z-50 h-16 transition-all', fade ? 'bg-bg2' : 'use-shadow border-minor/5 bg-bg1')}
        >
            <div className='useMax flex h-full items-center gap-4 text-sm'>
                <IcedeerFontSvg className='h-6 text-main' />
                <span className='ml-4 h-6 w-[1px] bg-slate-900/20'></span>
                <Navigator
                    pages={pages}
                    match
                    className='block h-9 cursor-pointer rounded px-4 font-bold leading-9 text-shadow hover:bg-blue-800/5'
                />
                <button className='ml-auto h-9 rounded bg-minor px-4 text-bg1'>联系我们</button>
            </div>
        </header>
    )
}
