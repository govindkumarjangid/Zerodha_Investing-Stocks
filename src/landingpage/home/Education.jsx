import React from 'react'
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Education = () => {
  return (
    <div className="max-w-6xl mx-auto mt-40 flex md:flex-row flex-col items-center justify-between gap-10 text-text-color px-4 sm:px-6 lg:px-8 w-full">
      <img
        src="./svg/education.svg"
        alt="education image"
        className="w-auto h-[80%]"
      />

      <div className="max-w-120">
        <h2 className="text-3xl font-medium mb-8">Free and open market education</h2>
        <p className="leading-tight mb-4"> Varsity, the largest   online stock market education book in the world covering everything from the basics to advanced trading.</p>
        <Link className="flex items-center text-primary group w-20">
          Versity
          <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300 font-bold ml-2" />
        </Link>
        <p className="leading-tight mb-4 mt-15">TradingQ&A, the most active trading and investment community in India for all your market related queries.
        </p>
        <Link className="flex items-center text-primary group w-20">
          Trading
          <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300 font-bold ml-2" />
        </Link>
      </div>

    </div>
  )
}

export default Education;