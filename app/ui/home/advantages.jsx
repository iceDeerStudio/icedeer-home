import FadeInAnimation from '@/components/annimate-fade-in'
import Container from './container'

export default function Advantages({ data }) {
    return (
        <Container {...data.meta} className='bg-bg2'>
            <div className='grid w-full grid-cols-1 gap-8 lg:grid-cols-2 mobile:gap-4 '>
                {data.content.map(advantage => (
                    <FadeInAnimation key={advantage.title}>
                        <div className='hover:use-shadow use-hover group flex min-h-36 cursor-default flex-col rounded border-divider bg-bg1 p-7 transition-all duration-[400ms]'>
                            <h3 className='mb-3 text-2xl font-bold leading-8 text-minor transition-all duration-300 group-hover:text-main mobile:text-xl'>
                                {advantage.title}
                            </h3>
                            <p className='line-clamp-2 text-font mobile:line-clamp-none mobile:text-sm'>
                                {advantage.description}
                            </p>
                        </div>
                    </FadeInAnimation>
                ))}
            </div>
        </Container>
    )
}
