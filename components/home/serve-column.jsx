import Image from 'next/image'

export default function ServeColumn({ serves }) {
    return (
        <section className='useMax py-lg'>
            <h2 className='w-full text-center text-4xl text-main font-bold mb-md'>了解我们的服务</h2>
            <p className='text-center text-shadow text-lg mb-md'>
                iceDeer致力于提供完整的<strong>定制软件开发</strong>服务。我们通过创新的技术与卓越的开发实践，为客户提供高质量、定制化的数字解决方案。
            </p>
            <div className='flex flex-row gap-8'>
                {serves.map(serve => (
                    <div key={serve.title} className='flex-1 rounded overflow-hidden flex flex-col use-shadow'>
                        <Image src={serve.image} />
                        <div className='flex-1 flex flex-col p-6 bg-bg1 '>
                            <h3 className=' text-minor text-xl font-bold mb-4'>{serve.title}</h3>
                            <p className='text-shadow text-justify'>{serve.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}