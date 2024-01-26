"use client"

import { cn } from '@/lib/cn'
import Logo from '@/public/icedeer-font.svg'
import Image from 'next/image'

import { usePathname } from 'next/navigation'

export default function Header({ pages }) {
    const pathname = usePathname()
    const matchPath = (path) => {
        return path === pathname
    }

    return (
        <header className=" sticky top-0 left-0 border-b border-divider h-16 bg-background z-50">
            <div className='useMax h-full flex flex-row justify-between'>
                <Image className='' src={Logo} height={28} />
                <div className='flex flex-row items-center'>
                    {pages.map(page => (
                        <a key={page.route} href={page.route} className='h-full outline-none px-6 flex flex-row justify-center items-center group cursor-pointer'>
                            <div
                                className={cn(
                                    'flex flex-row items-center h-full font-semibold pt-2 border-b-4 border-transparent transition-colors',
                                    matchPath(page.route) ? ' border-primary' : 'group-hover:border-divider'
                                )}
                            >
                                {page.label}
                            </div>
                        </a>
                    ))}
                    <span className='block w-[1px] h-6 bg-divider ml-2 mr-6'></span>
                    <button className=' px-3 py-1 rounded-md bg-primary text-background'>联系我们</button>
                </div>
            </div>
        </header>

    )
}