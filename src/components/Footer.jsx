import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#263238] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <img src="./images/Logo.png" alt="Logo" className="h-6 mb-4" />
          <p className="text-sm mb-4">Copyright © {new Date().getFullYear()}</p>
          <div className="flex space-x-4">
            <FaFacebook className="text-xl hover:text-[#4CAF4F] cursor-pointer" />
            <FaTwitter className="text-xl hover:text-[#4CAF4F] cursor-pointer" />
            <FaLinkedin className="text-xl hover:text-[#4CAF4F] cursor-pointer" />
          </div>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4">Company</h2>
          <ul className="space-y-2">
            {["About", "Blog", "Press", "Jobs"].map((item, index) => (
              <li key={index} className="hover:text-[#4CAF4F] cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4">Support</h2>
          <ul className="space-y-2">
            {[
              "Help Center",
              "Privacy Policy",
              "Legal",
              "Terms & Services",
              "Status",
            ].map((item, index) => (
              <li key={index} className="hover:text-[#4CAF4F] cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4">Stay up to date</h2>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-[#515B60] py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
            />
            <FaPaperPlane className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#4CAF4F] cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
