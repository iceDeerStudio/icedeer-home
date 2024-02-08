import { Fragment } from "react";

export default function StepColumn({ steps }) {
    return (
        <section className='py-lg'>
            <div className="useMax relative">
                <h2 className='w-full text-center text-3xl font-semibold pb-md'>服务流程</h2>
                <p className=' text-center text-lg pb-md'>
                    iceDeer通过扎实严谨的项目流程，精研细磨，匠心出精品
                </p>
                <div className="flex flex-row pb-md">
                    {steps.map((step, index) => (
                        <div key={step.title} className=" flex flex-col flex-1">
                            <div className="flex flex-row items-center h-12 relative">
                                {index !== 0 &&
                                    <div className=" absolute left-[-24px] h-14 w-12 rounded-r-full bg-primary border-4 border-l-0 border-secondaryBackground"></div>
                                }
                                <div className="h-full w-full rounded-r-full bg-primary border-4 border-primary px-sm text-background flex flex-row justify-center items-center">
                                    {step.title}
                                </div>
                            </div>
                            <div className="flex flex-col items-center mt-sm">
                                <span className="h-8 w-8 leading-8 rounded-full text-center bg-primary text-background text-lg mb-1">{index}</span>
                                {step.content.map(v => (
                                    <Fragment key={v}>
                                        <span className=" w-2 h-2 border-r-2 border-b-2 rotate-45 border-primary"></span>
                                        <p className=" pt-1">{v}</p>
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}