import Title from '@/components/column-title'
import { cn } from '@/app/lib/cn'
import FadeInAnimation from '@/components/annimate-fade-in'

export default function Container({ componentId, title, introduction, style, className, white, paddingless, children }) {
    return (
        <section style={style} id={componentId} className={className}>
            <div className={cn('use-max flex h-full flex-col py-lg', !paddingless && 'mobile:px-md px-lg')}>
                <FadeInAnimation
                    className={cn(
                        'pad:flex-col z-[2] flex cursor-default pb-md text-white',
                        paddingless && 'mobile:px-md px-lg',
                    )}
                >
                    {title && <Title title={title} route={componentId} white={white} />}
                    <div className={cn('flex flex-1 flex-col', !white && 'text-font')}>
                        {introduction?.map((intro, index) => (
                            <p key={index} className='leading-8'>
                                {intro}
                            </p>
                        ))}
                    </div>
                </FadeInAnimation>
                {children}
            </div>
        </section>
    )
}
