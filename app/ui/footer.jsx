
import IcedeerFontSvg from '../../public/icedeer-font-svg'
import Navigator from '@/components/navigator'

export default function Footer({ pages, follows }) {
    return (
        <footer className='bg-minor py-lg select-none'>
            <div className='useMax flex flex-col'>
                <div className='flex justify-center gap-8'>
                    {follows.map(follow => (
                        <a key={follow.platform} href={follow.link} className='h-8 w-8 text-bg2'>
                            {follow.icon}
                        </a>
                    ))}
                </div>
                <span className='mx-auto my-md h-[0.5px] w-16 bg-bg2'></span>
                <div className='flex flex-1 items-center justify-between'>
                    <IcedeerFontSvg className='mb-1 h-6 text-bg1' />
                    <Navigator pages={pages} className='flex-1 cursor-pointer text-center text-sm text-bg2 ' />
                    <p className='w-[148px] text-right text-bg1'>© 2024 iceDeer</p>
                </div>
            </div>
        </footer>
    )
}
