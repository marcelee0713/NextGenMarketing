import {
  ProductAnalyzedData,
  SalesRechartData,
} from "@/interfaces/user/user.product.interface";
import { formatDateToString } from "@/utils";
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  CartesianGrid,
} from "recharts";

interface props {
  analyzedData: ProductAnalyzedData;
}

export const SalesGraph: React.FC<props> = ({ analyzedData }) => {
  const data: SalesRechartData[] =
    analyzedData.salesAndEngagement.salesAndEngagement.map((val) => {
      const date: string = formatDateToString(val.date);

      return {
        date,
        totalRevenue: val.totalRevenue,
        totalUnitsSold: val.unitsSold,
        totalRevenueByDiscount:
          Math.floor(Math.random() * (30000 - 9000 + 1)) + 9000,
      };
    });

  return (
    <div className="flex-1 text-xs text-textColor flex flex-col gap-1">
      <div className="flex flex-col">
        <div className="font-bold text-xl">Sales</div>
      </div>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis width={30} />
            <Tooltip />
            <Line
              type="linear"
              dataKey="totalRevenue"
              stroke="#3562FF"
              activeDot={{ r: 8 }}
            />
            <Line
              type="linear"
              dataKey="totalRevenueByDiscount"
              stroke="#00BA13"
            />

            <Line type="linear" dataKey="totalUnitsSold" stroke="#EB7D00" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-2 items-center justify-around">
        <div className="flex gap-2 items-center">
          <div className="h-1 w-1 rounded-full bg-[#3562FF]"></div>
          <div className="font-medium">Revenue</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="h-1 w-1 rounded-full bg-[#00BA13]"></div>
          <div className="font-medium">Revenue by Discount</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="h-1 w-1 rounded-full bg-[#EB7D00]"></div>
          <div className="font-medium">Units Sold</div>
        </div>
      </div>
    </div>
  );
};
