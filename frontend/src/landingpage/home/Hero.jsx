import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="max-w-7xl p-5 mb-5 mx-auto overflow-hidden">
      <div className="flex flex-col text-center">
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          src="./images/homeHero.png"
          alt="Hero Image"
          className="mb-10 mt-30 md:w-[70%] max-h-[60vh] mx-auto hover:transform hover:-translate-y-2 transition-transform duration-500"
        />
        <h1 className="my-3 text-3xl text-text-color">Invest in everything</h1>
        <p className="text-xl mb-10 text-text-color">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <Link to="/signup" className="mb-5 w-50 m-auto px-6 py-3 bg-primary hover:bg-primary-dull text-white text-xl rounded-sm shadow-xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 text-shadow-2xs inline-block">
          Sign up for free
        </Link>
      </div>
    </div>
  )
}

export default Hero