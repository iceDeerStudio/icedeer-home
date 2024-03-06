import Title from '@/components/column-title'
import { cn } from '@/app/lib/cn'
import FadeInAnimation from '@/components/annimate-fade-in'

export default function Container({ componentId, title, introduction, style, className, white, paddingless, children }) {
    return (
        <section style={style} id={componentId} className={className}>
            <div className={cn('use-max flex h-full flex-col p-lg mobile:p-md', paddingless && 'px-0 mobile:px-0')}>
                <div
                    className={cn(
                        'z-[2] flex cursor-default pb-md text-white pad:flex-col',
                        paddingless && 'px-lg mobile:px-md',
                    )}
                >
                    {title && <Title title={title} route={componentId} white={white} />}
                    <div className={cn('flex flex-1 flex-col mobile:text-xs', !white && 'text-font')}>
                        {introduction?.map((intro, index) => (
                            <p key={index} className='leading-8'>
                                {intro}
                            </p>
                        ))}
                    </div>
                </div>
                {children}
            </div>
        </section>
    )
}
