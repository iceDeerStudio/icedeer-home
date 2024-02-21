import Container from './container'

export default function Stacks({ data }) {
    return (
        <Container {...data.meta} className='relative h-[calc(100vh-80px)] overflow-hidden bg-bg2'>
            <div className='relative z-[2] grid flex-1 grid-cols-4'>
                <div className='absolute top-0 h-full w-full'>
                    <span className='absolute left-1/2 top-0 block h-px w-screen translate-x-[-50%] bg-divider'></span>
                    <span className='absolute left-1/2 top-1/4 block h-px w-screen translate-x-[-50%] bg-divider'></span>
                    <span className='absolute left-1/2 top-2/4 block h-px w-screen translate-x-[-50%] bg-divider'></span>
                    <span className='absolute left-1/2 top-3/4 block h-px w-screen translate-x-[-50%] bg-divider'></span>
                    <span className='absolute left-1/2 top-full block h-px w-screen translate-x-[-50%] bg-divider'></span>
                </div>
                {data.content.map(tech => (
                    <div
                        key={tech.title}
                        className='hover:use-shadow relative flex select-none items-center rounded p-md transition-all duration-300 hover:scale-105 hover:bg-bg1 hover:text-main'
                    >
                        <div className=' flex aspect-[1] h-full items-center'>
                            <div className='h-full max-h-16 aspect-[1] mr-md '>{tech.icon}</div>
                        </div>
                        <p className='leading-8'>{tech.title}</p>
                    </div>
                ))}
            </div>
            <div className='absolute left-0 top-0 h-full w-full'>
                <div className='use-max z-0 flex h-full px-lg'>
                    <span className='block h-full w-1/4 border-l border-divider'></span>
                    <span className='block h-full w-1/4 border-l border-divider'></span>
                    <span className='block h-full w-1/4 border-l border-divider'></span>
                    <span className='block h-full w-1/4 border-l border-r border-divider'></span>
                </div>
            </div>
        </Container>
    )
}
