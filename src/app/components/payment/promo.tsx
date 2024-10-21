import { AFFLIATE_CODES } from "@/constants";
import React, { Dispatch, SetStateAction, useState } from "react";

interface props {
  receipt: Map<string, number>;
  setReceipt: Dispatch<SetStateAction<Map<string, number>>>;
  onChange?: Dispatch<SetStateAction<string | null>>;
}

export const PromoCode: React.FC<props> = ({
  receipt,
  setReceipt,
  onChange,
}) => {
  const [value, setValue] = useState("");

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;

    setValue(newValue ?? "");
  };

  const handleOnClick = () => {
    const result = AFFLIATE_CODES[value ?? ""];

    if (onChange) onChange(value ?? null);

    if (!result) {
      const mockReceipt = receipt;
      mockReceipt.delete("Discount");

      setReceipt(new Map(mockReceipt));
      return;
    }

    const mockReceipt = receipt;
    mockReceipt.set("Discount", result.discount);
    setReceipt(new Map(mockReceipt));
  };

  return (
    <div className=" flex flex-col gap-[12px]">
      <div className="flex flex-col border border-[#DCDCDC] rounded-lg py-3 mx-4 gap-3">
        <div className="font-bold text-sm px-4">Enter Promo Code</div>

        <hr />

        <div className="px-4 flex gap-2 w-full h-full">
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            className="border border-[#DCDCDC] rounded-[4px] py-3 px-4 w-full placeholder:font-medium placeholder:text-xs placeholder:text-[#ABABAB] font-semibold focus:border-primary focus:border-[2px] outline-none"
            placeholder="ex. AMB@551NG"
          />
          <button
            onClick={handleOnClick}
            className="flex items-center justify-center h-full w-[90px] text-white bg-primary py-3 px-5 rounded-[4px]"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
