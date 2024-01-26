import Image from 'next/image'

export default function ServeColumn({ serves }) {
    return (
        <section className='useMax py-lg'>
            <h2 className='w-full text-center text-3xl font-semibold mb-md'>了解我们的服务</h2>
            <p className=' text-center text-lg mb-md'>
                iceDeer致力于提供完整的制软件开发服务。我们通过创新的技术与卓越的开发实践，为客户提供高质量、定制化的数字解决方案。
            </p>
            <div className='flex flex-row gap-8'>
                {serves.map(serve => (
                    <div key={serve.title} className='flex-1 rounded-xl overflow-hidden flex flex-col'>
                        <Image src={serve.image} />
                        <div className='flex-1 flex flex-col p-md border-[1px] rounded-b-xl border-divider'>
                            <h3 className=' text-primary text-lg font-semibold mb-1'>{serve.title}</h3>
                            <p className=''>{serve.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}