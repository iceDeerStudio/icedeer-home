import './globals.css'

import { routes, follows } from '@/public/meta/meta'

import Navigation from './ui/navigation'
import Footer from './ui/footer'

export const metadata = {
    title: 'iceDeer工作室 | 提供极致的软件定制服务',
    description: 'iceDeer工作室官方网站',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body suppressHydrationWarning={true}>
                <Navigation pages={routes} />
                {children}
                <Footer pages={routes} follows={follows} />
            </body>
        </html>
    )
}
