import { header, service, stacks, applications, advantages, steps, about, ad } from '@/public/meta/meta'

import { Header, Service, Stacks, Applications, Advantages, Steps, About, Ad } from '@/app/ui/home/index'

export default function Home() {
    return (
        <div className=' min-h-full w-full bg-bg2'>
            <Header data={header.content} />
            <Service data={service} />
            <Stacks data={stacks} />
            <Applications data={applications} />
            <Advantages data={advantages} />
            <Steps data={steps} />
            <About data={about} />
            <Ad data={ad} />
        </div>
    )
}
