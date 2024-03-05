import { Fragment } from 'react'

import Container from './container'
import FadeInAnimation from '@/components/annimate-fade-in'

export default function Steps({ data }) {
    return (
        <Container paddingless {...data.meta}>
            <FadeInAnimation className='flex overflow-x-auto py-md lg:px-lg'>
                {data.content.map((step, index) => (
                    <div key={step.title} className='flex min-w-28 flex-1 flex-col padOnly:first:ml-lg padOnly:last:mr-lg mobile:first:ml-md mobile:last:mr-md'>
                        <div className='relative mb-6 flex h-10 flex-row items-center rounded-[0.25rem_1.25rem_1.25rem_0.25rem] bg-minor'>
                            {index !== 0 && (
                                <div className='absolute left-[-24px] h-12 w-12 rounded-r-full border-4 border-l-0 border-bg1 bg-minor'></div>
                            )}
                            <div className='flex h-full w-full flex-row items-center justify-center whitespace-nowrap px-sm text-sm text-bg1'>
                                {step.title}
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <span className='mb-2 h-8 w-8 rounded-full bg-minor text-center text-lg leading-8 text-bg1'>
                                {index}
                            </span>
                            {step.content.map((v, index) => (
                                <Fragment key={v}>
                                    {index !== 0 && (
                                        <span className='h-2 w-2 rotate-45 border-b-2 border-r-2 border-shadow'></span>
                                    )}
                                    <p className='text-sm text-font'>{v}</p>
                                </Fragment>
                            ))}
                        </div>
                    </div>
                ))}
            </FadeInAnimation>
        </Container>
    )
}
