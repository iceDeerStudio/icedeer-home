import Title from '@/components/column-title'
import { cn } from '@/app/lib/cn'

export default function Container({ componentId, title, introduction, style, className, white, children }) {
    return (
        <section style={style} id={componentId} className={className}>
            <div className='use-max flex h-full flex-col p-lg '>
                <div className='z-[2] flex cursor-default pb-md text-white'>
                    {title && <Title title={title} route={componentId} white={white}/>}
                    <div className={cn('flex flex-1 flex-col', !white && 'text-font')}>
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
