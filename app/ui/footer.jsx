import IcedeerFontSvg from '../../public/icedeer-font-svg'
import Navigator from '@/components/navigator'

export default function Footer({ pages, follows }) {
    return (
        <footer className='select-none bg-minor py-16'>
            <div className='use-max flex flex-col px-lg text-white'>
                <div className='mb-16 flex leading-8'>
                    <IcedeerFontSvg className='my-auto h-6' />
                    {follows.map(follow => (
                        <a key={follow.platform} href={follow.link} target='_blank' className='ml-12 h-8 w-8 text-white'>
                            {follow.icon}
                        </a>
                    ))}
                    <p className='ml-auto'>© 2024 iceDeer</p>
                </div>
                <div className='flex'>
                    <Navigator pages={pages} className='mr-12 cursor-pointer text-font transition-[color] hover:text-white' />
                </div>
            </div>
        </footer>
    )
}
