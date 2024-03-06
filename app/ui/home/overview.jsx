'use client'

import { cn } from '@/app/lib/cn'
import Image from 'next/image'
import { useState } from 'react'
import FadeInAnimation from '@/components/annimate-fade-in'

export default function Overview({ data }) {
    const [activeBanner, setActiveBanner] = useState(0)

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
                            <div className='use-max relative h-full w-full px-lg mobile:px-md'>
                                <main className='absolute bottom-0 mb-2'>
                                    <FadeInAnimation>
                                        {banner.contents.map(content => (
                                            <p
                                                key={content}
                                                className='mt-8 pr-md text-5xl font-bold tracking-wider text-bg1 drop-shadow-2xl mobile:text-4xl'
                                            >
                                                {content}
                                            </p>
                                        ))}
                                    </FadeInAnimation>
                                </main>
                            </div>
                        </div>
                        <div className='h-full w-full'></div>
                        <Image alt={banner.title} src={banner.image} fill className='object-cover brightness-90' />
                    </div>
                ))}
            </div>
        </div>
    )
}
