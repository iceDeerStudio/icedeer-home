import { Fragment } from 'react'

import Container from './container'

export default function Steps({ data }) {
    return (
        <Container {...data.meta}>
            <div className='flex flex-row pb-md'>
                {data.content.map((step, index) => (
                    <div key={step.title} className=' flex flex-1 flex-col'>
                        <div className='relative flex h-12 flex-row items-center'>
                            {index !== 0 && (
                                <div className=' absolute left-[-24px] h-14 w-12 rounded-r-full border-4 border-l-0 border-secondaryBackground bg-primary'></div>
                            )}
                            <div className='flex h-full w-full flex-row items-center justify-center rounded-r-full border-4 border-primary bg-primary px-sm text-background'>
                                {step.title}
                            </div>
                        </div>
                        <div className='mt-sm flex flex-col items-center'>
                            <span className='mb-1 h-8 w-8 rounded-full bg-primary text-center text-lg leading-8 text-background'>
                                {index}
                            </span>
                            {step.content.map(v => (
                                <Fragment key={v}>
                                    <span className=' h-2 w-2 rotate-45 border-b-2 border-r-2 border-primary'></span>
                                    <p className=' pt-1'>{v}</p>
                                </Fragment>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}
