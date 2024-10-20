import { IUserAdress } from "@/interfaces/user/user.interface";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

interface props {
  addressesList: IUserAdress[];
  addressIndex: number;
  setAddressIndex: Dispatch<SetStateAction<number>>;
  onAddAddress: () => void;
}

export const AddressOptions: React.FC<props> = ({
  addressesList,
  addressIndex,
  setAddressIndex,
  onAddAddress,
}) => {
  const [expand, setExpand] = useState(false);

  const houseNo = addressesList[addressIndex].fullAddress.houseNoStreetNo;
  const barangay = addressesList[addressIndex].fullAddress.barangay;
  const city = addressesList[addressIndex].fullAddress.city;
  const province = addressesList[addressIndex].fullAddress.province;
  const region = addressesList[addressIndex].fullAddress.region;

  const currentAddress = `${houseNo}, ${barangay}, ${city}, ${province}, ${region}`;

  return (
    <div className="flex flex-col px-4">
      <div
        className={`flex items-center justify-between bg-primary rounded-t-md p-3 text-white`}
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center p-3 bg-white text-[#0B1F65] rounded-md">
            <FaLocationDot size={25} />
          </div>
          <div className="flex flex-col">
            <div className="font-bold">{currentAddress}</div>
          </div>
        </div>
        <div className="flex text-[#DCDCDC] font-medium bottom-5 text-xs">{`Address ${
          addressIndex + 1
        }`}</div>
      </div>
      <div className="border border-[#DCDCDC] rounded-b-md py-3 px-4">
        <div className="relative h-full w-full flex flex-col gap-4 items-start bg-[#F5F7FF] rounded-[4px] py-3 px-5">
          <button
            onClick={() => setExpand(!expand)}
            className="flex items-center justify-between w-full"
          >
            <div className="font-semibold text-sm">{"Change Address"}</div>
            <IoIosArrowDown />
          </button>

          {expand && (
            <div className="absolute flex flex-col gap-4 bg-[#F5F7FF] w-full top-14 left-0 py-3 rounded-[4px] shadow-nav z-20">
              {addressesList.length !== 0 && (
                <>
                  <div className="font-semibold text-sm px-4">
                    {"Select your address or add a new one"}
                  </div>

                  <ul className="font-semibold text-sm px-5 list-disc list-inside flex flex-col gap-1 items-start">
                    {addressesList.map((val, index) => {
                      const houseNo = val.fullAddress.houseNoStreetNo;
                      const barangay = val.fullAddress.barangay;
                      const city = val.fullAddress.city;
                      const province = val.fullAddress.province;
                      const region = val.fullAddress.region;

                      const fullAddress = `${houseNo}, ${barangay}, ${city}, ${province}, ${region}`;

                      return (
                        <div
                          onClick={() => {
                            setAddressIndex(index);
                          }}
                          className={`text-xs ${
                            addressIndex === index
                              ? "font-bold text-primary"
                              : "font-medium"
                          } list-item cursor-pointer`}
                          key={index}
                        >
                          {`Address ${index + 1}`}
                          <div className="text-[#ABABAB] ml-4 text-xs flex gap-1 items-center font-semibold">
                            {fullAddress}
                          </div>
                        </div>
                      );
                    })}
                  </ul>
                  <div className="px-5">
                    <button
                      onClick={onAddAddress}
                      className="flex items-center justify-center h-[45px] w-full  text-white bg-primary  rounded-[4px] font-bold text-sm"
                    >
                      {"+ Add"}
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
