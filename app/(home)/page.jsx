import Header from '@/components/home/header'
import Image from 'next/image'

import Logo from '@/public/icedeer-font.svg'
import banner from '@/public/banner.png'
import banner1 from '@/public/banner1.jpg'
import contact from '@/public/contact.png'
import wechat from '@/public/wechat.jpg'
import TabColumn from '@/components/home/tab-column'
import Banner from '@/components/home/banner'
import ServeColumn from '@/components/home/serve-column'

export default function HomePage() {

    const pages = [
        {
            route: '/',
            label: '首页',
        },
        {
            route: '/products',
            label: '案例',
        },
        {
            route: '/contact',
            label: '合作与支持',
        },
    ]
    const banners = [
        {
            title: '我们的使命是',
            content: '提供极致的软件定制服务',
            image: banner1,
        }
    ]
    const tabs = [
        {
            title: '电商',
            content: '为在线零售商提供全方位的电商解决方案，包括网站搭建、支付集成、订单管理等功能，助力客户实现线上业务的持续增长。',
        },
        {
            title: '社区平台',
            content: '打造强大的社区平台，包括论坛、社交功能、用户管理等，为客户建立一个互动活跃、用户参与度高的社区。',
        },
        {
            title: '视频应用',
            content: '提供高效的视频应用开发服务，包括视频分享平台、直播应用等，以满足客户在数字娱乐领域的创新需求。',
        },
        {
            title: '即时通讯',
            content: '开发安全、高效的即时通讯软件，涵盖个人聊天、群组通讯等功能，确保用户能够在实时交流中获得卓越的体验。',
        },
        {
            title: '教育',
            content: '为教育机构提供创新的教育科技解决方案，包括在线课程管理、学生跟踪系统等，助力教育行业实现数字化转型。',
        },
        {
            title: '生活服务',
            content: '开发便捷、实用的生活服务应用，涵盖预约服务、本地生活信息等，为用户提供更加便利的生活体验。',
        },
    ]
    const serves = [
        {
            title: '小程序开发',
            description: '提供全面的小程序开发服务。支持微信、支付宝，快应用等平台，满足客户对于轻量级、高效的移动应用的需求。从界面设计到后端支持，我们确保小程序在各个方面都能实现客户的期望，并提供极致的用户体验。',
            image: wechat,
        },
        {
            title: 'Web网站/后台开发',
            description: '提供专业、高效的Web网站或稳定、可靠的后台系统开发服务。我们拥有丰富的经验和技术实力，注重用户体验、安全性和可扩展性，确保客户的网站或后台系统在各方面都能够脱颖而出。',
            image: wechat,
        },
        {
            title: '桌面应用开发',
            description: '提供基于Windows系统的桌面应用定制开发服务。包括企业级的管理软件和创新的桌面应用，我们都能够满足客户的定制需求。',
            image: wechat,
        },
    ]

    return (
        <div className=" w-full min-h-full">
            <Header pages={pages} />
            <Banner data={banners} />
            <ServeColumn serves={serves} />
            <TabColumn tabs={tabs} />
            <section className='py-20 bg-secondaryBackground'>
                <div className='useMax'>
                    <h2 className='w-full text-center text-3xl font-semibold mb-6'>我们的优势</h2>
                    <div className='w-full flex flex-col text-lg'>
                        <p className=''>
                            创新
                            我们认为，技术可以并且应该成为追求美好的力量，有意义的创新可以并且必将在大大小小的方面塑造更光明的世界。
                        </p>
                        <p>
                            多元化和包容性
                            我们在多样化的声音中茁壮成长。 我们利用员工和客户的经验、优势和不同观点来充实、挑战和拓展我们的思维。 这就是我们的创新方式。
                        </p>
                        <p>
                            公司的社会责任
                            我们相信技术是造福人类的强大力量，并且正在努力创造一个可持续未来，使每个人都可以享受到技术带来的好处和机会。
                        </p>
                        <p>
                            AI
                            我们相信，在以人为本的设计中，AI 可以扩展你的能力，解放你的思维，让你自由进行更具创造性和策略性的尝试，帮助你或你的组织达成更多成就。
                        </p>
                        <p>
                            共同应对 COVID-19 疫情
                            在全世界都在应对 COVID-19 疫情之际，我们正努力尽自己的一份力量，确保员工的安全，努力保护我们运营的社区的健康和福祉，并向客户提供技术、提示和资源。
                        </p>
                        <p>
                            值得信赖的计算
                            了解我们如何基于健全的商业惯例提供安全、专属且可靠的计算体验。
                        </p>
                    </div>
                </div>

            </section>
            <section className='bg-primary py-14'>
                <div className='useMax flex flex-row gap-12 text-white'>
                    <Image src={contact} height={240} />
                    <div className='flex flex-col justify-center gap-3'>
                        <h2 className='font-semibold text-4xl'>获取方案报价</h2>
                        <p className='text-xl'>有合作意向或定制需求？立即添加我们的客服微信咨询，免费获取定制化解决方案及报价</p>
                        <button className='outline-none rounded-lg border-2 transition-colors mt-2 hover:bg-white hover:text-primary self-baseline px-4 py-2'>立即咨询</button>
                    </div>
                </div>
            </section>
            <footer className='bg-secondaryBackgroun py-8'>
                <div className='useMax flex flex-col'>
                    <div className='flex flex-row justify-between items-center'>
                        <Image src={Logo} height={24} />
                        <p className='text-sm'>© 2024 iceDeer</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}