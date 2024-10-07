import { GetServicesParams } from "@/interfaces/services/data_access";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface props {
  params: GetServicesParams;
  setParams: Dispatch<SetStateAction<GetServicesParams>>;
}

export const MinMaxFilter = ({ params, setParams }: props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [min, setMin] = useState<string | undefined>();
  const [max, setMax] = useState<string | undefined>();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string | undefined>>
  ) => {
    const value = e.target.value;

    const regex = /^\d*$/;

    if (regex.test(value)) {
      setValue(value);
    }
  };

  const apply = () => {
    setParams({
      ...params,
      filter: {
        ...params.filter,
        priceRange: {
          min: min ? parseInt(min) : undefined,
          max: max ? parseInt(max) : undefined,
        },
      },
    });
  };

  const clear = () => {
    setMin(undefined);
    setMax(undefined);

    setParams({
      ...params,
      filter: {
        ...params.filter,
        priceRange: undefined,
      },
    });
  };

  useEffect(() => {
    const minValue = params.filter?.priceRange?.min
      ? params.filter?.priceRange?.min.toString()
      : undefined;
    const maxValue = params.filter?.priceRange?.max
      ? params.filter?.priceRange?.max.toString()
      : undefined;

    setMin(minValue);
    setMax(maxValue);
  }, [isOpen]);

  return (
    <div className="relative bottom-1 flex flex-col z-10">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="h-[45px] border border-[#ABABAB] pl-5 pr-3 flex justify-between gap-2 items-center rounded-lg cursor-pointer select-none"
      >
        <div>Price Range</div>
        <RiArrowDropDownLine size={30} className="text-textColor" />
      </div>
      {isOpen && (
        <div className="flex flex-col justify-between absolute shadow-nav h-[350px] w-[350px] bg-white top-14 rounded-lg">
          <div className="flex flex-col gap-4  px-5 py-3">
            <div>Price Range</div>

            <div className="flex gap-2 h-[50px] items-center">
              <input
                value={min ?? ""}
                type="number"
                className="border border-[#ABABAB] w-[110px] h-full rounded-lg ps-2 placeholder:font-normal"
                onChange={(e) => handleInputChange(e, setMin)}
                placeholder="PHP min"
              />
              <hr className="flex-1" />
              <input
                value={max ?? ""}
                type="number"
                className="border border-[#ABABAB] w-[110px] h-full rounded-lg ps-2 placeholder:font-normal"
                onChange={(e) => handleInputChange(e, setMax)}
                placeholder="PHP max"
              />
            </div>

            <div className="flex items-center bg-gradient-to-r from-accent h-[120px] w-full rounded-xl px-5 py-3">
              <div className="flex flex-col gap-1">
                <div className="font-bold text-black">Hourly Rates</div>
                <div className="font-normal">
                  Pay on an hourly basis, only on NextGen Pro.{" "}
                  <span className="underline font-bold cursor-pointer">
                    Sign up for free
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center border-t-2 p-5">
            <button onClick={clear}>Clear All</button>

            <button
              onClick={apply}
              className="bg-primary px-4 py-[6px] text-white font-normal rounded-md"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
