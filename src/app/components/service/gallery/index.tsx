import React from "react";
import MyCarousel from "./carousel";

interface props {
  username: string;
  images: string[];
}

export const ServiceGallery: React.FC<props> = ({ images, username }) => {
  return (
    <div className="h-fit w-full flex flex-col gap-[10px] bg-white text-textColor rounded-[8px] py-4 px-6">
      <div className="font-bold">{`${username}'s Gallery`}</div>
      <MyCarousel images={images} />
    </div>
  );
};
