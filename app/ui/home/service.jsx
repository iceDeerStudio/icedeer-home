import Image from 'next/image'
import { Fragment } from 'react'

import Container from './container'

export default function Service({ data }) {
    return (
        <Container {...data.meta}>
            <div className='flex gap-8'>
                {data.content.map(element => (
                    <div
                        key={element.title}
                        className='use-shadow group border aspect-[3/4] w-full cursor-default overflow-hidden rounded'
                    >
                        <div className='relative h-full w-full'>
                            <Image
                                alt={'我们的服务' + element.title}
                                className='absolute left-0 top-0 h-full w-full transition-[transform] duration-[400ms] group-hover:[transform:scale3d(1.2,1.2,1.2)]'
                                src={element.image}
                            />
                            <div className='use-blur absolute left-0 top-0 mt-[100%] h-full w-full transition-[margin-top] duration-[400ms] group-hover:mt-0'>
                                <div className='flex aspect-[3/1] w-full'>
                                    <div className='m-auto flex items-center'>
                                        <div className='mr-1 h-6 w-6 text-black'>
                                            {element.icon}
                                        </div>
                                        <h3 className='my-auto text-lg font-bold text-minor'>
                                            {element.title}
                                        </h3>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4 px-8 opacity-0 transition-[opacity] duration-[400ms] group-hover:opacity-100'>
                                    {element.description.map((tip, index) => (
                                        <div className='flex' key={index}>
                                            <div className='my-2 mr-2 h-2 w-2 flex-shrink-0 rounded-sm bg-font opacity-50'></div>
                                            <p className='text-justify leading-6 text-font'>
                                                {tip}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}
