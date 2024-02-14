import Image from 'next/image'
import IcedeerFontSvg from '../../public/icedeer-font-svg'

export default function Footer() {
    return (
        <footer className='bg-secondaryBackground py-md'>
            <div className='useMax flex flex-col'>
                <div className='flex flex-row items-center justify-between'>
                    <IcedeerFontSvg className='h-6 text-main' />
                    <p className='text-sm'>© 2024 iceDeer</p>
                </div>
            </div>
        </footer>
    )
}
