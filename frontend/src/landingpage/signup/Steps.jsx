import React from 'react'
// #FAFAFB

const Steps = () => {
    return (
        <div className="w-full bg-[#FAFAFB]">
            <div className="max-w-6xl mx-auto mt-40 text-text-color px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-4 border-b border-gray-200 pb-20 ">

                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-medium text-center text-gray-800 mb-20 md:mb-24">
                    Steps to open a demat account with Zerodha
                </h2>

                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left Column ( */}
                    <div className="flex-1 flex justify-center">
                        <img src="./svg/steps-acop.svg" alt="steps-acop" className="h-70" />
                    </div>

                    {/* Right Column */}
                    <div className="flex-1 max-w-md">
                        <ol className="relative space-y-12">
                            {[
                                { number: '01', text: 'Enter the requested details' },
                                { number: '02', text: 'Complete e-sign & verification' },
                                { number: '03', text: 'Start investing!' },
                            ].map((step) => (
                                <li key={step.number} className="flex items-center">
                                    {/* Circle and standard Number */}
                                    <div className="flex items-center justify-center min-w-14 h-14 bg-gray-100 rounded-full border border-gray-200">
                                        <span className="text-xl font-semibold text-gray-500">{step.number}</span>
                                    </div>
                                    {/* Standard Text */}
                                    <span className="text-xl text-gray-600 ml-6">{step.text}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Steps