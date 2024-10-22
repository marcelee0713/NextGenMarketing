import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface props {
  element?: string;
  setElement: Dispatch<SetStateAction<string>>;
  filterArr: string[];
  textFallback?: string;
  onSelect: (index: number) => void;
  disabled?: boolean;
}

export const RateProductFilter = ({
  element,
  filterArr,
  textFallback,
  setElement,
  onSelect,
  disabled,
}: props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // Close the modal if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef} className={"relative bottom-1 flex flex-col"}>
      <div
        onClick={() => {
          if (disabled) {
            return setIsOpen(false);
          }

          setIsOpen(!isOpen);
        }}
        className={`h-fit w-fit flex gap-2 items-center cursor-pointer select-none ${
          disabled && "cursor-not-allowed"
        }`}
      >
        <div>{element ? element : textFallback}</div>
        <RiArrowDropDownLine size={30} className="text-textColor" />
      </div>

      {isOpen && (
        <div className="flex flex-col justify-between absolute shadow-nav h-fit w-fit bg-white top-9 rounded-lg z-10">
          <ul className={`flex flex-col w-full`}>
            {filterArr.map((val, i) => {
              const selected: boolean =
                filterArr.findIndex((val) => val === element) === i;

              return (
                <li
                  key={i}
                  onClick={() => {
                    setElement(val);
                    onSelect(i);
                    setIsOpen(false); // Close the modal after selecting an option
                  }}
                  className={`hover:bg-secondary hover:text-primary rounded-sm cursor-pointer px-3 py-2 ${
                    selected ? "bg-secondary text-primary" : ""
                  }`}
                >
                  {val}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
