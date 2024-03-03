'use client'

import { cn } from '@/app/lib/cn'
import { useState } from 'react'

import Container from './container'

export default function Applications({ data }) {
    const [selectedTab, selectTab] = useState(0)

    const selectedData = data.content[selectedTab]

    return (
        <Container
            {...data.meta}
            white
            style={{ background: data.content[selectedTab].color }}
            className='relative h-[calc(100vh-4.5rem)] overflow-hidden'
        >
            <div className='flex h-full flex-col'>
                <div className='mb-md flex w-full gap-4'>
                    {data.content.map((application, index) => (
                        <button
                            key={application.title}
                            onClick={() => selectTab(index)}
                            className={cn(
                                'h-10 rounded border-2 border-bg1 bg-transparent px-4 text-bg1',
                                selectedTab === index && 'bg-bg1 font-bold',
                            )}
                            style={{ ...(selectedTab === index && { color: selectedData.color }) }}
                        >
                            {application.title}
                        </button>
                    ))}
                </div>
                <div className='flex h-full'>
                    <div className='flex h-full flex-col text-bg1'>
                        <h3 className='my-md block text-5xl font-bold'>{selectedData.title}</h3>
                        <div className='ml-8 flex flex-col gap-6'>
                            {selectedData.contents.map(content => (
                                <div key={content} className='flex h-4'>
                                    <div className='my-auto mr-2 h-2 w-2 rounded-sm bg-bg1'></div>
                                    <p className='text-lg leading-4'>{content}</p>
                                </div>
                            ))}
                        </div>

                        <div className='mt-auto flex flex-wrap gap-8 text-sm opacity-75'>
                            {selectedData.tags.map(tag => (
                                <p key={tag}># {tag}</p>
                            ))}
                        </div>
                    </div>
                    <div className='ml-auto aspect-[1/1] h-full'>{selectedData.image}</div>
                </div>
            </div>
        </Container>
    )
}
