'use client'

import { cn } from '@/app/lib/cn'
import { useState, useEffect, useRef } from 'react'

export default function FadeInAnimation({ className, children, ...props }) {
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
                className,
                'use-scroll-fade-animation',
                visible ? 'opacity-1 translate-y-0' : ' translate-y-10 opacity-0',
            )}
            {...props}
        >
            {children}
        </div>
    )
}
