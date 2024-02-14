import Container from './container'

export default function Advantages({ data }) {
    return (
        <Container {...data.meta}>
            <div className='flex w-full flex-col'>
                {data.content.map(advantage => (
                    <div
                        key={'优势' + advantage.title}
                        className='flex flex-row items-center border-t border-divider py-md last:border-b'
                    >
                        <div className='flex h-[260px] min-w-[300px] flex-row items-center justify-center'>
                            {/* <Image alt={advantage.title} height={200} src={advantage.image} /> */}
                        </div>
                        <div className='flex flex-col justify-center pl-lg'>
                            <h3 className=' mb-sm text-2xl text-primary'>{advantage.title}</h3>
                            <p className='text-md text-secondary'>{advantage.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}
