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
            style={{ background: selectedData.color }}
            className='relative h-[calc(100vh-5rem)] overflow-hidden'
        >
            <div className='flex flex-1'>
                <div className='flex flex-1 flex-col text-bg1'>
                    <div className='mb-md flex flex-wrap gap-4'>
                        {data.content.map((application, index) => (
                            <span
                                key={application.title}
                                onClick={() => selectTab(index)}
                                className={cn(
                                    'border-bg-1 h-8 cursor-pointer whitespace-nowrap rounded border border-bg1 bg-transparent px-sm leading-[30px] transition-colors',
                                    selectedTab === index && 'bg-bg1',
                                )}
                                style={{ ...(selectedTab === index && { color: selectedData.color }) }}
                            >
                                {application.title}
                            </span>
                        ))}
                    </div>
                    <h3 className='mb-md block text-4xl font-bold'>{selectedData.title}</h3>
                    {selectedData.contents.map(content => (
                        <p key={content} className='leading-8'>
                            {content}
                        </p>
                    ))}
                    <div className='mt-auto flex flex-wrap gap-4'>
                        {selectedData.tags.map(tag => (
                            <p key={tag} className='leading-8'>#{tag}</p>
                        ))}
                    </div>
                </div>
                <div className='flex flex-1 pl-md'>
                    {selectedData.image}
                </div>
            </div>
        </Container>
    )
}
