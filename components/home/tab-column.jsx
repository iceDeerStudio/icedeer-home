"use client"

import { cn } from "@/lib/cn";
import { useState } from "react"

import applicationImg from '@/public/application.png'
import Image from 'next/image'

export default function TabColumn({ tabs }) {
    const [selectedTab, selectTab] = useState(0);

    return (
        <section className=' bg-secondaryBackground py-lg'>
            <div className="useMax">
                <h2 className='w-full text-center text-3xl font-semibold mb-md'>应用领域示例</h2>
                <p className=' text-center text-lg mb-md'>
                    iceDeer为您提供定制化的解决方案，我们的服务范围渗透进各行各业，助力您的产品在市场中脱颖而出。
                </p>
                <div className="rounded-xl bg-background">
                    <div className="flex flex-row gap-2 p-md border-b-2 border-secondaryBackground">
                        {tabs.map((tab, index) => (
                            <span
                                key={index}
                                onClick={() => selectTab(index)}
                                className={cn(
                                    " cursor-pointer bg-secondaryBackground px-4 py-2 rounded-lg",
                                    selectedTab === index ? "bg-primary text-white" : "hover:bg-divider"
                                )}
                            >
                                {tab.title}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-row items-center p-md gap-16">
                        <div className="flex-[2]">
                            <Image className="rounded-xl" src={applicationImg} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl text-primary mb-sm font-semibold">{tabs[selectedTab].title}</h3>
                            {tabs[selectedTab].content}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}