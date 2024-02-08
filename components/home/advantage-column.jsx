import Image from 'next/image'

export default function AdvantageColumn({ advantages }) {
    return (
        <section id='advantage' className='py-lg'>
            <div className='useMax'>
                <h2 className='w-full text-center text-3xl font-semibold mb-md'>为什么选择我们</h2>
                <p className='text-shadow text-center text-lg mb-md'>
                    我们的优势十分明显。我们拥有最先进的开发技术和理念，兼具效率与质量，旨在为您提供最优质的服务。
                </p>
                <div className='w-full flex flex-col'>
                    {advantages.map(advantage => (
                        <div key={"优势" + advantage.title} className="flex flex-row items-center py-md border-t border-divider last:border-b">
                            <div className=' h-[260px] min-w-[300px] flex flex-row justify-center items-center'>
                                <Image alt={advantage.title} height={200} src={advantage.image} />
                            </div>
                            <div className='flex flex-col justify-center pl-lg'>
                                <h3 className=' text-2xl mb-sm text-primary'>{advantage.title}</h3>
                                <p className=' text-md text-secondary'>{advantage.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}