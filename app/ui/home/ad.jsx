export default function Ad({ data }) {
    return (
        <div className='mobile:px-md bg-minor p-lg text-white sm:pb-0'>
            <h2 className='mobile:mb-md mobile:text-4xl mb-lg text-5xl font-bold'>{data.title}</h2>
            <p className='text-xl text-font'>{data.content[0]}</p>
            {/* <button className=' rounded border-2 border-white px-6 py-2 text-lg transition-colors hover:bg-white hover:text-main'>
                立即咨询
            </button> */}
        </div>
    )
}
