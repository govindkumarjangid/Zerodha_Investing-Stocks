import { BsArrowRight } from "react-icons/bs";

const ProductCard = ({
    title,
    description,
    links = [],
    imageSrc,
    imageAlt,
    imageLeft = true,
    showAppStore = false,
}) => {
    return (
       <div
      className={`flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto ${
        !imageLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image Container */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full max-w-md lg:max-w-lg object-contain"
        />
      </div>

      {/* Content Container */}
      <div className="w-full md:w-1/2 flex flex-col items-start text-left">
        <h2 className="text-3xl font-medium text-gray-800 mb-5">{title}</h2>
        <p className="text-[16px] text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        {/* Links Array */}
        {links.length > 0 && (
          <div className="flex flex-wrap gap-8 mb-6 text-[15px]">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-blue-600 hover:text-gray-800 font-medium flex items-center gap-1.5 transition-colors"
              >
                {link.text} <BsArrowRight className="mt-0.5" />
              </a>
            ))}
          </div>
        )}

        {/* App Store Badge Images  */}
        {showAppStore && (
          <div className="flex flex-wrap gap-4 mt-2">
            {/* Google Play Store Image Badge */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                src="./svg/googlePlayBadge.svg"
                alt="Get it on Google Play"
                className="h-10 w-auto"
              />
            </a>

            {/* Apple App Store Image Badge */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                src="./svg/appstoreBadge.svg"
                alt="Download on the App Store"
                className="h-10 w-auto"
              />
            </a>
          </div>
        )}
      </div>
    </div>
    )
}

export default ProductCard;