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
                'sticky left-0 top-[-56px] z-50 h-[128px] w-full pt-[56px] text-bg1 transition-colors duration-[400ms]',
                fadeState && 'use-shadow bg-bg1 text-font',
            )}
        >
            <div className='use-max flex h-full items-center px-lg mobile:px-md'>
                <button className='group relative cursor-pointer pr-sm lg:hidden'>
                    <svg
                        className='h-8 w-8'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <line x1='4' x2='20' y1='12' y2='12' />
                        <line x1='4' x2='20' y1='6' y2='6' />
                        <line x1='4' x2='20' y1='18' y2='18' />
                    </svg>
                    <div className='use-shadow absolute left-0 top-0 grid w-0 grid-rows-[0fr] overflow-hidden rounded bg-bg1 text-minor opacity-0 transition-all duration-300 group-focus:w-44 group-focus:grid-rows-[1fr] group-focus:opacity-100'>
                        <div className='flex min-h-0 flex-col'>
                            <Navigator
                                pages={pages}
                                match
                                className='cursor-pointer whitespace-nowrap p-4 text-sm font-bold tracking-wider hover:text-main'
                            />
                        </div>
                    </div>
                </button>
                <IcedeerFontSvg className={cn('mr-sm h-6 text-main', !fadeState && 'text-bg1')} />
                <div className='flex flex-1 pad:hidden'>
                    <Navigator
                        pages={pages}
                        match
                        className='m-4 cursor-pointer text-sm font-bold tracking-wider hover:text-main'
                    />
                </div>
                <button className='group relative ml-auto h-10 whitespace-nowrap rounded bg-main px-6 text-sm text-bg1'>
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
