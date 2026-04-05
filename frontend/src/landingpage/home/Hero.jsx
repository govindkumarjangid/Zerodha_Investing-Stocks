import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="max-w-7xl p-5 mb-5 mx-auto">
      <div className="flex flex-col text-center">
        <img src="./images/homeHero.png" alt="Hero Image" className="mb-10 mt-30 md:w-[70%] max-h-[60vh] mx-auto" />
        <h1 className="my-3 text-3xl text-text-color">Invest in everything</h1>
        <p className="text-xl mb-10 text-text-color">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <Link to="/signup" className="mb-5 w-50 m-auto px-6 py-3 bg-primary hover:bg-primary-dull text-white text-xl rounded-sm shadow-xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 text-shadow-2xs">
          Sign up for free

        </Link>
      </div>
    </div>
  )
}

export default Hero