import Container from './container'

export default function Advantages({ data }) {
    return (
        <Container {...data.meta}>
            <div className='grid w-full grid-cols-2 gap-8 '>
                {data.content.map(advantage => (
                    <div key={advantage.title} className='use-shadow flex flex-col gap-2 rounded bg-white p-md'>
                        <h3 className='text-xl font-bold text-minor'>{advantage.title}</h3>
                        <p className='text-md text-shadow'>{advantage.description}</p>
                    </div>
                ))}
            </div>
        </Container>
    )
}
