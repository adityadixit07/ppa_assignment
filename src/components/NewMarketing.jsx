import React from "react";
import { FaArrowRight } from "react-icons/fa";

const marketingCards = [
  {
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_1280.jpg",
    title: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_1280.jpg",
    title:
      "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_1280.jpg",
    title: "Revamping the Membership Model with Triathlon Australia",
  },
];

const NewMarketing = () => {
  return (
    <div className="py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#4D4D4D] mb-6 py-2">
          Caring is the new Marketing
        </h1>
        <p className="text-[#717171] text-center max-w-2xl mx-auto mb-12">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {marketingCards.map((card, index) => (
            <div key={index} className="relative">
              <div className="h-64 w-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {card.title}
                </h3>
                <button className="text-[#4CAF4F] font-semibold flex items-center hover:underline">
                  Read more <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewMarketing;
