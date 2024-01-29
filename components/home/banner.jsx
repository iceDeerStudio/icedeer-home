"use client"
import { cn } from '@/lib/cn'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { CSSTransition } from 'react-transition-group'

export default function Banner({ data }) {
    const [activeBanner, setActiveBanner] = useState(0)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setActiveBanner(1)
        const timer = setInterval(() => {
            setActiveBanner(prev => prev + 1 === data.length ? 0 : prev + 1)
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        if (!loaded) setLoaded(true)
    }, [activeBanner])

    return (
        <div className='w-full useMax h-[calc(100vh-4rem)]'>
            <div className={cn('h-full flex flex-row relative',!loaded && ' transition-opacity opacity-0')}>
                <div className='flex flex-col w-1 justify-center gap-2 z-10'>
                    {Array(data.length).fill(0).map((_, index) => (
                        <span key={index} onClick={() => setActiveBanner(index)} className={cn('cursor-pointer h-16 w-1 bg-shadow', activeBanner === index && 'bg-main')}></span>
                    ))}
                </div>
                {data.map((banner, index) => (
                    <div key={banner.title} className='absolute w-full h-full top-0 left-0 flex-1 flex  gap-8'>
                        <CSSTransition appear={true} timeout={1} in={index === activeBanner} classNames="useBannerText">
                            <div className=' flex flex-col justify-center px-md'>
                                <p className='text-main font-bold text-5xl pb-4'>{banner.title}</p>
                                <p className='text-minor text-2xl pb-4'>{banner.content}</p>
                                <button className='self-baseline px-4 h-10 rounded bg-minor text-bg1'>了解更多</button>
                            </div>
                        </CSSTransition>
                        <div className='flex flex-col justify-right items-end flex-1 py-lg useBannerImgFa'>
                            <CSSTransition timeout={1} in={index === activeBanner} classNames="useBannerImg">
                                <Image className='use-shadow rounded' height={720} src={banner.image} />
                            </CSSTransition>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}