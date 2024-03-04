import Container from './container'

export default function Stacks({ data }) {
    return (
        <Container {...data.meta} className='relative overflow-hidden bg-bg2 lg:h-[calc(100vh-4.5rem)]'>
            <div className='mobile:grid-cols-2 relative z-[2] grid flex-1 grid-cols-4'>
                <div className='absolute inset-0'>
                    <span className='absolute left-1/2 top-0 block h-px w-screen translate-x-[-50%] bg-divider'></span>
                    <span className='mobile:block absolute left-1/2 top-[12.5%] hidden h-px w-screen translate-x-[-50%] bg-divider'></span>
                    <span className='absolute left-1/2 top-1/4 block h-px w-screen translate-x-[-50%] bg-divider'></span>
                    <span className='mobile:block absolute left-1/2 top-[37.5%] hidden h-px w-screen translate-x-[-50%] bg-divider'></span>
                    <span className='absolute left-1/2 top-2/4 block h-px w-screen translate-x-[-50%] bg-divider'></span>
                    <span className='mobile:block absolute left-1/2 top-[62.5%] hidden h-px w-screen translate-x-[-50%] bg-divider'></span>
                    <span className='absolute left-1/2 top-3/4 block h-px w-screen translate-x-[-50%] bg-divider'></span>
                    <span className='mobile:block absolute left-1/2 top-[87.5%] hidden h-px w-screen translate-x-[-50%] bg-divider'></span>
                    <span className='absolute left-1/2 top-full block h-px w-screen translate-x-[-50%] bg-divider'></span>
                </div>
                {data.content.map(tech => (
                    <div
                        key={tech.title}
                        className='hover:use-shadow use-hover mobile:px-sm relative flex select-none items-center overflow-hidden rounded px-md py-md transition-all duration-[400ms] hover:bg-bg1 hover:text-main'
                    >
                        <div className=' flex h-full items-center sm:aspect-[1]'>
                            <div className='mr-md aspect-[1] h-full max-h-16 '>{tech.icon}</div>
                        </div>
                        <p className='pad:ml-sm ml-md whitespace-nowrap font-bold leading-8'>{tech.title}</p>
                        <span className=''></span>
                    </div>
                ))}
            </div>
            <div className='absolute inset-0'>
                <div className='use-max mobile:px-md h-full px-lg'>
                    <div className='relative h-full w-full'>
                        <span className='absolute left-0 top-0 block h-full w-px bg-divider'></span>
                        <span className='mobile:hidden absolute left-1/4 top-0 block h-full w-px bg-divider'></span>
                        <span className='absolute left-2/4 top-0 block h-full w-px bg-divider'></span>
                        <span className='mobile:hidden absolute left-3/4 top-0 block h-full w-px bg-divider'></span>
                        <span className='absolute left-full top-0 block h-full w-px bg-divider'></span>
                    </div>
                </div>
            </div>
        </Container>
    )
}
