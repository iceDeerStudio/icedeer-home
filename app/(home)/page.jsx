import { overviews, service, stacks, applications, advantages, steps, about, ad } from '@/public/meta/meta'

import { Overview, Service, Stacks, Applications, Advantages, Steps, About, Ad } from '@/app/ui/home/index'

export default function Home() {
    return (
        <div className=' relative mt-[-128px] min-h-full w-full bg-bg1'>
            <Overview data={overviews} />
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
