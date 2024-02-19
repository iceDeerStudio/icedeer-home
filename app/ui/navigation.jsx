'use client'

import { cn } from '@/app/lib/cn'

import IcedeerFontSvg from '../../public/icedeer-font-svg'
import Navigator from '@/components/navigator'

import { useEffect, useState } from 'react'

export default function Navigation({ pages, contacts }) {
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
            <div className='use-max flex h-full items-center gap-4 px-lg text-sm'>
                <IcedeerFontSvg className='h-6 text-main' />
                <span className='ml-4 h-6 w-[1px] bg-slate-900/20'></span>
                <Navigator
                    pages={pages}
                    match
                    className='block h-9 cursor-pointer rounded px-4 font-bold leading-9 text-shadow hover:bg-blue-800/5'
                />
                <button className='group relative ml-auto h-9 rounded bg-minor px-4 text-bg1'>
                    联系我们
                    <div className=' absolute right-0 top-[100%] hidden text-minor group-hover:block '>
                        <div className='use-shadow mt-6 p-1 flex w-40 flex-col rounded bg-bg1'>
                            {contacts.map(contact => (
                                <a
                                    key={contact.title}
                                    href={contact.link}
                                    target='_blank'
                                    className=' flex items-center gap-2 rounded border-bg2 px-xs py-3 last:border-transparent hover:bg-blue-800/5 '
                                >
                                    <div className='h-8 w-8'>{contact.icon}</div>
                                    <p className='text-minor'>{contact.title}</p>
                                    <span className='h-2 w-2 rotate-45 border-t-2 ml-auto mr-xs border-r-2 border-shadow'></span>
                                </a>
                            ))}
                        </div>
                    </div>
                </button>
            </div>
        </header>
    )
}
