// import React, { useState, useEffect } from "react";
// import { FaArrowRight } from "react-icons/fa";

// const headerData = [
//   {
//     title: "Lessons and insights",
//     subtitle: "from 8 years",
//     description:
//       "Where to grow your business as a photographer: site or social media?",
//     image:
//       "https://cdn.pixabay.com/photo/2024/03/04/16/38/cat-8612685_1280.jpg",
//   },
//   {
//     title: "Lessons ",
//     subtitle: "from 8 years",
//     description:
//       "Where to grow your business as a photographer: site or social media?",
//     image:
//       "https://cdn.pixabay.com/photo/2024/03/04/16/38/cat-8612685_1280.jpg",
//   },
//   {
//     title: "Lessons and insights",
//     subtitle: "from 8 years",
//     description:
//       "Where to grow your business as a photographer: site or social media?",
//     image:
//       "https://cdn.pixabay.com/photo/2024/03/04/16/38/cat-8612685_1280.jpg",
//   },
//   // ... (other headerData items remain the same)
// ];

// const Header = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % headerData.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <header className="bg-[#F5F7FA] overflow-hidden">
//       <div className="container mx-auto px-4 lg:px-8 xl:px-16">
//         <div className="flex flex-col lg:flex-row items-center justify-between min-h-[499px] py-8">
//           {/* Left side content */}
//           <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 lg:pr-8">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4D4D4D] mb-4">
//               {headerData[currentSlide].title}
//               <span className="block text-[#4CAF4F] pb-4">
//                 {headerData[currentSlide].subtitle}
//               </span>
//             </h1>
//             <p className="text-[#18191F] mb-6 max-w-md mx-auto lg:mx-0">
//               {headerData[currentSlide].description}
//             </p>
//             <button className="bg-[#4CAF4F] text-white px-6 py-3 rounded-full hover:bg-[#45a049] transition-colors flex items-center justify-center mx-auto lg:mx-0">
//               Register
//               <FaArrowRight className="ml-2" />
//             </button>
//           </div>
//           {/* Right side image */}
//           <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px] relative">
//             <img
//               src={headerData[currentSlide].image}
//               alt={headerData[currentSlide].title}
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>
//         </div>
//         {/* Carousel indicators */}
//         <div className="flex justify-center mt-4 lg:mt-8 pb-4">
//           {headerData.map((_, index) => (
//             <button
//               key={index}
//               className={`w-3 h-3 rounded-full mx-1 ${
//                 index === currentSlide ? "bg-[#4CAF4F]" : "bg-gray-300"
//               }`}
//               onClick={() => setCurrentSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const slides = [
//   {
//     title: "Lessons from 8 years",
//     subtitle: "of building products",
//     image:
//       "https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_1280.jpg",
//   },
//   {
//     title: "Innovate with confidence",
//     subtitle: "embrace the future",
//     image:
//       "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg",
//   },
//   {
//     title: "Transform your business",
//     subtitle: "with cutting-edge solutions",
//     image:
//       "https://cdn.pixabay.com/photo/2017/07/31/11/31/laptop-2557468_1280.jpg",
//   },
//   {
//     title: "Empower your team",
//     subtitle: "achieve more together",
//     image:
//       "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
//   },
// ];

// const Header = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
//     );
//   };

//   return (
//     <header className="relative h-screen bg-gray-900 overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
//             index === currentSlide ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <img
//             src={slide.image}
//             alt={slide.title}
//             className="object-cover w-full h-full"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//             <div className="text-center text-white px-4">
//               <h1 className="text-4xl md:text-6xl font-bold mb-4 py-2">
//                 {slide.title}{" "}
//                 <span className="text-[#4CAF4F]">{slide.subtitle}</span>
//               </h1>
//               <button className="bg-[#4CAF4F] text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-[#45a049] transition duration-300">
//                 Register Here
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-[#4CAF4F] transition duration-300"
//       >
//         <FaChevronLeft />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-[#4CAF4F] transition duration-300"
//       >
//         <FaChevronRight />
//       </button>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";

const slides = [
  {
    title: "Lessons from 8 years",
    subtitle: "of building products",
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_1280.jpg",
  },
  {
    title: "Innovate with confidence",
    subtitle: "embrace the future",
    image:
      "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg",
  },
  {
    title: "Transform your business",
    subtitle: "with cutting-edge solutions",
    image:
      "https://cdn.pixabay.com/photo/2017/07/31/11/31/laptop-2557468_1280.jpg",
  },
  {
    title: "Empower your team",
    subtitle: "achieve more together",
    image:
      "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
  },
];

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative h-screen bg-[#F5F7FA] overflow-hidden flex items-center">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full flex items-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-1/2 p-8 text-white flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-xl md:text-3xl font-bold mb-4 py-5 text-[#4D4D4D]">
                {slide.title} <br />
                <span className="text-[#4CAF4F]">{slide.subtitle}</span>
              </h1>
              <button className="bg-[#4CAF4F] text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-[#45a049] transition duration-300">
                Register Here
              </button>
            </div>
          </div>
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover w-1/2 h-full"
          />
        </div>
      ))}
    </header>
  );
};

export default Header;
