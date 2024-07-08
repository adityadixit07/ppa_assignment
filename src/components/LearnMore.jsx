import React from "react";

const LearnMore = () => {
  return (
    <div className=" mx-auto p-4 md:flex md:items-center md:justify-between ">
      <div className="md:w-1/2 p-4">
        <img
          src="./images/rafiki.png"
          alt="Learn more"
          className="w-full h-56 object-contain rounded-md"
        />
      </div>
      <div className="md:w-1/2 p-4">
        <h1 className="text-gray-800 font-semibold text-2xl md:text-3xl mb-4 pb-2">
          The unseen of spending three <br /> years at Pixelgrade
        </h1>
        <p className="text-gray-600 font-normal text-base md:text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white rounded-md px-6 py-2 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default LearnMore;
