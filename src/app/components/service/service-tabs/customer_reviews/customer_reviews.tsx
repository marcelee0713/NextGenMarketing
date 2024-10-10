import { Reviews } from "@/interfaces/services/services.interface";
import React, { useRef, useState, useEffect } from "react";
import { FaFilter, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { ReviewBox } from "./review_box";

interface props {
  reviews: Reviews[];
}

export const CustomerReviews: React.FC<props> = ({ reviews }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkArrowsVisibility = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    checkArrowsVisibility(); // Check initially
    window.addEventListener("resize", checkArrowsVisibility); // Check on resize
    return () => window.removeEventListener("resize", checkArrowsVisibility);
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-2 relative">
      <div className="flex items-center justify-between">
        <div className="font-bold">Customer Reviews</div>
        <div className="flex gap-2 items-center justify-center rounded border border-[#DCDCDC] p-2 px-3">
          <FaFilter />
          <div className="font-semibold text-xs">Filter</div>
        </div>
      </div>

      {/* Scrollable container for reviews */}
      <div className="relative">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg"
          >
            <FaChevronLeft />
          </button>
        )}

        {/* Scrollable reviews */}
        {reviews ? (
          <div
            ref={scrollRef}
            className="h-full w-full flex gap-5 overflow-x-auto no-scrollbar"
            onScroll={checkArrowsVisibility}
          >
            {reviews.map((val, index) => (
              <ReviewBox
                key={index}
                comment={val.comment}
                likesCount={val.likes.length}
                rating={val.rating}
              />
            ))}
          </div>
        ) : (
          <div className="h-full w-full flex items-center justify-between">
            No reviews yet.
          </div>
        )}

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg"
          >
            <FaChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};
