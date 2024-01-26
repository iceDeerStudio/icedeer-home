import Image from 'next/image'

export default function Banner({ data }) {
    return (
        <div className='w-full relative'>
            <div className='useMax h-full w-full flex flex-row'>
                <div className='flex flex-col w-1 justify-center gap-2'>
                    <span className=' h-20 w-full bg-divider'></span>
                    <span className=' h-20 w-full bg-primary'></span>
                </div>
                {data.map(banner => (
                    <div key={banner.title} className='flex-1 flex flex-row gap-7'>
                        <div className=' flex flex-col justify-center px-md'>
                            <p className=' text-5xl pb-5 '>{banner.title}</p>
                            <p className=' text-3xl pb-4'>{banner.content}</p>
                            <button className=' self-baseline mt-1 px-4 py-2 rounded-full bg-primary text-white'>了解更多</button>
                        </div>
                        <div className='flex flex-col justify-right items-end flex-1 py-lg'>
                            <Image className=' rounded-2xl' height={720} src={banner.image} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}