
const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto mt-40 gap-10 text-text-color px-4 sm:px-6 lg:px-8 w-full">
      <div className="flex flex-col">
        <h2 className="text-2xl text-center tracking-wider pb-30 border-b border-gray-200">
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </h2>
        <div className="flex md:flex-row flex-col justify-between gap-10 mt-20">
          <div className="max-w-120">
            <p className="mb-4">We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
            <p className="mb-4">Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
            <p className="mb-4">Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
          </div>
          <div>
            <p className="mb-4">In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
            <p className="mb-4"><span className="text-primary cursor-pointer">Rainmatter</span>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
            <p className="mb-4">And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is <span className="text-primary cursor-pointer">saying about us</span> or learn more about our business and product <span className="text-primary cursor-pointer">philosophies</span>.</p>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col items-center justify-evenly mt-20">
        <img src="./images/nithinKamath.jpg" alt="ceo image"  className="h-70 rounded-full shadow-xl mt-15 "/>
        <div>
          <h2 className="text-2xl my-10">People</h2>
          <p className="max-w-130">Nithin Kamath Founder, CEO Nithin bootstrapped and founded Zerodha in <span>2010</span> to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p className="max-w-130">He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <span>Homepage</span> / <span>TradingQnA</span> / <span>Twitter</span></p>
        </div>
      </div>

    </div>
  )
}

export default Hero;