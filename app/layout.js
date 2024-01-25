import './globals.css'

export const metadata = {
  title: 'Icedeer 软件开发工作室',
  description: '提供极致的软件定制服务',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
