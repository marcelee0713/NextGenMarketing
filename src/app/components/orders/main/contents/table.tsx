import { OrderItem } from "@/interfaces/orders/product";
import React from "react";
import { OrderTableItem } from "./table_item";

interface props {
  orders: OrderItem[];
}

export const OrderTable: React.FC<props> = ({ orders }) => {
  return (
    <div className="relative font-inter">
      <table className="w-full text-sm text-center">
        <thead className="w-full text-sm text-textColor">
          <tr className="bg-[#F6F6F6]">
            <th scope="col" className="px-6 py-3 font-medium">
              Preview
            </th>
            <th scope="col" className="px-6 py-3 font-medium"></th>
            <th scope="col" className="px-6 py-3 font-medium">
              Name
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Project Progress
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Merchant
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Amount Payable
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((val, index) => (
            <OrderTableItem order={val} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
