import FadeInAnimation from '@/components/annimate-fade-in'
import IcedeerFontSvg from '../../public/icedeer-font-svg'
import Navigator from '@/components/navigator'

export default function Footer({ pages, follows }) {
    return (
        <footer className='select-none bg-minor p-lg mobile:p-md'>
            <div className='use-max flex flex-col text-white'>
                <div className='mb-16 flex leading-8 mobile:mb-8 pad:flex-col pad:gap-8'>
                    <div className='flex'>
                        <IcedeerFontSvg className='my-auto h-6 self-baseline' />
                        <p className='ml-auto block lg:hidden'>© 2024 iceDeer</p>
                    </div>
                    <div className='flex mobile:justify-between'>
                        {follows.map(follow => (
                            <a
                                key={follow.platform}
                                href={follow.link}
                                target='_blank'
                                className='h-8 w-8 text-white lg:ml-12 padOnly:mr-12'
                            >
                                {follow.icon}
                            </a>
                        ))}
                    </div>
                    <p className='hidden lg:ml-auto lg:block'>© 2024 iceDeer</p>
                </div>
                <div className='flex flex-wrap gap-8 lg:gap-12'>
                    <Navigator
                        pages={pages}
                        className='cursor-pointer text-font transition-[color] hover:text-white mobile:text-xs'
                    />
                </div>
            </div>
        </footer>
    )
}
