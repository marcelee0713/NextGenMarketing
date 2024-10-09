import {
  GetServicesParams,
  IServicesItem,
} from "@/interfaces/services/data_access";
import { GetServices } from "@/utils/data_access/services";
import React, { useEffect, useState, useRef } from "react";
import { ServiceItem } from "../../services/contents/items/item";
import defaultImage from "../../../../../public/images/default.png";
import defaultPfp from "../../../../../public/images/user (1).png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons

export const ServiceRecommendations = () => {
  const [params] = useState<GetServicesParams>({
    pagination: {
      skip: 0,
      take: 4,
    },
    sortBy: "desc",
  });

  const [data, setData] = useState<IServicesItem[]>([]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Reference for the scroll container

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetServices(params); // Ensure async fetch
      setData(data.items);

      // Delay to ensure DOM is fully updated before checking arrow visibility
      setTimeout(checkArrowsVisibility, 100);
    };

    fetchData();
  }, [params]);

  // Check the scroll container's position to decide arrow visibility
  const checkArrowsVisibility = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;

      // Show or hide arrows based on scroll position
      setShowLeftArrow(scrollLeft > 0); // Show left arrow if not at the start
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth); // Show right arrow if not at the end
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.clientWidth, // Scroll left by the container's width
        behavior: "smooth", // Smooth scroll effect
      });

      // Check arrow visibility after scrolling
      setTimeout(checkArrowsVisibility, 100);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.clientWidth, // Scroll right by the container's width
        behavior: "smooth", // Smooth scroll effect
      });

      // Check arrow visibility after scrolling
      setTimeout(checkArrowsVisibility, 100);
    }
  };

  useEffect(() => {
    checkArrowsVisibility(); // Check initially when component mounts
    window.addEventListener("resize", checkArrowsVisibility); // Check on resize
    return () => window.removeEventListener("resize", checkArrowsVisibility); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col gap-2 max-w-full relative">
      <div className="font-bold">{"Recommended for you"}</div>

      <div className="relative overflow-x-auto overflow-y-hidden gap-2 no-scrollbar">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <FaChevronLeft />
          </button>
        )}

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-2 no-scrollbar"
          onScroll={checkArrowsVisibility} // Trigger arrow visibility on scroll
        >
          {data.map((val) => (
            <div key={val.id}>
              <ServiceItem
                type={val.badge}
                partnerId={val.partnerId}
                id={val.id}
                image={val.banner ?? defaultImage}
                pfp={val.pfp ?? defaultPfp}
                parterUsername={val.username}
                ratePerHour={val.ratePerHour}
                rating={val.rating}
                shortDescription={val.shortDescription}
                brothefuckisthisshit
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <FaChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};
