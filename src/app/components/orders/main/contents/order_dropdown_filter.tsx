import { GetOrdersParams } from "@/interfaces/orders/product";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { IoFilterOutline } from "react-icons/io5";

interface props {
  orderParams: GetOrdersParams;
  setOrderParams: Dispatch<SetStateAction<GetOrdersParams>>;
}

export const OrderDropDownFilter: React.FC<props> = ({
  orderParams,
  setOrderParams,
}) => {
  const productArr = [
    "ORDER PLACED",
    "PAYMENT CONFIRMED",
    "ORDER SHIPPED OUT",
    "ORDER RECEIVED",
    "ORDER COMPLETED",
  ];

  const serviceArr = ["STARTED", "ON-GOING", "FINISHED", "CANCELLED"];

  const [modal, setModal] = useState(false);
  const [filterArr, setFilterArr] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setModal(false); // Close the modal if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    if (!orderParams.type) {
      return setFilterArr([...productArr, ...serviceArr]);
    }

    if (orderParams.type === "PRODUCT") {
      setFilterArr(productArr);

      if (!productArr.includes(orderParams.projectProgress ?? "")) {
        setOrderParams({
          ...orderParams,
          projectProgress: productArr[0],
        });
      }
    }

    if (orderParams.type === "SERVICE") {
      setFilterArr(serviceArr);

      if (!serviceArr.includes(orderParams.projectProgress ?? "")) {
        setOrderParams({
          ...orderParams,
          projectProgress: serviceArr[0],
        });
      }
    }
  }, [orderParams]);

  const onPress = (val: string) => {
    setOrderParams({ ...orderParams, projectProgress: val });
    setModal(false); // Close the modal after selecting an option
  };

  return (
    <div className="relative flex flex-col">
      <div
        onClick={() => setModal(!modal)}
        className="p-2 flex items-center justify-center border border-[#D9D9D9] rounded-[4px] bg-white relative"
      >
        <IoFilterOutline />
      </div>

      {modal && (
        <div className="flex flex-col justify-between absolute shadow-nav h-fit w-fit bg-white top-9 right-0 rounded-lg z-10 text-sm">
          <ul className={`flex flex-col w-[150px]`}>
            {filterArr.map((val, i) => {
              const selected: boolean =
                filterArr.findIndex(
                  (val) => val === orderParams.projectProgress
                ) === i;

              return (
                <li
                  key={i}
                  onClick={() => onPress(val)}
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
