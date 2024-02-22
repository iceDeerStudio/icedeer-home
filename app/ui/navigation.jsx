'use client'

import { cn } from '@/app/lib/cn'

import IcedeerFontSvg from '../../public/icedeer-font-svg'
import Navigator from '@/components/navigator'

import { useEffect, useState, useRef } from 'react'

export default function Navigation({ pages, contacts }) {
    const [fadeState, setFadeState] = useState(false)
    const navRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current.getBoundingClientRect().top > -56) setFadeState(false)
            else setFadeState(true)
        }
        document.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => removeEventListener('scroll', handleScroll)
    }, [fadeState])

    return (
        <header
            ref={navRef}
            className={cn(
                'sticky left-0 top-[-56px] z-50 h-[128px] w-full pt-[56px] text-white transition-colors duration-[400ms]',
                fadeState && 'use-shadow bg-bg1 text-font',
            )}
        >
            <div className='use-max flex h-full items-center px-lg'>
                <IcedeerFontSvg className=' mr-sm h-6 text-main' />
                <Navigator pages={pages} match className='m-4 cursor-pointer text-sm hover:font-bold hover:text-main' />
                <button className='group relative ml-auto h-10 rounded bg-main px-6 text-sm text-bg1'>
                    联系我们
                    <div className='use-shadow absolute right-0 top-0 grid w-0 grid-rows-[0fr] overflow-hidden rounded bg-bg1 text-minor opacity-0 transition-all duration-300 group-focus-within:w-48 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100'>
                        <div className='flex min-h-0 flex-col'>
                            {contacts.map(contact => (
                                <a
                                    key={contact.title}
                                    href={contact.link}
                                    target='_blank'
                                    className=' flex items-center gap-2 whitespace-nowrap rounded border-bg2 px-sm py-3 last:border-transparent hover:bg-blue-800/5 '
                                >
                                    <div className='h-8 w-8'>{contact.icon}</div>
                                    <p className='text-minor'>{contact.title}</p>
                                    <span className='ml-auto mr-xs h-2 w-2 rotate-45 border-r-2 border-t-2 border-shadow'></span>
                                </a>
                            ))}
                        </div>
                    </div>
                </button>
            </div>
        </header>
    )
}
