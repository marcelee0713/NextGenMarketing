import {
  ServiceAddOns,
  ServicePackages,
} from "@/interfaces/services/services.interface";
import { ServiceClassType } from "@/types/services/services.types";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ServiceAvailablePackages } from "../packages";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { OrderOptions } from "./order_options";
import { OrderSummary } from "@/interfaces/payment";

interface props {
  partnerId: string;
  likes: number;
  pickedClass: ServiceClassType;
  setModal: Dispatch<SetStateAction<boolean>>;
  setClass: Dispatch<SetStateAction<ServiceClassType>>;
  services: ServicePackages;
  addOns: ServiceAddOns[];
  userDetails: {
    username: string;
    email: string;
    pfp: string | StaticImport;
  };
}

export const ServiceModal: React.FC<props> = ({
  partnerId,
  pickedClass,
  services,
  setClass,
  userDetails,
  likes,
  addOns,
  setModal,
}) => {
  const currentPackageStr =
    pickedClass.charAt(0).toUpperCase() + pickedClass.slice(1).toLowerCase();

  const matchedPackage =
    services.packages[
      pickedClass.toLowerCase() as keyof typeof services.packages
    ];

  const [unitPrice, setUnitPrice] = useState(matchedPackage.price);

  const [receipt, setReceipt] = useState<Map<string, number>>(
    new Map().set("class", matchedPackage.price)
  );

  const mockReceipt = new Map(receipt);
  mockReceipt.delete("class");
  const currentAddOns: string[] = Array.from(mockReceipt.keys());

  const orderSummary: OrderSummary = {
    partnerId,
    selectedAddOns: currentAddOns,
    selectedClass: pickedClass,
    serviceId: services.serviceId,
  };

  useEffect(() => {
    let sum = 0;
    for (const entry of Array.from(receipt.entries())) {
      const value = entry[1];

      sum += value;
      setUnitPrice(sum);
    }
  }, [receipt]);

  useEffect(() => {
    setReceipt(new Map(receipt).set("class", matchedPackage.price));
  }, [pickedClass]);

  return (
    <div className="absolute inset-0 bg-opacity-80 bg-textColor w-full h-full z-10 flex items-center justify-center">
      <div className="flex min-w-[990px] max-w-full h-[730px] bg-white rounded-lg">
        <div className="w-[330px]">
          <ServiceAvailablePackages
            currentClass={pickedClass}
            likes={likes}
            packages={services}
            setClass={setClass}
            userDetails={userDetails}
            dreamyBull
          />
        </div>

        <OrderOptions
          addOns={addOns}
          currentPackageStr={currentPackageStr}
          matchedPackage={matchedPackage}
          setUnitPrice={setUnitPrice}
          unitPrice={unitPrice}
          setModal={setModal}
          receipt={receipt}
          setReceipt={setReceipt}
          summary={orderSummary}
        />
      </div>
    </div>
  );
};
