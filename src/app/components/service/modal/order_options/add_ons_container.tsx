import {
  ServiceAddOns,
  Package,
} from "@/interfaces/services/services.interface";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FaCircleCheck, FaRegCircle } from "react-icons/fa6";
import { AddOnItem } from "./add_on_item";

interface props {
  addOns: ServiceAddOns[];
  matchedPackage: Package;
  setUnitPrice: Dispatch<SetStateAction<number>>;
  unitPrice: number;
  receipt: Map<string, number>;
  setReceipt: Dispatch<SetStateAction<Map<string, number>>>;
}

export const AddOnsContainer: React.FC<props> = ({
  addOns,
  receipt,
  setReceipt,
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="min-h-[285px] flex-1 flex flex-col border border-[#DCDCDC] rounded-lg py-3 gap-3">
      <div className="flex gap-2 items-center justify-between px-4">
        <div className="font-bold text-sm text-textColor">
          Upgrade your order with these add ons
        </div>
        <button
          onClick={() => {
            const value = !checked;

            setChecked(value);

            if (value) {
              const mockMap = new Map(receipt);

              for (let index = 0; index < addOns.length; index++) {
                const element = addOns[index];

                mockMap.set(`${index.toString()}`, element.price);
              }

              setReceipt(mockMap);
            } else {
              const mockMap = new Map(receipt);

              for (let index = 0; index < addOns.length; index++) {
                mockMap.delete(`${index.toString()}`);
              }

              setReceipt(mockMap);
            }
          }}
        >
          {checked ? (
            <FaCircleCheck className="text-primary" size={20} />
          ) : (
            <FaRegCircle className="text-[#ABABAB]" size={20} />
          )}
        </button>
      </div>
      <hr />
      <div className="flex flex-col overflow-y-scroll px-4 gap-2 stylish-y-scroll">
        {addOns.map((val, index) => {
          return (
            <AddOnItem
              index={index.toString()}
              description={val.description}
              durationTime={val.durationTime}
              header={val.header}
              price={val.price}
              receipt={receipt}
              setChecked={setChecked}
              setReceipt={setReceipt}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
