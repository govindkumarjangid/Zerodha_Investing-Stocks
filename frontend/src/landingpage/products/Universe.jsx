import {Link} from 'react-router-dom';

const Universe = () => {
  const platforms = [
    {
      name: "Zerodha Fund House",
      logo: "/images/zerodhaFundhouse.png",
      description: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      name: "Sensibull",
      logo: "/svg/sensibull-logo.svg",
      description: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      name: "Tijori",
      logo: "/svg/tijori.svg",
      description: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    },
    {
      name: "Streak",
      logo: "/images/streakLogo.png",
      description: "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      name: "smallcase",
      logo: "/images/smallcaseLogo.png",
      description: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
    },
    {
      name: "ditto",
      logo: "/images/dittoLogo.png",
      description: "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ];
  return (
   <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-center">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium text-gray-800 mb-4">
            The Zerodha Universe
          </h2>
          <p className="text-[17px] text-gray-600">
            Extend your trading and investment experience even further with our partner platforms
          </p>
        </div>

        {/* Grid Layout for Platforms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mb-20">
          {platforms.map((platform, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Logo */}
              <img
                src={platform.logo}
                alt={platform.name}
                className="h-10 sm:h-12 w-auto object-contain mb-6"
              />
              {/* Description */}
              <p className="text-[14px] text-gray-500 leading-wider max-w-xs">
                {platform.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
         <Link to="/signup" className="mb-5 w-50 m-auto px-6 py-3 bg-primary hover:bg-primary-dull text-white text-xl rounded-sm shadow-xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 text-shadow-2xs">
          Sign up for free
        </Link>

      </div>
    </section>
  )
}

export default Universe;