import Image from 'next/image'

import contact from '@/public/images/contact.png'

import { header, service, stacks, applications, advantages, steps } from '@/public/meta/meta'

import { Header, Service, Stacks, Applications, Advantages, Steps } from '@/app/ui/home/index'

export default function Home() {
    return (
        <div className=' min-h-full w-full bg-bg2'>
            <Header data={header.content} />
            <Service data={service} />
            <Stacks data={stacks} />
            <Applications data={applications} />
            <Advantages data={advantages} />
            <Steps data={steps} />
            <section className='useMax py-lg'>
                <div className='flex flex-row justify-between rounded-xl bg-primary p-md text-white'>
                    <div className='flex flex-col justify-center gap-3'>
                        <h2 className='text-4xl font-semibold'>获取方案报价</h2>
                        <p className='text-xl'>
                            有合作意向或定制需求？立即添加我们的客服微信咨询，免费获取定制化解决方案及报价
                        </p>
                        <button className='mt-2 self-baseline rounded-lg border-2 border-background px-4 py-2 outline-none transition-colors hover:bg-background hover:text-primary'>
                            立即咨询
                        </button>
                    </div>
                    <Image alt='即刻联系我们' src={contact} height={240} />
                </div>
            </section>
        </div>
    )
}
