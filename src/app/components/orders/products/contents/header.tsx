import { formatDate } from "@/utils";
import React from "react";

interface props {
  createdAt: Date;
  productName: string;
  orderId: string;
  businessName: string;
}

export const OrderProductHeader: React.FC<props> = ({
  businessName,
  createdAt,
  orderId,
  productName,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between items-center gap-3 font-medium text-xs">
        <div>{formatDate(createdAt)}</div>
        <div>{`Order No. #${orderId}`}</div>
      </div>
      <div className="w-full flex justify-between items-center gap-3">
        <div className="font-sora font-extrabold text-2xl">{productName}</div>
        <div className="text-xl font-semibold">{businessName}</div>
      </div>
    </div>
  );
};
