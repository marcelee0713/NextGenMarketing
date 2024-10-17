import Image from "next/image";
import { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
  autoPlayTime?: number; // optional prop to set the autoplay interval time
  removeDots?: boolean;
  removeButtons?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoPlayTime = 3000,
  removeDots,
  removeButtons,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setTimeout(() => {
      setCurrentIndex(newIndex);
    }, 500); // match transition duration
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setTimeout(() => {
      setCurrentIndex(newIndex);
    }, 500); // match transition duration
  };

  // Automatically transition to the next slide
  useEffect(() => {
    const interval = setInterval(goToNext, autoPlayTime);
    return () => clearInterval(interval); // Clear interval on unmount or when slide changes
  }, [currentIndex, autoPlayTime]);

  return (
    <div className="flex-1 flex flex-col gap-2">
      <div className="relative overflow-hidden flex-1">
        {/* Slides wrapper that translates based on currentIndex */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Sliding effect
        >
          {/* Each image container takes up full width */}
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-[245px] flex-shrink-0"
            >
              <Image
                src={image}
                alt={`Slide ${index}`}
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>

        {!removeButtons && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 hover:bg-opacity-75"
            >
              &#10094;
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 hover:bg-opacity-75"
            >
              &#10095;
            </button>
          </>
        )}
        {/* Previous Button */}
      </div>

      {/* Dots Indicator */}
      {!removeDots && (
        <div className="flex justify-center gap-3 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-primary" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
