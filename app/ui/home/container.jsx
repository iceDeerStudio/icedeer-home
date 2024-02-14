export default function Container({ componentId, title, introduction, children }) {
    return (
        <section id={componentId} className='use-max p-lg'>
            <h2 className='mb-md w-full text-center text-4xl font-bold text-main'>{title}</h2>
            <p className='mb-md text-center text-lg text-shadow'>{introduction}</p>
            {children}
        </section>
    )
}
