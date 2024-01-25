import Header from '@/components/home/header'
import Image from 'next/image'

import banner from '@/public/banner.png'
import banner1 from '@/public/banner1.jpg'
import contact from '@/public/contact.png'
import wechat from '@/public/wechat.jpg'

import standardIllustration from '@/public/standard.svg'
import rangeIllustration from '@/public/range.svg'
import wideIllustration from '@/public/wide.svg'
import designIllustration from '@/public/design.svg'
import quatityIllustration from '@/public/quatity.svg'


import TabColumn from '@/components/home/tab-column'
import Banner from '@/components/home/banner'
import ServeColumn from '@/components/home/serve-column'
import Footer from '@/components/home/footer'
import AdvantageColumn from '@/components/home/advantage-column'

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
    const advantages = [
        {
            title: '标准化的开发流程',
            description: 'iceDeer的开发工作基于专业的标准化开发流程。我们确保项目的每个阶段都经过详尽的计划和严格的控制，以提高项目的透明度、可追溯性与稳定性。',
            image: standardIllustration,
        },
        {
            title: '基于最新的技术方案',
            description: 'iceDeer的开发工作采用行业最新的技术趋势。我们的技术范围包括但不限于云计算、人工智能、区块链等新兴技术。',
            image: rangeIllustration,
        },
        {
            title: '广泛的技术支持',
            description: '不同的定制化项目往往需要基于不同的技术栈才能达到最优效果。iceDeer在客户端和服务端均拥有广泛的技术栈支持。',
            image: wideIllustration,
        },
        {
            title: '注重设计与用户体验',
            description: '设计和用户体验是产品竞争力的关键体现。iceDeer注重使用精致、美观的设计，旨在提供极致的用户体验',
            image: designIllustration,
        },
        {
            title: '高效率与高质量',
            description: 'iceDeer通过严格的质量控制流程和高效的项目管理，兼顾效率与质量。我们通过开发可扩展、高复用的优质代码，确保项目能够及时响应客户需求的变化。',
            image: quatityIllustration,
        },
    ]

    return (
        <div className=" w-full min-h-full">
            <Header pages={pages} />
            <Banner data={banners} />
            <ServeColumn serves={serves} />
            <TabColumn tabs={tabs} />
            <AdvantageColumn advantages={advantages} />
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
            <Footer />
        </div>
    )
}