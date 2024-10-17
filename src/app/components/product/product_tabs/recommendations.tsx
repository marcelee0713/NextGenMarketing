import React, { useEffect, useState, useRef } from "react";
import defaultImage from "../../../../../public/images/default.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons
import { GetProductsParams } from "@/interfaces/user/user.interface";
import { IProduct } from "@/interfaces/user/user.product.interface";
import { GetProducts } from "@/utils/data_access/users";
import Image from "next/image";
import { formatToCurrency } from "@/utils";
import Link from "next/link";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export const ProductRecommendations = () => {
  const [params] = useState<GetProductsParams>({
    pagination: {
      skip: 0,
      take: 4,
    },
    sortBy: "desc",
  });

  const [data, setData] = useState<IProduct[]>([]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Reference for the scroll container

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetProducts(params); // Ensure async fetch
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
            <Link
              href={`/products/${val.ownerId}/${val.productId}`}
              className="flex flex-col gap-[2px] h-[260px] bg-white rounded-lg flex-shrink-0 min-w-[405px]"
              key={val.productId}
            >
              <div className="relative h-[185px] w-full">
                <Image
                  src={val.coverImage ?? defaultImage}
                  alt="Image"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="flex flex-col w-full py-2 px-3 ">
                <div className="flex items-center justify-between text-textColor font-semibold">
                  <div>{val.name}</div>
                  <div>PHP {formatToCurrency(val.price)}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 py-2 px-3 ">
                {val.tags.map((val, index) => (
                  <div
                    key={index}
                    className="flex p-2 gap-2 border border-[#DCDCDC] rounded-md"
                  >
                    <RiVerifiedBadgeFill className="text-primary" size={15} />
                    <div className="font-medium text-xs text-textColor">
                      {val}
                    </div>
                  </div>
                ))}
              </div>
            </Link>
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
