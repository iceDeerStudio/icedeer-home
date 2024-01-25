import Image from 'next/image'

export default function ServeColumn({ serves }) {
    return (
        <section className='useMax pb-24'>
            <h2 className='w-full text-center text-3xl font-semibold mb-6'>概述&服务</h2>
            <p className=' text-center text-lg mb-12'>
                iceDeer致力于提供完整的<b>定制软件开发</b>服务。我们通过创新的技术与卓越的开发实践，为客户提供高质量、定制化的数字解决方案。
            </p>
            <div className='useMax flex flex-row gap-20 px-12'>
                {serves.map(serve => (
                    <div key={serve.title} className='flex-1 rounded-3xl overflow-hidden flex flex-col p-2 bg-secondaryBackground '>
                        <Image className='rounded-2xl' src={serve.image} />
                        <div className='flex flex-col pt-4 px-2 pb-6'>
                            <h3 className=' text-primary text-lg font-semibold mb-1'>{serve.title}</h3>
                            <p className=' text-sm'>{serve.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}