import Container from './container'

export default function Stacks({ data }) {
    return (
        <Container {...data.meta}>
            <div className='grid grid-cols-4 gap-8'>
                {data.content.map(tech => (
                    <div
                        key={tech.title}
                        className='use-shadow hover:use-shadow-lg group flex h-24 select-none items-center gap-4 rounded bg-white px-md transition-shadow duration-300'
                    >
                        <div className='h-10 w-10 transition-all duration-300 group-hover:h-11 group-hover:w-11'>{tech.icon}</div>
                        <p className='font-bold'>{tech.title}</p>
                    </div>
                ))}
            </div>
        </Container>
    )
}
