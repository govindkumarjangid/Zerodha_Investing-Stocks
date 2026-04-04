const Awards = () => {
  return (
   <div className="max-w-6xl mx-auto mt-40 flex md:flex-row flex-col items-center justify-between gap-10 text-text-color px-4 sm:px-6 lg:px-8 w-full">
     <img
     src="./svg/largestBroker.svg"
     alt="lagest broker image"
     className="w-auto h-[80%] px-4"
     />
    <div className="flex flex-col text-text-color pl-0 md:pl-20 px-4">
      <h1 className="md:text-3xl text-xl font-semibold mb-4">largest Stock Broker in India</h1>
      <p className="text-md leading-tight mb-10 ">2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in :</p>
    <div className="flex justify-start sm:flex-row flex-col gap-5 md:gap-15 md:text-base text-sm text-muted">
      <ul className="flex flex-col gap-3">
        <li>● &nbsp; Futures and Options</li>
        <li>● &nbsp; Commodity derivatives</li>
        <li>● &nbsp; Currency derivatives</li>
      </ul>
      <ul className="flex flex-col gap-3">
        <li>● &nbsp; Stocks and IPOs</li>
        <li>● &nbsp; Direct mutual funds</li>
        <li>● &nbsp; Bonds and Growth</li>
      </ul>
    </div>
    </div>
   </div>
  )
}

export default Awards;