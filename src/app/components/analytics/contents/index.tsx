import { ProductItemData } from "@/interfaces/user/user.interface";
import { ProductAnalyzedData } from "@/interfaces/user/user.product.interface";
import React from "react";
import { SalesGraph } from "./sales_and_engagement/sales_graph";
import { EngagementGraph } from "./sales_and_engagement/engagement_graph";
import { MarketRating } from "./market_rating";
import { OrdersByProvince } from "./orders_by_province";
import { QualitiesAverageRating } from "./qualities_average_rating";

interface props {
  product: ProductItemData;
  analyzedData: ProductAnalyzedData;
}

export const AnalyticsContent: React.FC<props> = ({ analyzedData }) => {
  return (
    <div className="flex-1 flex flex-col gap-5 text-textColor">
      <div className="flex-1 w-full flex gap-5">
        <div className="flex-[3] flex gap-5">
          <SalesGraph analyzedData={analyzedData} />
          <EngagementGraph analyzedData={analyzedData} />
        </div>
        <MarketRating analyzedData={analyzedData} />
      </div>
      <div className="flex-1 flex gap-5">
        <OrdersByProvince analyzedData={analyzedData} />
        <QualitiesAverageRating analyzedData={analyzedData} />
      </div>
    </div>
  );
};
