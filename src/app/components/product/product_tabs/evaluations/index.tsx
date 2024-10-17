import { IProductEvaluation } from "@/interfaces/user/user.product.interface";
import React, { useRef, useState, useEffect } from "react";
import { FaFilter, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { EvaluationBox } from "./box";
import USER_PROFILES from "@/constants/users/profiles";
import USERS from "@/constants/users";
import { PARTNERS_PROFILES } from "@/constants/partners/profiles";
import { PARTNERS } from "@/constants/partners";

interface props {
  evaluations: IProductEvaluation[];
}

export const ProductEvaluations: React.FC<props> = ({ evaluations }) => {
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
        {evaluations ? (
          <div
            ref={scrollRef}
            className="h-full w-full flex gap-5 overflow-x-auto no-scrollbar"
          >
            {evaluations.map((val, index) => {
              let name = "John Doe";
              let email = "johndoe@gmail.com";

              const user = USER_PROFILES[val.reviewerId];
              const partner = PARTNERS_PROFILES[val.reviewerId];

              if (user) {
                const mock = USERS[user.userId];
                const { firstName, middleName, lastName } = user.name;

                name = middleName
                  ? `${firstName} ${middleName} ${lastName}`
                  : `${firstName} ${lastName}`;

                email = mock.email;
              }

              if (partner) {
                const mock = PARTNERS[partner.partnerId];
                name = partner.username;
                email = mock.email;
              }

              return (
                <EvaluationBox
                  key={index}
                  comment={val.comment}
                  email={email}
                  name={name}
                  likesCount={Math.floor(Math.random() * 21)}
                  rating={val.rating}
                />
              );
            })}
          </div>
        ) : (
          <div className="h-full w-full flex items-center justify-between">
            No evaluations yet.
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
