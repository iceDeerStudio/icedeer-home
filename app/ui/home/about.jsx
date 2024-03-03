import Container from './container'

export default function About({ data }) {
    return (
        <>
            <div className='h-px w-full bg-divider'></div>
            <Container {...data.meta} className='bg-white'>
                <div className='mx-auto w-1/2 text-font'>
                    {data.content.map((p, index) => {
                        return (
                            <p className='mb-8 leading-8' key={index}>
                                {p}
                            </p>
                        )
                    })}
                </div>
            </Container>
        </>
    )
}
