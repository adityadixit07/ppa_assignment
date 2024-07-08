import React from "react";

const HowToDesign = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <img
              src="./images/pana.png"
              alt="Design illustration"
              className="w-full h-auto max-w-[500px] mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-[#4D4D4D] text-3xl font-bold mb-6 py-2">
              How to design site footer like this
            </h1>
            <p className="text-[#717171] mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad
              dicta aperiam ullam enim, facilis iusto earum, unde, laborum ex
              itaque esse minima animi vel amet quasi praesentium. Commodi,
              dolores laboriosam cum deleniti repudiandae aliquam reprehenderit
              quaerat! Ut amet temporibus saepe id quo! Dolorum, dicta
              voluptatibus explicabo necessitatibus recusandae, cum commodi
              tenetur, magni autem libero illo doloremque? Recusandae, commodi
              veritatis.
            </p>
            <button className="text-white font-[500] text-[16px] bg-[#4CAF4F] px-8 py-3 rounded-md hover:bg-[#45a049] transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToDesign;
