import Image from 'next/image'

import Header from '@/components/home/header'
import ApplicationColumn from '@/components/home/application-column'
import Banner from '@/components/home/banner'
import ServeColumn from '@/components/home/serve-column'
import Footer from '@/components/home/footer'
import AdvantageColumn from '@/components/home/advantage-column'
import StepColumn from '@/components/home/step-column'

import banner from '@/public/banner.jpg'
import banner1 from '@/public/banner1.jpg'
import contact from '@/public/contact.png'
import wechat from '@/public/wx.svg'

import standardIllustration from '@/public/standard.svg'
import rangeIllustration from '@/public/range.svg'
import wideIllustration from '@/public/wide.svg'
import designIllustration from '@/public/design.svg'
import quatityIllustration from '@/public/quatity.svg'


export default function HomePage() {

    const pages = [
        {
            route: '/',
            label: '首页',
        },
        {
            route: '#serve',
            label: '业务范围',
        },
        {
            route: '#application',
            label: '应用领域',
        },
        {
            route: '#advantage',
            label: '我们的优势',
        },
        {
            route: '#step',
            label: '服务流程',
        },
        {
            route: '/contact3',
            label: '团队介绍',
        },
        {
            route: '/contact4',
            label: '关于我们',
        },
    ]
    const banners = [
        {
            title: '注重设计、质量与效率',
            content: '为您提供极致的软件定制服务',
            image: banner,
        },
        {
            title: '我们的使命是',
            content: '为您提供极致的软件定制服务',
            image: banner1,
        },
    ]
    const applications = [
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
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.59 13.41c.41.39.41 1.03 0 1.42c-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0a5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24a2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0a5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24a2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24a.973.973 0 0 1 0-1.42"></path></svg>,
        },
        {
            title: 'Web网站开发',
            description: '提供专业、高效的Web网站或稳定、可靠的后台系统开发服务。我们拥有丰富的经验和技术实力，注重用户体验、安全性和可扩展性，确保客户的网站或后台系统在各方面都能够脱颖而出。',
            image: wechat,
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></path></svg>,
        },
        {
            title: '后台系统开发',
            description: '提供专业、高效的Web网站或稳定、可靠的后台系统开发服务。我们拥有丰富的经验和技术实力，注重用户体验、安全性和可扩展性，确保客户的网站或后台系统在各方面都能够脱颖而出。',
            image: wechat,
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4s8-1.79 8-4s-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4"></path></svg>,
        },
        {
            title: '桌面应用开发',
            description: '提供基于Windows系统的桌面应用定制开发服务。包括企业级的管理软件和创新的桌面应用，我们都能够满足客户的定制需求。',
            image: wechat,
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2m0 14H5V8h14z"></path></svg>,
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
    const steps = [
        {
            title: '需求分析',
            content: ['初步沟通', '详细讨论', '确定开发方案', '签订合同',],
        },
        {
            title: '产品原型设计',
            content: ['界面交互设计', '原型DEMO'],
        },
        {
            title: '产品UI设计',
            content: ['设计稿'],
        },
        {
            title: '开发阶段',
            content: ['架构设计', '界面布局', '功能实现', '数据对接'],
        },
        {
            title: '测试',
            content: ['单元测试', '真机测试', '功能测试', '测试跟踪', '测试报告'],
        },
        {
            title: '验收',
            content: [],
        },
        {
            title: '部署上线',
            content: ['正式发布'],
        },
        {
            title: '后期维护',
            content: ['及时跟进', '帮助客户', '维护工作'],
        },
    ]

    return (
        <div className=" w-full min-h-full bg-bg2">
            <Header pages={pages} />
            <Banner data={banners} />
            <ServeColumn serves={serves} />
            <ApplicationColumn applications={applications} />
            <AdvantageColumn advantages={advantages} />
            <StepColumn steps={steps} />
            <section className='useMax py-lg'>
                <div className='flex p-md rounded-xl bg-primary flex-row justify-between text-white'>
                    <div className='flex flex-col justify-center gap-3'>
                        <h2 className='font-semibold text-4xl'>获取方案报价</h2>
                        <p className='text-xl'>有合作意向或定制需求？立即添加我们的客服微信咨询，免费获取定制化解决方案及报价</p>
                        <button className='outline-none rounded-lg border-2 transition-colors mt-2 border-background hover:bg-background hover:text-primary self-baseline px-4 py-2'>立即咨询</button>
                    </div>
                    <Image alt='即刻联系我们' src={contact} height={240} />
                </div>
            </section>
            <Footer />
        </div>
    )
}