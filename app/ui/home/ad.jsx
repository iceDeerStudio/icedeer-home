import FadeInAnimation from '@/components/annimate-fade-in'
import WechatQR from '@/public/images/contactWechat.png'

import Image from 'next/image'

export default function Ad({ data }) {
    return (
        <div className='bg-minor p-lg text-white sm:pb-0  mobile:px-md mobile:pb-0'>
            <FadeInAnimation className='flex gap-8 mobile:flex-col'>
                <div className='flex-1'>
                    <h2 className='mb-lg text-5xl font-bold mobile:mb-md mobile:text-4xl'>{data.title}</h2>
                    <p className='text-xl text-font'>{data.content[0]}</p>
                </div>
                <Image src={WechatQR} alt='扫码添加微信' className='h-44 w-44' />
            </FadeInAnimation>
        </div>
    )
}
