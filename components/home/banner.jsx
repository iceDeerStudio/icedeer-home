import Image from 'next/image'

export default function Banner({ data }) {
    return (
        <div className='w-full h-screen relative'>
            <div className='useMax h-full w-full flex flex-row'>
                {data.map(banner => (
                    <div key={banner.title} className='flex-1 flex flex-row gap-7'>
                        <div className='flex flex-col justify-center flex-1 pt-16 pb-28'>
                            <Image className=' rounded-3xl' height={690} src={banner.image} />
                        </div>
                        <div className=' flex flex-col justify-center flex-1 pl-16'>
                            <p className=' text-5xl pb-5 '>{banner.title}</p>
                            <p className=' text-3xl pb-4'>{banner.content}</p>
                            <button className=' self-baseline mt-1 px-4 py-2 rounded-full bg-primary text-white'>了解更多</button>
                        </div>
                    </div>
                ))}
                <div className='flex flex-col w-1 justify-center gap-2'>
                    <span className=' h-20 w-full bg-divider'></span>
                    <span className=' h-20 w-full bg-primary'></span>
                </div>
            </div>
        </div>
    )
}