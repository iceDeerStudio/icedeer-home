'use client'

import { cn } from '@/app/lib/cn'
import { useState, useEffect, useRef } from 'react'
import { Fragment } from 'react'

export default function FadeInAnimation({ children }) {
    const domRef = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observe = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setVisible(true)
            } else if (entries[0].boundingClientRect.top > 0) {
                setVisible(false)
            }
        })
        observe.observe(domRef.current)

        return () => observe.unobserve(domRef.current)
    }, [])

    return (
        <div
            ref={domRef}
            className={cn(
                'transition-[transform_opacity] duration-700',
                visible ? 'opacity-1 translate-y-0' : ' translate-y-8 opacity-0',
            )}
        >
            {children}
        </div>
    )
}
