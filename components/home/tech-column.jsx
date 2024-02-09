export default function TechColumn({ techs }) {
    return (
        <section id='tech' className='useMax py-lg'>
            <h2 className='w-full text-center text-4xl text-main font-bold mb-md'>技术栈支持</h2>
            <p className='text-center text-shadow text-lg mb-md'>
                iceDeer团队可以为您提供丰富的技术栈支持，最大程度为您提供深度定制化开发服务
            </p>
            <div className='grid grid-cols-4 gap-8'>
                {techs.map(tech => (
                    <div key={tech.title} className="flex h-24 use-shadow bg-white rounded px-md gap-4 items-center select-none">
                        <div className=" w-10 h-10">{tech.icon}</div>
                        <p className="font-bold">{tech.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}