import {
  ShipmentProgressType,
  ProductShipmentProgress,
} from "@/interfaces/user/user.interface";
import React from "react";
import { FaCircleCheck, FaCircleMinus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

interface props {
  progress: Record<ShipmentProgressType, ProductShipmentProgress>;
}

export const OrderTracker: React.FC<props> = ({ progress }) => {
  const orders: ProductShipmentProgress[] = Object.values(progress).sort(
    (a, b) => a.index - b.index
  );

  return (
    <div className="h-[50px] bg-[#F6F6F6] border border-[#DCDCDC] rounded-md p-2 px-3 flex items-center gap-1">
      {orders.map((val, index) => {
        return (
          <div key={index} className="flex items-center flex-1">
            <div className="flex gap-3 items-center flex-1  w-full justify-center">
              <div className="flex items-center gap-2 flex-shrink-0">
                {val.date ? (
                  <FaCircleCheck className={"text-primary"} size={20} />
                ) : (
                  <FaCircleMinus size={20} className="text-textColor" />
                )}
                <div className="font-semibold  text-[13px]">{val.name}</div>
              </div>
            </div>

            {val.index !== orders.length - 1 && <IoIosArrowForward />}
          </div>
        );
      })}
    </div>
  );
};
