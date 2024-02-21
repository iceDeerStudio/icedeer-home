import Container from './container'

export default function Advantages({ data }) {
    return (
        <Container {...data.meta} className='bg-bg2'>
            <div className='grid w-full grid-cols-2 gap-8 '>
                {data.content.map(advantage => (
                    <div
                        key={advantage.title}
                        className='hover:use-shadow group flex cursor-default flex-col rounded border border-divider bg-bg1 p-md transition-all duration-300 hover:scale-105'
                    >
                        <h3 className=' mb-2 text-3xl font-bold leading-8 text-minor transition-all duration-300 group-hover:text-main'>
                            {advantage.title}
                        </h3>
                        <p className='text-font leading-8'>{advantage.description}</p>
                    </div>
                ))}
            </div>
        </Container>
    )
}
