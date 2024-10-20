import React, { Dispatch, SetStateAction } from "react";

interface props {
  setModal: Dispatch<SetStateAction<boolean>>;
}

export const AddAddressModal: React.FC<props> = ({ setModal }) => {
  return (
    <div className="absolute inset-0 bg-opacity-80 bg-textColor w-full h-full z-30 flex items-center justify-center">
      <div className="flex  flex-col min-w-[300px] max-w-full min-h-[500px] h-fit bg-white rounded-lg gap-[12px]">
        <div className="flex flex-col pt-3 px-4">
          <div className="font-bold text-textColor">New Address</div>
          <div className="font-medium text-[#999999] text-sm">
            Please provide your complete address, including street, city, and
            postal code for delivery purposes.
          </div>
        </div>

        <hr />

        <div className="flex-1 flex flex-col gap-[24px] px-4 mt-1">
          <div className="flex gap-[12px]">
            <div className="relative w-full flex-1">
              <input
                type="text"
                className="border border-[#DCDCDC] rounded-[4px] py-3 px-4 w-full placeholder:font-medium placeholder:text-xs placeholder:text-[#ABABAB] font-semibold focus:border-primary focus:border-[2px] outline-none"
              />
              <div className="absolute text-textColor font-medium text-xs bg-white px-1 -top-2 left-3 ">
                Full name
              </div>
            </div>
            <div className="relative w-full flex-1">
              <input
                type="number"
                className="border border-[#DCDCDC] rounded-[4px] py-3 px-4 w-full placeholder:font-medium placeholder:text-xs placeholder:text-[#ABABAB] font-semibold focus:border-primary focus:border-[2px] outline-none"
              />
              <div className="absolute text-textColor font-medium text-xs bg-white px-1 -top-2 left-3 ">
                Phone Number
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              className="border border-[#DCDCDC] rounded-[4px] py-3 px-4 w-full placeholder:font-medium placeholder:text-xs placeholder:text-[#ABABAB] font-semibold focus:border-primary focus:border-[2px] outline-none"
            />
            <div className="absolute text-textColor font-medium text-xs bg-white px-1 -top-2 left-3 ">
              Street name, Building, House No.
            </div>
          </div>
          <div className="flex gap-[12px]">
            <div className="relative w-full flex-1">
              <input
                type="text"
                className="border border-[#DCDCDC] rounded-[4px] py-3 px-4 w-full placeholder:font-medium placeholder:text-xs placeholder:text-[#ABABAB] font-semibold focus:border-primary focus:border-[2px] outline-none"
              />
              <div className="absolute text-textColor font-medium text-xs bg-white px-1 -top-2 left-3 ">
                Region
              </div>
            </div>
            <div className="relative w-full flex-1">
              <input
                type=""
                className="border border-[#DCDCDC] rounded-[4px] py-3 px-4 w-full placeholder:font-medium placeholder:text-xs placeholder:text-[#ABABAB] font-semibold focus:border-primary focus:border-[2px] outline-none"
              />
              <div className="absolute text-textColor font-medium text-xs bg-white px-1 -top-2 left-3 ">
                Province
              </div>
            </div>
          </div>
          <div className="flex gap-[12px]">
            <div className="relative w-full flex-1">
              <input
                type="text"
                className="border border-[#DCDCDC] rounded-[4px] py-3 px-4 w-full placeholder:font-medium placeholder:text-xs placeholder:text-[#ABABAB] font-semibold focus:border-primary focus:border-[2px] outline-none"
              />
              <div className="absolute text-textColor font-medium text-xs bg-white px-1 -top-2 left-3 ">
                City
              </div>
            </div>
            <div className="relative w-full flex-1">
              <input
                type="text"
                className="border border-[#DCDCDC] rounded-[4px] py-3 px-4 w-full placeholder:font-medium placeholder:text-xs placeholder:text-[#ABABAB] font-semibold focus:border-primary focus:border-[2px] outline-none"
              />
              <div className="absolute text-textColor font-medium text-xs bg-white px-1 -top-2 left-3 ">
                Barangay
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <input
              type="number"
              className="border border-[#DCDCDC] rounded-[4px] py-3 px-4 w-full placeholder:font-medium placeholder:text-xs placeholder:text-[#ABABAB] font-semibold focus:border-primary focus:border-[2px] outline-none"
            />
            <div className="absolute text-textColor font-medium text-xs bg-white px-1 -top-2 left-3 ">
              Postal Code
            </div>
          </div>
        </div>

        <div className="flex gap-2 justify-between items-center px-4">
          <div className="flex flex-col font-medium text-xs gap-2 ">
            <div className="text-textColor font-medium text-xs bg-white">
              Label as:
            </div>
            <div className="flex gap items-center gap-2">
              <button
                onClick={() => {}}
                className="flex gap-[6px] items-center justify-center py-2 px-3  border border-[#ABABAB] text-textColor rounded-lg"
              >
                Home
              </button>
              <button
                onClick={() => {}}
                className="flex gap-[6px] items-center justify-center py-2 px-3  border border-[#ABABAB] text-textColor rounded-lg"
              >
                Work
              </button>
              <button
                onClick={() => {}}
                className="flex gap-[6px] items-center justify-center py-2 px-3  border border-[#ABABAB] text-textColor rounded-lg"
              >
                Lodging
              </button>
            </div>
          </div>
        </div>

        <hr />

        <div className="flex justify-between items-center text-sm pb-3 px-4">
          <div className="flex font-medium text-xs gap-2 items-center justify-center">
            <div className="h-6 w-6 flex items-center">
              <input
                type="checkbox"
                className="scale-105 border border-[#DCDCDC] rounded-[4px] py-3 px-4 w-full placeholder:font-medium placeholder:text-xs placeholder:text-[#ABABAB] font-semibold focus:border-primary focus:border-[2px] outline-none"
              />
            </div>
            <div className="text-textColor font-medium text-xs bg-white">
              Set as a Default Address
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setModal(false)}
              className="flex gap-[6px] items-center justify-center py-3 px-5 font-bold border border-[#ABABAB] text-textColor rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                //   const parsifiedObj = JSON.stringify(orderSummary);
                //   const obj: OrderSummaryProduct = JSON.parse(parsifiedObj);
                //   console.table(obj);
                //   setExpandNav(false);
                //   router.push(
                //     `/product-payment?summary=${JSON.stringify(orderSummary)}`
                //   );
              }}
              className="flex gap-[6px] items-center justify-center py-3 px-5 font-bold bg-primary text-white rounded-lg"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
