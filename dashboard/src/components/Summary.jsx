import { FiClock } from "react-icons/fi";
import { PiCardholder } from "react-icons/pi";

const Summary = () => {
  return (
    <>
      {/* Username Section */}
      <>
        <h6 className="text-2xl font-normal text-gray-600 mb-5">Hi, User!</h6>
        <hr className="border-none bg-gray-300 h-px my-5 mb-10" />
      </>

      {/* Equity Section */}
      <div className="pb-3">
        <span className="flex items-center mb-3">
          <FiClock className="mr-2" />
          <p className="inline-block text-xl">Equity</p>
        </span>

        <div className="w-1/2 flex items-center justify-evenly">
          <div>
            <h3 className="text-[2.5rem] font-light text-gray-600">3.74k</h3>
            <p className="text-sm text-gray-500">Margin available</p>
          </div>
          <hr className="border-l border-gray-200 h-17.5 ml-12" />
          <div>
            <p className="text-sm text-gray-600 mb-2.5 whitespace-nowrap">
              Margins used <span className="inline ml-5 text-sm text-gray-400">0</span>
            </p>
            <p className="text-sm text-gray-600 mb-2.5 whitespace-nowrap">
              Opening balance <span className="inline ml-5 text-sm text-gray-400">3.74k</span>
            </p>
          </div>
        </div>
        <hr className="border-none bg-gray-300 h-px mt-12" />
      </div>

      {/* Holdings Section */}
      <div className="pb-3">
        <span className="flex items-center mb-3 mt-3">
          <PiCardholder className="mr-2" size={20}/>
          <p className="inline-block text-xl">Holdings (13)</p>
        </span>

        <div className="w-1/2 flex items-center justify-evenly">
          <div>
            <h3 className="text-[2.5rem] font-light text-green-400">
              1.55k <small className="text-xs text-green-400">+5.20%</small>
            </h3>
            <p className="text-sm text-gray-400">P&L</p>
          </div>
          <hr className="border-l border-gray-300 h-17.5" />
          <div>
            <p className="text-sm text-gray-600 mb-2.5 whitespace-nowrap">
              Current Value <span className="inline ml-5 text-sm text-gray-400">31.43k</span>
            </p>
            <p className="text-sm text-gray-600 mb-2.5 whitespace-nowrap">
              Investment <span className="inline ml-5 text-sm text-gray-400">29.88k</span>
            </p>
          </div>
        </div>
       <hr className="border-none bg-gray-300 h-px mt-12" />
      </div>
    </>
  )
}

export default Summary