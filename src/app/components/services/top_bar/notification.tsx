import React from "react";
import { FaBell } from "react-icons/fa";

export const Notification = () => {
  return (
    <div className="w-12 h-12 bg-white rounded-full cursor-pointer">
      <div className="relative flex items-center justify-center w-full h-full">
        <FaBell size={25} className="text-[#9398AD]" />
        <div className="absolute h-2 w-2 bg-primary rounded-full top-3 right-4"></div>
      </div>
    </div>
  );
};
