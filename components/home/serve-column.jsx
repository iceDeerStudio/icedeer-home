import Image from 'next/image'

export default function ServeColumn({ serves }) {
    return (
        <section className='useMax py-lg'>
            <h2 className='w-full text-center text-4xl text-main font-bold mb-md'>了解我们的服务</h2>
            <p className='text-center text-shadow text-lg mb-md'>
                iceDeer致力于提供完整的<strong>定制软件开发</strong>服务。我们通过创新的技术与卓越的开发实践，为客户提供高质量、定制化的数字解决方案。
            </p>
            <div className='flex gap-8'>
                {serves.map(serve => (
                    <div className='group w-full aspect-[3/4] overflow-hidden  use-shadow rounded'>
                        <div key={serve.title} className='relative w-full h-full'>
                            <Image className='absolute top-0 left-0 w-full h-full group-hover:[transform:scale3d(1.25,1.25,1.25)] transition-[transform] duration-500' src={serve.image} />
                            <div className='absolute top-0 left-0 w-full h-full mt-[100%] group-hover:mt-0 use-blur transition-[margin-top] duration-300'>
                                <div className='flex w-full aspect-[3/1]'>
                                    <div className='flex m-auto '>
                                        <div className='flex w-6 h-6 my-auto mr-2 bg-minor rounded-full'>
                                            <svg className='h-4 w-4 m-auto text-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-grid"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                                        </div>
                                        <h3 className='my-auto text-minor text-lg font-bold'>
                                            {serve.title}
                                        </h3>
                                    </div>
                                </div>
                                <p className='px-8 text-shadow'>{serve.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}