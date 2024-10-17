import { IProduct } from "@/interfaces/user/user.product.interface";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import defaultImage from "../../../../../public/images/default.png";
import { FeaturedItem } from "./item";
import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../../context";

interface props {
  products: IProduct[];
}

export const FeaturedProducts: React.FC<props> = ({ products }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]); // Store refs for each item
  const [currentIndex, setCurrentIndex] = useState(0); // Track the currently visible item
  const { expandNav } = useGlobalContext();
  const [isManualScroll, setIsManualScroll] = useState(false); // Detect if user manually interacted

  // Scroll to the previous item
  const scrollLeft = () => {
    if (currentIndex === 0) {
      setIsManualScroll(true); // User manual interaction detected
      setCurrentIndex(products.length - 1);
      itemRefs.current[products.length - 1]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }

    if (currentIndex > 0) {
      setIsManualScroll(true); // User manual interaction detected
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      itemRefs.current[newIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  // Scroll to the next item
  const scrollRight = () => {
    if (currentIndex === products.length - 1) {
      setIsManualScroll(true); // User manual interaction detected
      setCurrentIndex(0);
      itemRefs.current[0]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });

      return;
    }

    if (currentIndex < products.length - 1) {
      setIsManualScroll(true); // User manual interaction detected
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      itemRefs.current[newIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  // Handle automatic scrolling
  useEffect(() => {
    if (!isManualScroll) {
      const interval = setInterval(() => {
        scrollRight();
      }, 3000); // Auto-scroll every 3 seconds
      return () => clearInterval(interval);
    }
  }, [currentIndex, isManualScroll]);

  // Resume auto-scroll after user stops interacting
  useEffect(() => {
    if (isManualScroll) {
      const timeout = setTimeout(() => {
        setIsManualScroll(false); // Resume auto-scroll after 5 seconds of inactivity
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [isManualScroll]);

  useEffect(() => {
    itemRefs.current[currentIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, [expandNav]);

  return (
    <div className="flex flex-col gap-[15px] w-full h-[450px]">
      <div className="font-sora font-bold text-2xl text-textColor">
        Featured and Recommendations
      </div>
      <div className="flex-1 flex items-center gap-[15px] text-textColor">
        <button
          onClick={scrollLeft}
          className="flex flex-col h-[125px] items-center justify-center px-4 py-2 bg-white rounded-lg shadow-featuredButton"
        >
          <IoIosArrowBack size={30} />
        </button>
        <div className="flex-1 relative flex h-full overflow-x-auto no-scrollbar">
          <div className="flex absolute z-20 w-full bottom-0 h-auto">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsManualScroll(true); // Pause auto-scroll when user interacts
                  itemRefs.current[index]?.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "start",
                  });
                }}
                className={`py-[3.5px] flex-1 ${
                  index === currentIndex ? "bg-primary" : "bg-[#D3DAE4]"
                } ${index === 0 && "rounded-bl-lg"} ${
                  index === products.length - 1 && "rounded-br-lg"
                }`}
              />
            ))}
          </div>
          <div
            ref={scrollRef}
            className="flex flex-1 relative h-full overflow-x-auto no-scrollbar "
          >
            {products.map((val, index) => (
              <FeaturedItem
                key={val.productId}
                ref={(el) => {
                  itemRefs.current[index] = el; // Store the ref for each item
                }}
                coverImage={val.coverImage ?? defaultImage}
                images={val.images}
                price={val.price}
                productIntention={val.productIntention}
                productName={val.name}
                route={`/products/${val.ownerId}/${val.productId}`}
                tags={val.tags}
              />
            ))}
          </div>
        </div>
        <button
          onClick={scrollRight}
          className="flex flex-col h-[125px] items-center justify-center px-4 py-2 bg-white rounded-lg shadow-featuredButton"
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>
    </div>
  );
};
