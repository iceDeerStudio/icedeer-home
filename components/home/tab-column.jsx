"use client"

import { cn } from "@/lib/cn";
import { useState } from "react"

import applicationImg from '@/public/application.png'
import Image from 'next/image'

export default function TabColumn({ tabs }) {
    const [selectedTab, selectTab] = useState(0);

    return (
        <section className='py-lg'>
            <div className="useMax">
                <h2 className='w-full text-center text-4xl text-main font-bold mb-md'>应用领域示例</h2>
                <p className='text-center text-shadow text-lg mb-md'>
                    iceDeer为您提供定制化的解决方案，我们的服务范围渗透进各行各业，助力您的产品在市场中脱颖而出。
                </p>
                <div className="rounded bg-bg1 use-shadow">
                    <div className="flex flex-row gap-2 p-[1rem_1rem_0_1rem] ">
                        {tabs.map((tab, index) => (
                            <span
                                key={index}
                                onClick={() => selectTab(index)}
                                className={cn(
                                    "cursor-pointer text-shadow bg-blue-900/5 px-4 py-2 rounded transition-colors",
                                    selectedTab === index ? "bg-main text-white" : "hover:bg-blue-900/10"
                                )}
                            >
                                {tab.title}
                            </span>
                        ))}
                    </div>
                    <div className="flex p-4">
                        <div className="w-1/2">
                            <Image className="rounded" src={applicationImg} />
                        </div>
                        <div className="w-1/2 p-8">
                            <h3 className="block text-3xl text-minor font-bold mb-8">{tabs[selectedTab].title}</h3>
                            <p className="block text-lg text-shadow ">{tabs[selectedTab].content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}