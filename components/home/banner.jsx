"use client"
import { cn } from '@/lib/cn'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'


export default function Banner({ data }) {
    const [activeBanner, setActiveBanner] = useState(0)
    const [switched, setSwitched] = useState(true)

    const handleSwitchBanner = (index) => {
        setSwitched(prev => !prev)
        setActiveBanner(index)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveBanner(prev => prev >= data.length - 1 ? 0 : prev + 1)
        }, 6000)

        return () => clearInterval(timer)
    }, [switched])

    return (
        <div id='banner' className='w-full useMax h-[calc(100vh-16rem)]'>
            <div className={cn('h-full relative rounded overflow-hidden')}>
                <div className='absolute bottom-4 left-1/2 translate-x-[-50%] flex h-1 justify-center gap-2 z-20'>
                    {Array(data.length).fill(0).map((_, index) => (
                        <span key={index}
                            onClick={() => handleSwitchBanner(index)}
                            className={cn(
                                'cursor-pointer w-12 h-1 bg-bg1',
                                activeBanner === index && 'bg-main'
                            )}
                        ></span>
                    ))}
                </div>
                {data.map((banner, index) => (
                    <div key={banner.title} className={cn(
                        'absolute w-full h-full opacity-0 z-0 transition-all duration-500',
                        index === activeBanner && "z-10 opacity-100",
                    )}>
                        <div className=' absolute left-0 top-1/2 ml-md translate-y-[-50%] z-20'>
                            <h1 className='text-white text-4xl font-bold'>{banner.title}</h1>
                            <p className='text-zinc-100 text-xl mt-xs'>{banner.content}</p>
                        </div>
                        <Image alt={banner.title} src={banner.image} fill className=' object-cover' />
                    </div>
                ))}

            </div>
        </div>
    )
}