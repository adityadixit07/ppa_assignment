import React from "react";
import CountUp from "react-countup";

const achievementsData = [
  {
    id: 1,
    icon: "./images/community.png",
    title: "Members",
    count: 2345355,
  },
  {
    id: 2,
    icon: "./images/community.png",
    title: "Projects",
    count: 46328,
  },
  {
    id: 3,
    icon: "./images/community.png",
    title: "Clients",
    count: 1255,
  },
  {
    id: 4,
    icon: "./images/community.png",
    title: "Awards",
    count: 125,
  },
];

const Achievements = () => {
  return (
    <div className="bg-[#F5F7FA] py-16">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#4D4D4D] mb-4 leading-tight py-2">
              Helping a local{" "}
              <span className="text-[#4CAF4F]">business reinvent itself</span>
            </h1>
            <p className="text-[#18191F] text-base sm:text-lg">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="lg:w-2/3 ml-[5rem]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {achievementsData.map((item) => (
                <StatsCard
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  count={item.count}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ icon, title, count }) => {
  return (
    <div className="flex items-center">
      <img src={icon} alt={title} className="h-12 w-12 object-contain mr-4" />
      <div>
        <span className="block text-2xl font-bold text-[#4D4D4D]">
          <CountUp end={count} duration={2.5} separator="," />
        </span>
        <span className="text-[#717171]">{title}</span>
      </div>
    </div>
  );
};

export default Achievements;