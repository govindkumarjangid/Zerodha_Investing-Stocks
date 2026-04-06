import { Link } from 'react-router-dom';
import { FiClock } from "react-icons/fi";

const Funds = () => {

  const FundRow = ({ label, value, isImportant, isColored }) => (
    <div className="flex items-center justify-between mb-5">
      <p className="text-base text-gray-500">{label}</p>
      <p
        className={`${isImportant ? "text-2xl text-[#313131]" : "text-sm"} ${isColored ? "text-[#4184f3]" : ""
          }`}
      >
        {value}
      </p>
    </div>
  );

  return (
    <>

      {/* Header */}
      <div className="w-full text-right flex items-center justify-end mb-4">
        <p className="text-sm text-gray-400 mr-2">
          Instant, zero-cost fund transfers with UPI
        </p>
        <Link className="no-underline px-5 py-2.5 rounded-sm text-white mx-0.5 bg-green-400 hover:bg-green-500 transition-all duration-300 active:scale-95">
          Add funds
        </Link>
        <Link className="no-underline px-5 py-2.5 rounded-sm text-white mx-0.5 bg-blue-400 hover:bg-blue-500 transition-all duration-300 active:scale-95">
          Withdraw
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-between mt-6 mb-20">

        {/* Equity Column */}
        <div className="flex-[0_0_48%] text-left">
          <span className="flex items-center mb-5">
            <FiClock size={20} className="mr-2" />
            <p className="inline-block text-xl font-light">Equity</p>
          </span>

          <div className="border border-gray-300 rounded-md px-9 py-6">
            <FundRow label="Available margin" value="4,043.10" isImportant isColored />
            <FundRow label="Used margin" value="3,757.30" isImportant />
            <FundRow label="Available cash" value="4,043.10" isImportant />
            <hr className="border-none bg-gray-300 h-px mb-5" />
            <FundRow label="Opening Balance" value="4,043.10" />
            <FundRow label="Opening Balance" value="3736.40" />
            <FundRow label="Payin" value="4064.00" />
            <FundRow label="SPAN" value="0.00" />
            <FundRow label="Delivery margin" value="0.00" />
            <FundRow label="Exposure" value="0.00" />
            <FundRow label="Options premium" value="0.00" />
            <hr className="border-none bg-gray-300 h-px mb-5" />
            <FundRow label="Collateral (Liquid funds)" value="0.00" />
            <FundRow label="Collateral (Equity)" value="0.00" />
            <FundRow label="Total Collateral" value="0.00" />
          </div>
        </div>

        {/* Commodity Column */}
        <div className="flex-[0_0_48%]">
          <div className="px-8 py-2 text-center">
            <p className="mb-10 text-gray-400">
              You don't have a commodity account
            </p>
            <Link className="no-underline px-5 py-2.5 rounded-sm text-white bg-blue-400 hover:bg-blue-500 transition-all duration-300 active:scale-95">
              Open Account
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default Funds;