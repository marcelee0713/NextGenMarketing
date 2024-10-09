import {
  ServiceAddOns,
  Package,
} from "@/interfaces/services/services.interface";
import { formatToCurrency } from "@/utils";
import React, { Dispatch, SetStateAction } from "react";
import { PackageIndicator } from "./package_indicator";
import { OtherPackageSection } from "./other_section";
import { AddOnsContainer } from "./add_ons_container";
import { IoChatbubbles } from "react-icons/io5";

interface props {
  addOns: ServiceAddOns[];
  currentPackageStr: string;
  matchedPackage: Package;
  setUnitPrice: Dispatch<SetStateAction<number>>;
  unitPrice: number;
  setModal: Dispatch<SetStateAction<boolean>>;
  receipt: Map<string, number>;
  setReceipt: Dispatch<SetStateAction<Map<string, number>>>;
}

export const OrderOptions: React.FC<props> = ({
  addOns,
  currentPackageStr,
  matchedPackage,
  setUnitPrice,
  unitPrice,
  setModal,
  receipt,
  setReceipt,
}) => {
  return (
    <div className="flex-1 w-full flex flex-col bg-[#F5F7FF] rounded-lg p-3 px-4 gap-[12px]">
      <div className="flex flex-col">
        <div className="font-bold text-textColor">Order Options</div>
        <div className="font-medium text-[#999999] text-sm">
          Customize your order depending on your business needs
        </div>
      </div>
      <hr />
      <PackageIndicator
        currentClass={currentPackageStr}
        edge={matchedPackage.edge}
        price={formatToCurrency(matchedPackage.price)}
      />
      <hr />
      <OtherPackageSection unityPrice={formatToCurrency(unitPrice)} />
      <AddOnsContainer
        addOns={addOns}
        matchedPackage={matchedPackage}
        setUnitPrice={setUnitPrice}
        unitPrice={unitPrice}
        receipt={receipt}
        setReceipt={setReceipt}
      />
      <hr />
      <div className="flex justify-between items-center text-sm">
        <div className="flex gap-[6px] items-center justify-center py-3 px-5 font-bold border border-[#ABABAB] text-textColor rounded-lg">
          <IoChatbubbles size={18} className="text-[#666666]" />
          Help
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setModal(false)}
            className="flex gap-[6px] items-center justify-center py-3 px-5 font-bold border border-[#ABABAB] text-textColor rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={() => {}}
            className="flex gap-[6px] items-center justify-center py-3 px-5 font-bold bg-primary text-white rounded-lg"
          >
            {`Continue (PHP ${formatToCurrency(unitPrice)})`}
          </button>
        </div>
      </div>
    </div>
  );
};
