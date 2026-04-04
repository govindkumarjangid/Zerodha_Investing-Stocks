import { FiSearch } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className="mb-10">
      {/* Title & Button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-medium text-gray-800">Support Portal</h1>
        <button className="bg-primary hover:bg-primary-dull text-white text-sm font-medium py-2 px-4 rounded transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95">
          My tickets
        </button>
      </div>

      {/* Search Input */}
      <div className="relative">
        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Eg: How do I open my account, How do I activate F&O..."
          className="w-full border border-gray-300 rounded-sm py-4 pl-12 pr-4 text-[15px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition-all"
        />
      </div>
    </div>
  )
}

export default Hero;