import Image from 'next/image'
import Logo from '@/public/icedeer-font.svg'

export default function Footer() {
    return (
        <footer className='bg-secondaryBackgroun py-8'>
            <div className='useMax flex flex-col'>
                <div className='flex flex-row justify-between items-center'>
                    <Image src={Logo} height={24} />
                    <p className='text-sm'>© 2024 iceDeer</p>
                </div>
            </div>
        </footer>
    )
}