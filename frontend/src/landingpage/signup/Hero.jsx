import React from 'react'
import LoginForm from './LoginForm';

const Hero = () => {
    return (
            <div
                className="max-w-6xl mx-auto mt-40 text-text-color px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-4 items-center border-b border-gray-200 pb-20"
            >
                {/* 1 TOP SECTION - Heading & Paragraph */}
                <div className="w-full text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-medium text-gray-800 mb-4">
                        Open a free demat and trading account online
                    </h1>
                    <p className="text-gray-500 text-base md:text-lg">
                        Start investing brokerage free and join a community of 1.6+ crore investors and traders
                    </p>
                </div>

                {/*  BOTTOM SECTION - Two Columns */}
                <div className="flex flex-col md:flex-row w-full items-center justify-center">

                    {/* LEFT SIDE - Image */}
                    <div className="flex flex-col md:w-1/2 w-full p-4 items-center justify-center">
                        <img
                            src="./svg/account_open.svg"
                            alt="Trading Platform Dashboard"
                            className="w-full max-w-lg object-contain"
                        />
                    </div>

                    {/* RIGHT SIDE - Login Form */}
                    <div className="w-full md:w-1/2 p-4 flex flex-col justify-center items-center">

                        <LoginForm />
                    </div>

                </div>
            </div>
    )
}

export default Hero;