'use client'

import { cn } from '@/app/lib/cn'
import { useState } from 'react'

import applicationImg from '@/public/images/application.png'
import Image from 'next/image'

import Container from './container'

export default function Applications({ data }) {
    const [selectedTab, selectTab] = useState(0)

    return (
        <Container {...data.meta}>
            <div className='use-shadow rounded bg-bg1'>
                <div className='flex flex-row gap-2 p-[1rem_1rem_0_1rem] '>
                    {data.content.map((application, index) => (
                        <span
                            key={application.title}
                            onClick={() => selectTab(index)}
                            className={cn(
                                'cursor-pointer rounded bg-blue-900/5 px-4 py-2 text-shadow transition-colors',
                                selectedTab === index
                                    ? 'bg-main text-white'
                                    : 'hover:bg-blue-900/10',
                            )}
                        >
                            {application.title}
                        </span>
                    ))}
                </div>
                <div className='flex p-4'>
                    <div className='w-1/2'>
                        <Image alt='应用领域' className='rounded' src={applicationImg} />
                    </div>
                    <div className='w-1/2 p-8'>
                        <h3 className='mb-8 block text-3xl font-bold text-minor'>
                            {data.content[selectedTab].title}
                        </h3>
                        <p className='block text-lg text-shadow '>
                            {data.content[selectedTab].content}
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}
