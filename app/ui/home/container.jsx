export default function Container({ componentId, title, introduction, children }) {
    return (
        <section id={componentId} className='use-max p-lg'>
            <h2 className='mb-8 w-full text-center text-5xl font-bold text-main'>{title}</h2>
            <p className='mb-8 text-center text-xl text-shadow'>{introduction}</p>
            {children}
        </section>
    )
}
