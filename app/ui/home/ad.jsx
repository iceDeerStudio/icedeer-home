import FadeInAnimation from '@/components/annimate-fade-in'
import WechatQR from '@/public/images/contactWechat.png'

import Image from 'next/image'

export default function Ad({ data }) {
    return (
        <div className='bg-minor p-lg text-white mobile:p-md'>
            <div className='flex gap-8 mobile:flex-col'>
                <div className='flex-1'>
                    <h2 className='mb-lg text-5xl font-bold mobile:mb-md mobile:text-4xl'>{data.title}</h2>
                    <p className='text-xl text-font mobile:text-sm'>{data.content[0]}</p>
                </div>

                <Image
                    src={WechatQR}
                    alt='扫码添加微信'
                    className='ml-auto h-36 w-36 overflow-hidden rounded mobile:ml-0 mobile:mr-auto'
                />
            </div>
        </div>
    )
}
