'use client'

import { cn } from '@/app/lib/cn'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Header({ data }) {
    const [activeBanner, setActiveBanner] = useState(0)
    const [switched, setSwitched] = useState(true)

    const handleSwitchBanner = index => {
        setSwitched(prev => !prev)
        setActiveBanner(index)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveBanner(prev => (prev >= data.length - 1 ? 0 : prev + 1))
        }, 6000)

        return () => clearInterval(timer)
    }, [switched])

    return (
        <div id='header' className='useMax h-[calc(100vh-16rem)] w-full'>
            <div className={cn('relative h-full overflow-hidden rounded')}>
                <div className='absolute bottom-4 left-1/2 z-20 flex h-1 translate-x-[-50%] justify-center gap-2'>
                    {Array(data.length)
                        .fill(0)
                        .map((_, index) => (
                            <span
                                key={index}
                                onClick={() => handleSwitchBanner(index)}
                                className={cn(
                                    'h-1 w-12 cursor-pointer bg-bg1',
                                    activeBanner === index && 'bg-main',
                                )}
                            ></span>
                        ))}
                </div>
                {data.map((banner, index) => (
                    <div
                        key={banner.title}
                        className={cn(
                            'absolute z-0 h-full w-full opacity-0 transition-all duration-500',
                            index === activeBanner && 'z-10 opacity-100',
                        )}
                    >
                        <div className=' absolute left-0 top-1/2 z-20 ml-md translate-y-[-50%]'>
                            <h1 className='text-4xl font-bold text-white'>{banner.title}</h1>
                            <p className='mt-xs text-xl text-zinc-100'>{banner.content}</p>
                        </div>
                        <Image
                            alt={banner.title}
                            src={banner.image}
                            fill
                            className=' object-cover'
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
