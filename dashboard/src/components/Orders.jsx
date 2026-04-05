import { MdOutlineMenuBook } from "react-icons/md";
import { Link } from 'react-router-dom'

const Orders = () => {
  return (
    <div className="w-full h-[90vh]">
      <div className="flex flex-col items-center justify-center">
       <MdOutlineMenuBook className="text-gray-400 text-8xl mt-5" />
        <p className="mt-5 text-gray-400 text-base font-light">
          You haven't placed any orders today
        </p>
        <Link
          to={"#"}
          className="no-underline bg-blue-400 px-5 py-2.5 rounded-sm text-white mt-5 hover:bg-blue-500 transition-all duration-300 active:scale-95"
        >
          Get started
        </Link>
      </div>
    </div>
  )
}

export default Orders