import React, { useRef, useEffect } from "react";

const clients = [
  {
    id: 1,
    logo: "chrome://branding/content/about-logo@2x.png",
    alt: "Company 1",
  },
  {
    id: 2,
    logo: "chrome://branding/content/about-logo@2x.png",
    alt: "Company 2",
  },
  {
    id: 3,
    logo: "chrome://branding/content/about-logo@2x.png",
    alt: "Company 3",
  },
  {
    id: 4,
    logo: "chrome://branding/content/about-logo@2x.png",
    alt: "Company 4",
  },
  {
    id: 5,
    logo: "chrome://branding/content/about-logo@2x.png",
    alt: "Company 5",
  },
  {
    id: 6,
    logo: "chrome://branding/content/about-logo@2x.png",
    alt: "Company 6",
  },
];

const OurClients = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationId;

    const animate = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += 1;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-16">
        <h2 className="font-[600] text-[30px] text-center text-[#4D4D4D] mb-4">
          Our Clients
        </h2>
        <p className="text-center text-[16px] font-[400] text-[#717171] mb-8 max-w-2xl mx-auto">
          We've had the pleasure of working with industry-leading companies
        </p>
        <div className="overflow-hidden" aria-label="Client logos carousel">
          <div
            ref={carouselRef}
            className="flex whitespace-nowrap"
            style={{ maxWidth: "70%",margin:"auto" }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 w-2 sm:w-3/12 md:w-3/12 px-2 md:px-4 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="w-[47px] h-[29px] object-contain"
                  loading={index < 6 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
