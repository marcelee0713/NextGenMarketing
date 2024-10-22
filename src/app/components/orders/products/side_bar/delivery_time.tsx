import React from "react";
import { CiClock2 } from "react-icons/ci";

interface props {
  time: string;
}

export const DeliveryTime: React.FC<props> = ({ time }) => {
  return (
    <div className="flex justify-between gap-2 items-center font-bold text-sm px-8 pb-4">
      <div className="flex gap-1 items-center">
        <CiClock2 size={20} />
        <div>Completion Time</div>
      </div>
      <div>{time}</div>
    </div>
  );
};
