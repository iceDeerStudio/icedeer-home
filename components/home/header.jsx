"use client"

import { cn } from '@/lib/cn'
import IcedeerFontSvg from './icedeer-font-svg'

import { usePathname } from 'next/navigation'

export default function Header({ pages }) {
    const pathname = usePathname()
    const matchPath = (path) => {
        return path === pathname
    }

    return (
        <header className=" sticky top-0 left-0 use-shadow border-minor/5 h-16 bg-bg1 z-50">
            <div className='useMax h-full flex'>
                <IcedeerFontSvg className='h-6 my-auto mr-auto text-main' />
                <div className='flex items-center text-sm gap-4'>
                    {pages.map(page => (
                        <a key={page.route} href={page.route}>
                            <div
                                className={cn(
                                    'block hover:bg-blue-800/5 px-4 h-9 leading-9 font-bold text-minor transition-colors duration-300 rounded',
                                    matchPath(page.route) ? 'text-main' : ''
                                )}
                            >
                                {page.label}
                            </div>
                        </a>
                    ))}
                    <span className='w-[0.5px] h-7 bg-slate-900/20'></span>
                    <button className='px-4 h-9 rounded bg-minor text-bg1'>联系我们</button>
                </div>
            </div>
        </header>

    )
}