
const OpenAccount = () => {
  return (
    <div className="max-w-7xl p-5 mb-5 mx-auto mt-25">
      <div className="flex flex-col text-center">
        <h1 className="my-3 text-3xl text-text-color">Open a Zerodha account</h1>
        <p className="text-md mb-12 text-text-color">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <button className="mb-5 w-50 m-auto px-6 py-3 bg-primary hover:bg-primary-dull text-white text-xl rounded-sm shadow-xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 text-shadow-2xs">
          Sign up for free
        </button>
      </div>
    </div>
  )
}

export default OpenAccount;