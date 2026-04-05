import { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import axios from 'axios'

const BuyActionWindow = ({ uid }) => {

  const generalContext = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = () => {
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });
    generalContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div
      className="w-[40%] h-[63%] bg-[rgb(245,245,245)] absolute bottom-0 left-[35%] cursor-move box-border z-100 rounded border border-[rgb(238,238,238)]"
      draggable="true"
    >
      {/* Input Fields */}
      <div className="px-6 py-4 bg-white pb-7">
        <div className="flex items-center justify-between mt-4 mb-4">
          {/* Qty Field */}
          <fieldset className="max-w-30 box-border border border-[#ddd] mr-2 rounded-sm focus-within:border-[rgb(49,49,49)]">
            <legend className="ml-2.5 text-xs px-1">Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              className="border-none mr-2 max-w-30 min-h-8.75px-3 box-border text-lg focus:outline-none"
            />
          </fieldset>

          {/* Price Field */}
          <fieldset className="max-w-30 box-border border border-[#ddd] mr-2 rounded-sm focus-within:border-[rgb(49,49,49)]">
            <legend className="ml-2.5 text-xs px-1 text-[#ddd]">Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              className="border-none mr-2 max-w-32.5 min-h-8.75 px-3 box-border text-lg focus:outline-none"
            />
          </fieldset>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full box-border flex items-center justify-between relative top-[10%] px-5">
        <span className="text-xs">Margin required ₹140.65</span>
        <div className="flex">
          <button
            onClick={handleBuyClick}
            className="no-underline px-5 py-2.5 rounded-sm text-white mx-0.5 bg-blue-400 hover:bg-blue-500 transition-all duration-300 active:scale-95 cursor-pointer border-none"
          >
            Buy
          </button>
          <button
            onClick={handleCancelClick}
            className="no-underline px-5 py-2.5 rounded-sm text-white mx-0.5 bg-red-400 hover:bg-red-500 transition-all duration-300 active:scale-95 cursor-pointer border-none"
          >
            Cancel
          </button>
        </div>
      </div>

    </div>
  )
}

export default BuyActionWindow;