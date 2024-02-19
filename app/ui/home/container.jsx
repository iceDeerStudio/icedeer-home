export default function Container({ componentId, title, introduction, className, children }) {
    return (
        <section id={componentId} className={className}>
            <div className='use-max p-lg'>
                {title && <h2 className='mb-8 w-full text-center text-5xl font-bold text-main'>{title}</h2>}
                {introduction && <p className='mb-8 text-center text-xl text-shadow'>{introduction}</p>}
                {children}
            </div>
        </section>
    )
}
