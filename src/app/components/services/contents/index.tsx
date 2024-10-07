import {
  GetServicesParams,
  IServicesItem,
} from "@/interfaces/services/data_access";
import React, { Dispatch, SetStateAction } from "react";
import { Header } from "./header";
import { MinMaxFilter } from "./filters/min_max";
import { CustomerRating } from "./filters/customer_rating";
import { Filter } from "./filters";
import {
  SERVICES_DELIVERY_TIME_FILTER_ARR,
  SERVICES_PROJECT_QUEUE_FILTER_ARR,
} from "@/constants/services";
import { SwitchPro } from "./filters/switch";
import { SortByAndResults } from "./filters/sort_by";
import { ServiceItems } from "./items";

interface props {
  params: GetServicesParams;
  setParams: Dispatch<SetStateAction<GetServicesParams>>;
  data: IServicesItem[];
  unFilteredLength: number;
}

export const Contents = ({
  params,
  setParams,
  data,
  unFilteredLength,
}: props) => {
  return (
    <div className="flex-1 flex flex-col gap-5 text-textColor">
      <Header category={params.filter?.category} />
      <hr />
      <div className="flex justify-between items-center font-semibold">
        <div className="flex gap-3 items-center">
          <MinMaxFilter params={params} setParams={setParams} />
          <CustomerRating params={params} setParams={setParams} />
          <Filter
            element={params.filter?.projectQueue}
            filterArr={SERVICES_PROJECT_QUEUE_FILTER_ARR}
            textFallback="Project Queue"
            onCancel={() => {
              setParams({
                ...params,
                filter: {
                  ...params.filter,
                  projectQueue: undefined,
                },
              });
            }}
            onPress={(val) => {
              setParams({
                ...params,
                filter: {
                  ...params.filter,
                  projectQueue: val,
                },
              });
            }}
          />
          <Filter
            element={params.filter?.deliveryTime}
            filterArr={SERVICES_DELIVERY_TIME_FILTER_ARR}
            textFallback="Delivery Time"
            onCancel={() => {
              setParams({
                ...params,
                filter: {
                  ...params.filter,
                  deliveryTime: undefined,
                },
              });
            }}
            onPress={(val) => {
              setParams({
                ...params,
                filter: {
                  ...params.filter,
                  deliveryTime: val,
                },
              });
            }}
          />
        </div>
        <SwitchPro params={params} setParams={setParams} />
      </div>
      <SortByAndResults
        dataLength={unFilteredLength}
        params={params}
        setParams={setParams}
      />
      <ServiceItems data={data} />
    </div>
  );
};
