import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-[#F5F7FA]">
      <nav className="max-w-[1200px] mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-[#4CAF4F] text-xl font-bold">
            <img src="./images/logom.png" alt="logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {[
              "Home",
              "Service",
              "Feature",
              "Product",
              "Testimonial",
              "FAQ",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#18191F] hover:text-[#4CAF4F] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-2">
            <button className="text-[#4CAF4F] hover:bg-[#4CAF4F] hover:text-white px-4 py-2 rounded transition-colors">
              Login
            </button>
            <button className="bg-[#4CAF4F] text-white px-4 py-2 rounded hover:bg-[#45a049] transition-colors">
              Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-[#4CAF4F]">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              {[
                "Home",
                "Service",
                "Feature",
                "Product",
                "Testimonial",
                "FAQ",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#18191F] hover:text-[#4CAF4F] transition-colors"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              ))}
              <button className="text-[#4CAF4F] hover:bg-[#4CAF4F] hover:text-white px-4 py-2 rounded transition-colors w-full">
                Login
              </button>
              <button className="bg-[#4CAF4F] text-white px-4 py-2 rounded hover:bg-[#45a049] transition-colors w-full">
                Sign up
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
