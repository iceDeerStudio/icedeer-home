'use client'

import { cn } from '@/app/lib/cn'
import { useState } from 'react'

import Container from './container'
import FadeInAnimation from '@/components/annimate-fade-in'

export default function Applications({ data }) {
    const [selectedTab, selectTab] = useState(0)

    const selectedData = data.content[selectedTab]

    return (
        <Container
            {...data.meta}
            white
            style={{ background: data.content[selectedTab].color }}
            className='relative h-[calc(100vh-4.5rem)] min-h-[780px] overflow-hidden mobile:h-auto'
        >
            <div className='flex h-full flex-col'>
                <div className='mb-md flex w-full flex-wrap gap-4'>
                    {data.content.map((application, index) => (
                        <button
                            key={application.title}
                            onClick={() => selectTab(index)}
                            className={cn(
                                'h-10 rounded border-2 border-bg1 bg-transparent px-4 text-bg1 mobile:h-9 mobile:px-3',
                                selectedTab === index && 'bg-bg1 font-bold',
                            )}
                            style={{ ...(selectedTab === index && { color: selectedData.color }) }}
                        >
                            {application.title}
                        </button>
                    ))}
                </div>

                <div className='flex h-full mobile:flex-col'>
                    <div className='flex h-full flex-col text-bg1'>
                        <FadeInAnimation>
                            <h3 className='my-md block text-5xl font-bold mobile:hidden'>{selectedData.title}</h3>
                            <div className='flex flex-col gap-6 sm:ml-8'>
                                {selectedData.contents.map(content => (
                                    <div key={content} className='flex'>
                                        <div className='mb-auto mt-2 h-2 min-w-2 rounded-sm bg-bg1'></div>
                                        <p className='pl-2 text-lg mobile:text-base'>{content}</p>
                                    </div>
                                ))}
                            </div>
                        </FadeInAnimation>
                        <div className='mt-auto flex flex-wrap gap-8 pt-md text-sm opacity-75'>
                            {selectedData.tags.map(tag => (
                                <p key={tag}># {tag}</p>
                            ))}
                        </div>
                    </div>
                    <div className='ml-auto hidden aspect-[1/1] h-full lg:block'>{selectedData.image}</div>
                </div>
            </div>
        </Container>
    )
}
