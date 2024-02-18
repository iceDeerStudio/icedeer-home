export default function Ad({ data }) {
    return (
        <section className='use-max bg-main p-16 text-white'>
            <h2 className='mb-16 text-5xl font-bold'>{data.title}</h2>
            <p className=' mb-12 text-xl'>{data.content[0]}</p>
            <button className=' rounded border-2 border-white px-6 py-2 text-lg transition-colors hover:bg-white hover:text-main'>
                立即咨询
            </button>
        </section>
    )
}
