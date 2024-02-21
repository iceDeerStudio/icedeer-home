export default function Ad({ data }) {
    return (
        <div className='bg-minor p-lg pb-0 text-white'>
            <h2 className='mb-16 text-5xl font-bold'>{data.title}</h2>
            <p className='text-xl text-font'>{data.content[0]}</p>
            {/* <button className=' rounded border-2 border-white px-6 py-2 text-lg transition-colors hover:bg-white hover:text-main'>
                立即咨询
            </button> */}
        </div>
    )
}
