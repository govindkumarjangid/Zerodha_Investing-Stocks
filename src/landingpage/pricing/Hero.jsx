
const Hero = () => {

  const pricingData = [
    {
      image: "./svg/pricingEquity.svg",
      title: "Free equity delivery",
      description: "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."
    },
    {
      image: "./svg/intradayTrades.svg",
      title: "Intraday and F&O trades",
      description: "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
    },
    {
      image: "./svg/pricingEquity.svg",
      title: "Free direct MF",
      description: "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
    },

  ]

  return (
       <div className="max-w-6xl mx-auto mt-40 flex flex-col items-center gap-5 text-text-color px-4 sm:px-6 lg:px-8 w-full">
         <h2 className="text-2xl font-semibold">Charges</h2>
         <p className="tracking-wider opacity-70 mb-20">List of all charges and taxes</p>
         <div className="flex md:flex-row flex-col items-start gap-10">
          {
            pricingData.map((pricing, index) => (
              <div key={index} className="flex flex-col justify-center max-w-75 space-x-4">
                <img src={pricing.image} alt={pricing.title}  className="h-40 mb-8"/>
                <h2 className="text-2xl mb-4 text-center">{pricing.title}</h2>
                <p className="text-center text-sm opacity-80 tracking-wide">{pricing.description}</p>
              </div>
            ))
          }
         </div>
       </div>
  )
}

export default Hero;