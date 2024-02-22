'use client'

import { cn } from '@/app/lib/cn'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Overview({ data }) {
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
        <div id='header' className='h-screen w-full'>
            <div className='relative h-full w-full overflow-hidden'>
                {data.map((banner, index) => (
                    <div
                        key={banner.title}
                        className={cn(
                            'absolute z-0 h-full w-full opacity-0 transition-all duration-500',
                            index === activeBanner && 'z-10 opacity-100',
                        )}
                    >
                        <div className='absolute inset-0 z-20 py-lg'>
                            <div className='use-max relative h-full w-full px-lg'>
                                <h1 className='absolute bottom-1/2 pb-md text-6xl font-bold text-bg1'>{banner.title}</h1>
                                <main className='absolute top-1/2'>
                                    {banner.contents.map(content => (
                                        <p key={content} className='mb-sm text-4xl font-semibold leading-8 text-main'>
                                            {content}
                                        </p>
                                    ))}
                                </main>
                                <div className='absolute bottom-0 flex flex-wrap gap-8'>
                                    {banner.tags.map(tag => (
                                        <p key={tag} className='text-xl leading-8 text-bg1'>
                                            # {tag}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <Image alt={banner.title} src={banner.image} fill className=' object-cover' />
                    </div>
                ))}
            </div>
        </div>
    )
}
