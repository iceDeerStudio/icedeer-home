import IcedeerFontSvg from '../../public/icedeer-font-svg'
import Navigator from '@/components/navigator'

export default function Footer({ pages, follows }) {
    return (
        <footer className='select-none bg-minor py-lg'>
            <div className='use-max mobile:px-md flex flex-col px-lg text-white'>
                <div className='pad:flex-col pad:gap-8 mb-16 flex leading-8'>
                    <IcedeerFontSvg className='my-auto h-6 self-baseline' />
                    <div className='mobile:justify-between flex'>
                        {follows.map(follow => (
                            <a
                                key={follow.platform}
                                href={follow.link}
                                target='_blank'
                                className='padOnly:mr-12 h-8 w-8 text-white lg:ml-12'
                            >
                                {follow.icon}
                            </a>
                        ))}
                    </div>
                    <p className='lg:ml-auto'>© 2024 iceDeer</p>
                </div>
                <div className='flex flex-wrap gap-8 lg:gap-12'>
                    <Navigator pages={pages} className='cursor-pointer text-font transition-[color] hover:text-white' />
                </div>
            </div>
        </footer>
    )
}
