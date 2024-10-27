import { GetOrdersParams } from "@/interfaces/orders/product";
import React, { Dispatch, SetStateAction } from "react";

interface props {
  currentTab: "All" | "SERVICE" | "PRODUCT" | "ON-GOING";
  orderParams: GetOrdersParams;
  setOrderParams: Dispatch<SetStateAction<GetOrdersParams>>;
}

export const OrderTabs: React.FC<props> = ({
  currentTab,
  orderParams,
  setOrderParams,
}) => {
  return (
    <div className="flex w-[350px] gap-2 bg-[#ECF0F2] font-bold rounded-md p-2 text-sm h-full">
      <button
        onClick={() => {
          setOrderParams({
            ...orderParams,
            type: undefined,
          });
        }}
        className={`flex-1 py-2 flex items-center justify-center rounded-md ${
          currentTab === "All" && "bg-white text-primary"
        }`}
      >
        All
      </button>
      <button
        onClick={() => {
          setOrderParams({
            ...orderParams,
            type: "SERVICE",
          });
        }}
        className={`flex-1 py-2 flex items-center justify-center rounded-md ${
          currentTab === "SERVICE" && "bg-white text-primary"
        }`}
      >
        Services
      </button>
      <button
        onClick={() => {
          setOrderParams({
            ...orderParams,
            type: "PRODUCT",
          });
        }}
        className={`flex-1 py-2 flex items-center justify-center rounded-md ${
          currentTab === "PRODUCT" && "bg-white text-primary"
        }`}
      >
        Product
      </button>
      <button
        onClick={() => {
          setOrderParams({
            ...orderParams,
            type: "ON-GOING",
          });
        }}
        className={`flex-1 py-2 flex items-center justify-center rounded-md ${
          currentTab === "ON-GOING" && "bg-white text-primary"
        }`}
      >
        On-Going
      </button>
    </div>
  );
};
