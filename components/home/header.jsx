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
        <header className=" sticky top-0 left-0 border-b border-divider bg-background z-50">
            <div className='useMax flex flex-row justify-between'>
                <Image className='py-5' src={Logo} height={30} />
                <div className='flex flex-row items-center'>
                    {pages.map(page => (
                        <div key={page.route} className='h-full px-5 flex flex-row justify-center items-center group cursor-pointer'>
                            <a
                                href={page.route}
                                className={cn(
                                    'flex flex-row items-center h-full font-semibold pt-2 border-b-4 border-transparent transition-colors outline-none',
                                    matchPath(page.route) ? ' border-primary' : 'group-hover:border-divider'
                                )}
                            >
                                {page.label}
                            </a>
                        </div>
                    ))}
                    <button className=' ml-3 mt-1 px-3 py-2 rounded-full bg-primary text-background text-sm'>联系我们</button>
                </div>
            </div>
        </header>

    )
}