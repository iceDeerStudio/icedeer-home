import Container from './container'

export default function Stacks({ data }) {
    return (
        <Container {...data.meta} className='relative h-[calc(100vh-4.5rem)] overflow-hidden bg-bg2'>
            <div className='relative z-[2] grid flex-1 grid-cols-4'>
                <div className='absolute inset-0'>
                    <span className='absolute left-1/2 top-0 block h-px w-screen translate-x-[-50%] bg-divider'></span>
                    <span className='absolute left-1/2 top-1/4 block h-px w-screen translate-x-[-50%] bg-divider'></span>
                    <span className='absolute left-1/2 top-2/4 block h-px w-screen translate-x-[-50%] bg-divider'></span>
                    <span className='absolute left-1/2 top-3/4 block h-px w-screen translate-x-[-50%] bg-divider'></span>
                    <span className='absolute left-1/2 top-full block h-px w-screen translate-x-[-50%] bg-divider'></span>
                </div>
                {data.content.map(tech => (
                    <div
                        key={tech.title}
                        className='hover:use-shadow use-hover relative flex select-none items-center rounded p-md transition-all duration-[400ms] hover:bg-bg1 hover:text-main'
                    >
                        <div className=' flex aspect-[1] h-full items-center'>
                            <div className='mr-md aspect-[1] h-full max-h-16 '>{tech.icon}</div>
                        </div>
                        <p className='ml-8 leading-8'>{tech.title}</p>
                    </div>
                ))}
            </div>
            <div className='absolute inset-0'>
                <div className='use-max h-full px-lg'>
                    <div className='relative h-full w-full'>
                        <span className='absolute left-0 top-0 block h-full w-px bg-divider'></span>
                        <span className='absolute left-1/4 top-0 block h-full w-px bg-divider'></span>
                        <span className='absolute left-2/4 top-0 block h-full w-px bg-divider'></span>
                        <span className='absolute left-3/4 top-0 block h-full w-px bg-divider'></span>
                        <span className='absolute left-full top-0 block h-full w-px bg-divider'></span>
                    </div>
                </div>
            </div>
        </Container>
    )
}
