import Image from 'next/image'

export default function AdvantageColumn({ advantages }) {
    return (
        <section className='py-28 bg-secondaryBackground'>
            <div className='useMax'>
                <h2 className='w-full text-center text-3xl font-semibold mb-6'>我们的优势</h2>
                <div className='w-full flex flex-col text-lg gap-16 mt-9'>
                    {advantages.map(advantage => (
                        <div key={advantage.title} className="flex odd:flex-row even:flex-row-reverse justify-center items-center gap-24">
                            <div className='flex flex-col justify-center max-w-[50%]'>
                                <h3 className=' text-2xl text-primary'>{advantage.title}</h3>
                                <p className=' text-md text-secondary'>{advantage.description}</p>
                            </div>
                            <Image height={200} src={advantage.image} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}