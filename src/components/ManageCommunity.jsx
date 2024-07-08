import React from "react";

const communityData = [
  {
    id: 1,
    logo: "./images/community.png",
    title: "Membership Organizations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    id: 2,
    logo: "./images/community.png",
    title: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    id: 3,
    logo: "./images/community.png",
    title: "Clubs and Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];

const ManageCommunity = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 h-[420px] mx-auto overflow-hidden">
      <h1 className="text-2xl  font-semibold text-[#4D4D4D] text-center mb-12">
        Manage your entire community <br className="hidden md:inline" /> in a
        single system
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {communityData.map((item) => (
          <CommunityCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

const CommunityCard = React.memo(({ logo, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-transform duration-300">
      <div className="bg-[#E8F5E9] p-4 rounded-full mb-4">
        <img
          src={logo}
          alt={title}
          className="h-12 w-12 object-contain"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-semibold text-[#000] mb-3">{title}</h3>
      <p className="text-sm text-[#717171]">{description}</p>
    </div>
  );
});

CommunityCard.displayName = "CommunityCard";

export default ManageCommunity;
