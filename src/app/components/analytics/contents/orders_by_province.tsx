import { ProductAnalyzedData } from "@/interfaces/user/user.product.interface";
import React from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

interface props {
  analyzedData: ProductAnalyzedData;
}

export const OrdersByProvince: React.FC<props> = ({ analyzedData }) => {
  return (
    <div className="flex-1 flex flex-col gap-1 text-xs">
      <div className="flex flex-col">
        <div className="font-bold text-xl">Sales By Region</div>
      </div>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={analyzedData.ordersByProvince}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="province" />
            <YAxis width={30} />
            <Tooltip />
            <Bar dataKey="amountOfSales" fill="#3562FF" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-2 items-center justify-around">
        <div className="flex gap-2 items-center">
          <div className="h-1 w-1 rounded-full bg-[#3562FF]"></div>
          <div className="font-medium">Amount of Sales</div>
        </div>
      </div>
    </div>
  );
};
