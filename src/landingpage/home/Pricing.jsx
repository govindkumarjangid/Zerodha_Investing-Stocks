import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="max-w-6xl mx-auto mt-40 flex md:flex-row flex-col items-center justify-between gap-10 text-text-color px-4 sm:px-6 lg:px-8 w-full">
     {/* pricing section  */}

        <div className="max-w-100">
          <h2 className="text-2xl font-medium mb-8">Unbetable pricing</h2>
          <p className="leading-tight mb-4"> We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <Link className="flex items-center text-primary group">
            See Pricing
            <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300 font-bold ml-2" />
          </Link>
        </div>
        <div className="border-2 border-gray-300 rounded-md flex justify-start" >
          <div className="md:px-10 md:py-8 px-4 py-2 border-r-2 border-gray-300">
            <h2 className="text-3xl font-bold md:mb-3 mb-2">₹ 0</h2>
            <p className="text-sm">
              Free equity delivery and
              <br />
              direct mutual funds
            </p>
          </div>
          <div className="md:px-10 md:py-8 px-4 py-2">
            <h1 className="text-3xl font-bold md:mb-3 mb-2">₹ 20</h1>
            <p className="text-sm">Intraday and F&O</p>
          </div>
        </div>

    </div>
  )
}

export default Pricing;