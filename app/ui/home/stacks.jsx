import FadeInAnimation from '@/components/annimate-fade-in'
import Container from './container'

export default function Stacks({ data }) {
    return (
        <Container {...data.meta} className='relative overflow-hidden bg-bg2 lg:h-[calc(100vh-4.5rem)]'>
            <div className='relative z-[2] grid flex-1 grid-cols-4 mobile:grid-cols-2'>
                <div className='absolute inset-0'>
                    <span className='absolute left-1/2 top-0 block h-px w-screen translate-x-[-50%] bg-divider'></span>
                    <span className='absolute left-1/2 top-[12.5%] hidden h-px w-screen translate-x-[-50%] bg-divider mobile:block'></span>
                    <span className='absolute left-1/2 top-1/4 block h-px w-screen translate-x-[-50%] bg-divider'></span>
                    <span className='absolute left-1/2 top-[37.5%] hidden h-px w-screen translate-x-[-50%] bg-divider mobile:block'></span>
                    <span className='absolute left-1/2 top-2/4 block h-px w-screen translate-x-[-50%] bg-divider'></span>
                    <span className='absolute left-1/2 top-[62.5%] hidden h-px w-screen translate-x-[-50%] bg-divider mobile:block'></span>
                    <span className='absolute left-1/2 top-3/4 block h-px w-screen translate-x-[-50%] bg-divider'></span>
                    <span className='absolute left-1/2 top-[87.5%] hidden h-px w-screen translate-x-[-50%] bg-divider mobile:block'></span>
                    <span className='absolute left-1/2 top-full block h-px w-screen translate-x-[-50%] bg-divider'></span>
                </div>
                {data.content.map(tech => (
                    <FadeInAnimation key={tech.title}>
                        <div className=' hover:use-shadow use-hover flex h-full select-none flex-col overflow-hidden whitespace-nowrap rounded transition-all duration-[400ms] hover:bg-bg1 hover:text-main lg:flex-row'>
                            <div className='flex aspect-square h-full'>
                                <div className='m-auto aspect-square h-1/2'>{tech.icon}</div>
                            </div>
                            <p className='mx-auto  mb-8 font-bold leading-8 lg:m-auto lg:ml-0'>{tech.title}</p>
                        </div>
                    </FadeInAnimation>
                ))}
            </div>
            <div className='absolute inset-0'>
                <div className='use-max h-full px-lg mobile:px-md'>
                    <div className='relative h-full w-full'>
                        <span className='absolute left-0 top-0 block h-full w-px bg-divider'></span>
                        <span className='absolute left-1/4 top-0 block h-full w-px bg-divider mobile:hidden'></span>
                        <span className='absolute left-2/4 top-0 block h-full w-px bg-divider'></span>
                        <span className='absolute left-3/4 top-0 block h-full w-px bg-divider mobile:hidden'></span>
                        <span className='absolute left-full top-0 block h-full w-px bg-divider'></span>
                    </div>
                </div>
            </div>
        </Container>
    )
}
