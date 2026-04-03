import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto mt-40 text-text-color px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-4 items-center border-b border-gray-200 pb-20">
      <h2 className="text-2xl">Zerodha Products</h2>
      <h3 className="md:text-xl text-md tracking-wider">Sleek, modern, and intuitive trading platforms</h3>
      <p className="flex items-center group ">Check out our <span className="text-primary cursor-pointer "> &nbsp;investment offerings</span>
       <FiArrowRight className="group-hover:translate-x-1 transition-transform ml-2 duration-300 hover:text-primary-dull text-primary" />
      </p>
    </div>
  )
}

export default Hero;