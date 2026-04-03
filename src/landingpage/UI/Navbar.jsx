import { NavLink, useNavigate } from "react-router-dom"
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b-2 border-gray-100 h-17 flex items-center justify-center">
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
        <div className="hidden md:flex items-center space-x-8 text-gray-800 text-md font-medium">
          <NavLink to="/signup" className="hover:text-primary transition-colors">Signup</NavLink>
          <NavLink to="/about" className="hover:text-primary transition-colors">About</NavLink>
          <NavLink to="/products" className="hover:text-primary transition-colors">Products</NavLink>
          <NavLink to="/pricing" className="hover:text-primary transition-colors">Pricing</NavLink>
          <NavLink to="/support" className="hover:text-primary transition-colors">Support</NavLink>
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
      {
        isOpen && (
          <div className="absolute top-17 left-0 w-full bg-white shadow-lg md:hidden flex flex-col px-6 py-7 space-y-5 text-gray-800 text-sm font-medium border-t border-gray-300">
            <NavLink to="/signup" onClick={toggleMenu} className="hover:text-blue-600">Signup</NavLink>
            <NavLink to="/about" onClick={toggleMenu} className="hover:text-blue-600">About</NavLink>
            <NavLink to="/products" onClick={toggleMenu} className="hover:text-blue-600">Products</NavLink>
            <NavLink to="/pricing" onClick={toggleMenu} className="hover:text-blue-600">Pricing</NavLink>
            <NavLink to="/support" onClick={toggleMenu} className="hover:text-blue-600">Support</NavLink>
          </div>
        )
      }
    </nav >
  )
}

export default Navbar