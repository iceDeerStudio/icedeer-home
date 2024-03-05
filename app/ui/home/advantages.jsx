import Container from './container'

export default function Advantages({ data }) {
    return (
        <Container {...data.meta} className='bg-bg2'>
            <div className='grid w-full grid-cols-2 mobile:grid-cols-1 mobile:gap-4 gap-8 '>
                {data.content.map(advantage => (
                    <div
                        key={advantage.title}
                        className='hover:use-shadow use-hover group flex min-h-36 cursor-default flex-col rounded  border-divider bg-bg1 p-7 transition-all duration-[400ms]'
                    >
                        <h3 className='mb-3 text-2xl mobile:text-xl font-bold leading-8 text-minor transition-all duration-300 group-hover:text-main'>
                            {advantage.title}
                        </h3>
                        <p className='text-font'>{advantage.description}</p>
                    </div>
                ))}
            </div>
        </Container>
    )
}
