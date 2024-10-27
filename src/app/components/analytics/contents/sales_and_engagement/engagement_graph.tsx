import {
  EngagementRechartData,
  ProductAnalyzedData,
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

export const EngagementGraph: React.FC<props> = ({ analyzedData }) => {
  const data: EngagementRechartData[] =
    analyzedData.salesAndEngagement.salesAndEngagement.map((val) => {
      const date: string = formatDateToString(val.date);

      return {
        date,
        addsToCart: val.engagementMetrics.addsToCart,
        favorites: val.engagementMetrics.favorites,
        views: val.engagementMetrics.views,
      };
    });

  return (
    <div className="flex-1 text-xs text-textColor flex flex-col gap-1">
      <div className="flex flex-col">
        <div className="font-bold text-xl">Engagement</div>
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
            <YAxis width={20} />
            <Tooltip />
            <Line
              type="linear"
              dataKey="views"
              stroke="#3562FF"
              activeDot={{ r: 8 }}
            />
            <Line type="linear" dataKey="favorites" stroke="#FF0000" />
            <Line type="linear" dataKey="addsToCart" stroke="#ffa700" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex gap-2 items-center justify-around">
        <div className="flex gap-2 items-center">
          <div className="h-1 w-1 rounded-full bg-[#3562FF]"></div>
          <div className="font-medium">Views</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="h-1 w-1 rounded-full bg-[#FF0000]"></div>
          <div className="font-medium">Favorites</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="h-1 w-1 rounded-full bg-[#ffa700]"></div>
          <div className="font-medium">Added To Carts</div>
        </div>
      </div>
    </div>
  );
};
