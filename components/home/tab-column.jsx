"use client"

import { cn } from "@/lib/cn";
import { useState } from "react"

import applicationImg from '@/public/application.png'
import Image from 'next/image'

export default function TabColumn({ tabs }) {
    const [selectedTab, selectTab] = useState(0);

    return (
        <section className='useMax flex flex-col border-2 border-divider rounded-3xl px-12 py-8 mb-24'>
            <h2 className=' text-primary text-2xl'>应用领域示例</h2>
            <div className="flex flex-row gap-2 my-4 pb-2 border-b-2 border-divider">
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
            <div className="flex flex-row items-center gap-12">
                <div className="flex-1">
                    <h3 className="text-2xl text-primary mb-4 font-semibold">{tabs[selectedTab].title}</h3>
                    {tabs[selectedTab].content}
                </div>
                <div className="py-6 flex-[2]">
                    <Image className="rounded-xl" src={applicationImg} />
                </div>
            </div>
        </section>
    )
}