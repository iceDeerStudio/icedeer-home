import Container from './container'

export default function Ad({ data }) {
    return (
        <Container className='bg-main text-white'>
            <h2 className='mb-16 text-5xl font-bold'>{data.title}</h2>
            <p className=' mb-12 text-xl'>{data.content[0]}</p>
        </Container>
    )
}
