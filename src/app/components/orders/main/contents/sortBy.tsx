import { GetOrdersParams } from "@/interfaces/orders/product";
import React, { Dispatch, SetStateAction } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import {
  RiArrowDownLine,
  RiArrowUpDownFill,
  RiArrowUpLine,
} from "react-icons/ri";
import { OrderDropDownFilter } from "./order_dropdown_filter";

interface props {
  orderParams: GetOrdersParams;
  setOrderParams: Dispatch<SetStateAction<GetOrdersParams>>;
}

export const OrderFilters: React.FC<props> = ({
  orderParams,
  setOrderParams,
}) => {
  return (
    <div className="h-[35px] flex gap-1 w-auto">
      <div className="p-2 flex items-center justify-center border border-[#D9D9D9] rounded-[4px] bg-white">
        <HiMagnifyingGlass />
      </div>
      <OrderDropDownFilter
        orderParams={orderParams}
        setOrderParams={setOrderParams}
      />
      <div
        onClick={() => {
          let sortBy: "asc" | "desc" | undefined = orderParams.sortBy;

          if (!orderParams.sortBy) {
            sortBy = "asc";
          }

          if (orderParams.sortBy === "asc") {
            sortBy = "desc";
          }

          if (orderParams.sortBy === "desc") {
            sortBy = undefined;
          }

          setOrderParams({ ...orderParams, sortBy });
        }}
        className="p-2 flex items-center justify-center border border-[#D9D9D9] rounded-[4px] bg-white cursor-pointer"
      >
        {!orderParams.sortBy && <RiArrowUpDownFill />}

        {orderParams.sortBy === "asc" && <RiArrowUpLine />}

        {orderParams.sortBy === "desc" && <RiArrowDownLine />}
      </div>
    </div>
  );
};
