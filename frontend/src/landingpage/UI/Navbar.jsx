import { NavLink, useNavigate } from "react-router-dom"
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-light border-b-2 border-gray-100 h-17 flex items-center justify-center">
      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">

        {/* Logo Section */}
        <div
          onClick={() => { navigate("/"); }}
          className="shrink-0 flex items-center cursor-pointer"
        >
          <img
            src="./svg/logo.svg"
            alt="logo"
            className="h-5 w-auto"
          />
        </div>
        {/* Desktop Menu (Hidden on mobile, visible on medium screens and up) */}
        <div className="hidden md:flex items-center space-x-8 text-md font-medium">
          <NavLink to="/signup" className={({ isActive }) => `transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-800'}`}>Signup</NavLink>
          <NavLink to="/about" className={({ isActive }) => `transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-800'}`}>About</NavLink>
          <NavLink to="/products" className={({ isActive }) => `transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-800'}`}>Products</NavLink>
          <NavLink to="/pricing" className={({ isActive }) => `transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-800'}`}>Pricing</NavLink>
          <NavLink to="/support" className={({ isActive }) => `transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-800'}`}>Support</NavLink>
        </div>

        {/* Mobile Menu Hamburger Icon (Visible on mobile, hidden on md and up) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:hover:text-primary focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-17 left-0 w-full overflow-hidden bg-white shadow-lg md:hidden flex flex-col px-6 py-7 space-y-5 text-sm font-medium border-t border-gray-300"
          >
            <NavLink to="/signup" onClick={toggleMenu} className={({ isActive }) => `transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-800'}`}>Signup</NavLink>
            <NavLink to="/about" onClick={toggleMenu} className={({ isActive }) => `transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-800'}`}>About</NavLink>
            <NavLink to="/products" onClick={toggleMenu} className={({ isActive }) => `transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-800'}`}>Products</NavLink>
            <NavLink to="/pricing" onClick={toggleMenu} className={({ isActive }) => `transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-800'}`}>Pricing</NavLink>
            <NavLink to="/support" onClick={toggleMenu} className={({ isActive }) => `transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-800'}`}>Support</NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav >
  )
}

export default Navbar