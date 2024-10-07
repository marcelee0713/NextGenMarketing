import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface props {
  element?: string;
  filterArr: string[];
  onPress: (type?: string) => void;
  onCancel: () => void;
  textFallback?: string;
}

export const Filter = ({
  element,
  filterArr,
  textFallback,
  onPress,
  onCancel,
}: props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(element);

  useEffect(() => {
    setValue(element);
  }, [isOpen]);

  return (
    <div className="relative bottom-1 flex flex-col z-10">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="h-[45px] border border-[#ABABAB] pl-5 pr-3 flex justify-between gap-2 items-center rounded-lg cursor-pointer select-none"
      >
        <div>{element ? `${textFallback}: ${element}` : textFallback}</div>
        <RiArrowDropDownLine size={30} className="text-textColor" />
      </div>

      {isOpen && (
        <div className="flex flex-col justify-between absolute shadow-nav h-fit w-[300px] bg-white top-14 rounded-lg">
          <div className="flex flex-col gap-4 px-5 py-3">
            <div>{textFallback}</div>

            <ul className={`flex flex-col gap-3 w-full`}>
              {filterArr.map((val, i) => {
                const selected: boolean =
                  filterArr.findIndex((val) => val === value) === i;

                return (
                  <li
                    key={i}
                    onClick={() => {
                      setValue(val);
                    }}
                    className={`hover:bg-secondary hover:text-primary rounded-sm px-1 cursor-pointer ${
                      selected ? "bg-secondary text-primary" : ""
                    }`}
                  >
                    {val}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex justify-between items-center border-t-2 p-5">
            <button
              onClick={() => {
                onCancel();
                setValue(undefined);
              }}
            >
              Clear
            </button>

            <button
              onClick={() => onPress(value)}
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
