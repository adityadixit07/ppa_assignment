import React from "react";
import { LuMoveRight } from "react-icons/lu";

const GetDemo = () => {
  return (
    <div className="bg-gradient-to-br from-[#F5F7FA] to-[#E8EDF2] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-8 md:mb-0 md:mr-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#263238] leading-tight mb-4 py-2">
              Pellentesque suscipit <br className="hidden md:inline" />
              <span className="text-[#4CAF4F]">fringilla libero eu.</span>
            </h1>
            <p className="text-[#546E7A] text-lg mb-6 max-w-xl">
              Experience the power of our innovative solution. Get a
              personalized demo today and see how we can transform your
              business.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button className="text-white bg-[#4CAF4F] font-semibold px-8 py-4 rounded-full hover:bg-[#45a049] transition duration-300 ease-in-out flex items-center text-lg">
              Get Demo
              <LuMoveRight className="ml-2 text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetDemo;
