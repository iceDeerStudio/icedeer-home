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
            className='relative overflow-hidden lg:h-[calc(100vh-4.5rem)] min-h-[780px]'
        >
            <div className='flex h-full flex-col'>
                <div className='mb-md flex w-full flex-wrap gap-4'>
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
                <div className='flex h-full mobile:flex-col'>
                    <div className='flex h-full flex-col text-bg1'>
                        <h3 className='my-md mobile:hidden text-5xl font-bold block'>{selectedData.title}</h3>
                        <div className='flex flex-col gap-6 sm:ml-8'>
                            {selectedData.contents.map(content => (
                                <div key={content} className='flex'>
                                    <div className='mb-auto mt-2 h-2 min-w-2 rounded-sm bg-bg1'></div>
                                    <p className='pl-2 text-lg'>{content}</p>
                                </div>
                            ))}
                        </div>
                        <div className='mt-auto flex flex-wrap gap-8 pt-md text-sm opacity-75'>
                            {selectedData.tags.map(tag => (
                                <p key={tag}># {tag}</p>
                            ))}
                        </div>
                    </div>
                    <div className='ml-auto mobile:hidden aspect-[1/1] h-full block'>{selectedData.image}</div>
                </div>
            </div>
        </Container>
    )
}
