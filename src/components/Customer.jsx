import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Customer = () => {
  return (
    <div className="bg-[#F5F7FA] py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img
              src="./images/tesla.png"
              alt="Tesla logo"
              className="w-full max-w-[300px] mx-auto"
            />
          </div>
          <div className="md:w-2/3">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-[#717171] mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, placeat aspernatur est atque repellendus quia nostrum
                inventore sed ipsa beatae doloremque voluptates cupiditate
                pariatur quis necessitatibus consequatur amet quas autem velit
                laboriosam exercitationem voluptas? Fugiat fugit eligendi
                minima. Hic, nostrum aspernatur. Quod quia beatae quas error sit
                ab, eaque recusandae neque soluta vel delectus expedita alias.
              </p>
              <h1 className="text-[#4CAF4F] text-xl font-semibold mb-2">
                Tesla Smith
              </h1>
              <span className="text-[#717171] block mb-6">
                British Dragon Authority
              </span>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <FaFacebook className="text-[#4267B2] text-2xl cursor-pointer" />
                  <FaTwitter className="text-[#1DA1F2] text-2xl cursor-pointer" />
                  <FaLinkedin className="text-[#0077B5] text-2xl cursor-pointer" />
                  <FaInstagram className="text-[#E1306C] text-2xl cursor-pointer" />
                </div>
                <button className="bg-[#4CAF4F] text-white px-6 py-2 rounded-md hover:bg-[#45a049] transition-colors duration-300">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
