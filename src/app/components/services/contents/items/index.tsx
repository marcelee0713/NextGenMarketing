import React from "react";
import defaultImage from "../../../../../../public/images/default.png";
import defaultPfp from "../../../../../../public/images/user (1).png";
import { ServiceItem } from "./item";
import { IServicesItem } from "@/interfaces/services/data_access";

interface props {
  data: IServicesItem[];
}

//TODO: Check your to-do tree
export const ServiceItems = ({ data }: props) => {
  return (
    <div className="flex-1 grid grid-cols-myGridTemplate gap-[20px] text-sm ">
      {data.map((val) => (
        <ServiceItem
          type={val.badge}
          partnerId={val.partnerId}
          id={val.id}
          image={val.banner ?? defaultImage}
          pfp={val.pfp ?? defaultPfp}
          parterUsername={val.username}
          ratePerHour={val.ratePerHour}
          rating={val.rating}
          shortDescription={val.shortDescription}
          key={val.id}
        />
      ))}
    </div>
  );
};
