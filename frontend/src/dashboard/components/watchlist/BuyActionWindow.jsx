import { useState, useContext } from "react";
import GeneralContext from "../../../../context/GeneralContext.jsx";
import axiosInstance from "../../../../lib/axiosInstance.js";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

const BuyActionWindow = ({ uid }) => {

  const { closeBuyWindow, mode } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [loading, setLoading] = useState(false);

  const isBuy = mode === "BUY" || mode === "Buy";

  const handleBuyClick = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.post('/order/create-order', {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: isBuy ? "BUY" : "SELL",
      })

      toast.success(data.message);

    } catch (error) {
      console.log("Error : ", error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
      closeBuyWindow();
    }

  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-100 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50 flex flex-col font-sans"
      draggable="true"
    >
      {/* Header Section */}
      <div className={` px-6 py-4 border-b border-gray-200 bg-gray-50 cursor-move ${isBuy ? "text-blue-500" : "text-red-500"}`}>
        <h3 className="font-semibold">{isBuy ? "Buy" : "Sell"} {uid}</h3>
      </div>

      {/* Input Fields Section */}
      <div className="p-6">
        <div className="flex gap-4">
          {/* Qty Field */}
          <div className="flex-1">
            <label htmlFor="qty" className="block text-xs font-medium text-gray-500 mb-1">Qty.</label>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              className={`w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-gray-800 outline-none focus:ring-1 transition-all duration-200 ${isBuy ? 'focus:border-blue-400 focus:ring-blue-400' : 'focus:border-red-400 focus:ring-red-400'}`}
            />
          </div>

          {/* Price Field */}
          <div className="flex-1">
            <label htmlFor="price" className="block text-xs font-medium text-gray-500 mb-1">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              className={`w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-gray-800 outline-none focus:ring-1 transition-all duration-200 ${isBuy ? 'focus:border-blue-400 focus:ring-blue-400' : 'focus:border-red-400 focus:ring-red-400'}`}
            />
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">
          Margin <span className="text-gray-900 font-semibold">₹140.65</span>
        </span>

        <div className="flex gap-3">
          <button
            onClick={handleCancelClick}
            className="px-5 py-2.5 rounded-md text-sm text-gray-500 font-medium bg-gray-200 hover:bg-gray-100 transition-all duration-300  shadow-md outline-none active:scale-95 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleBuyClick}
            disabled={loading}
            className={`px-6 py-2.5 rounded-md flex items-center justify-center gap-2 text-sm text-white font-medium shadow-md transition-all duration-200 outline-none ${loading ? 'opacity-80 cursor-not-allowed' : 'active:scale-95 cursor-pointer'} ${isBuy ? 'bg-blue-400 hover:bg-blue-500' : 'bg-red-400 hover:bg-red-500'}`}
          >
            {loading && <FaSpinner className="animate-spin text-base" />}
            {isBuy ? "Buy" : "Sell"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default BuyActionWindow;