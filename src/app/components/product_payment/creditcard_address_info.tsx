import React, { Dispatch, SetStateAction, useState } from "react";
import { FaCircle, FaRegCircle, FaSquareCheck } from "react-icons/fa6";
import bdoLogo from "../../../../public/images/bdo.png";
import mastercardLogo from "../../../../public/images/mastercard.png";
import ubLogo from "../../../../public/images/ub.png";
import visaLogo from "../../../../public/images/visa.png";
import paypalLogo from "../../../../public/images/paypal.png";
import gcashLogo from "../../../../public/images/gcash.png";
import Image from "next/image";
import { IUserAdress } from "@/interfaces/user/user.interface";
import { AddressOptions } from "./address_option";
import { AddAddressModal } from "./add_address.modal";

interface props {
  addressesList: IUserAdress[];
  addressIndex: number;
  setAddressIndex: Dispatch<SetStateAction<number>>;
}

export const CreditCardAddressInfo: React.FC<props> = ({
  addressesList,
  setAddressIndex,
  addressIndex,
}) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="min-w-[545px] w-full flex flex-col bg-white rounded-lg py-3 gap-[12px] overflow-scroll no-scrollbar">
      <div className="flex flex-col gap-[2px] px-4">
        <div className="font-bold">Payment Details</div>
        <div className="font-medium text-sm text-[#999999]">
          Complete your purchase by providing your payment details.
        </div>
      </div>

      <hr />

      <div className="flex flex-col gap-[12px] h-full">
        <AddressOptions
          addressesList={addressesList}
          setAddressIndex={setAddressIndex}
          addressIndex={addressIndex}
          onAddAddress={() => setModal(true)}
        />

        <div className="flex flex-col border border-[#DCDCDC] rounded-lg py-3  mx-4 gap-3">
          <div className="font-bold text-sm px-4">Payment Method</div>

          <hr />

          <div className="border-[#DCDCDC] rounded-lg gap-2 flex flex-col px-4 ">
            <div className="h-[70px] bg-[#DCE4FF] border-[2px] border-primary rounded-lg flex gap-2 items-center justify-between px-6 flex-shrink-0">
              <div className="flex gap-4 items-center">
                <div className="w-fit h-fit bg-white rounded-full p-[2px] border-[2px] border-primary">
                  <FaCircle className="text-primary" size={10} />
                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-sm">Credit Card</div>
                  <div className="font-medium text-sm">
                    Safe money transfer thru bank
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="relative h-[20px] w-[65px]">
                  <Image
                    src={visaLogo}
                    alt="visa logo"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>

                <Image src={ubLogo} alt="visa logo" width={30} height={20} />

                <Image
                  src={mastercardLogo}
                  alt="visa logo"
                  width={30}
                  height={20}
                />
                <Image src={bdoLogo} alt="visa logo" width={30} height={20} />
              </div>
            </div>
            <div className="h-[70px] border border-[#DCDCDC] rounded-lg flex gap-2 items-center justify-between px-6 flex-shrink-0">
              <div className="flex gap-4 items-center">
                <FaRegCircle className="text-[#ABABAB]" size={20} />
                <div className="flex flex-col">
                  <div className="font-bold text-sm">Online Bank</div>
                  <div className="font-medium text-sm">
                    Safe money transfer thru online
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Image src={gcashLogo} alt="visa logo" width={30} height={20} />
                <div className="relative h-[20px] w-[75px]">
                  <Image
                    src={paypalLogo}
                    alt="visa logo"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="h-[70px] border border-[#DCDCDC] rounded-lg flex gap-2 items-center justify-between px-6 flex-shrink-0">
              <div className="flex gap-4 items-center">
                <FaRegCircle className="text-[#ABABAB]" size={20} />
                <div className="flex flex-col">
                  <div className="font-bold text-sm">COD</div>
                  <div className="font-medium text-sm">
                    Pay it on your address
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-lg py-3 px-4 mx-4 gap-[25px] text-xs">
          <hr />

          <div className="relative w-full">
            <input
              defaultValue={"3749 7157 3875 5128"}
              type="text"
              className="border border-[#DCDCDC] rounded-[4px] py-3 px-4 w-full font-semibold focus:border-primary focus:border-[2px] outline-none"
            />
            <div className="absolute text-textColor font-medium text-xs bg-white px-1 -top-2 left-3 ">
              {"Card Number"}
            </div>
          </div>

          <div className="flex w-full gap-[30px]">
            <div className="relative flex-1">
              <input
                defaultValue={"09/11"}
                type="text"
                className="border border-[#DCDCDC] rounded-[4px] py-3 px-4 w-full placeholder:font-medium placeholder:text-xs placeholder:text-[#ABABAB] font-semibold focus:border-primary focus:border-[2px] outline-none"
                placeholder="MM / YY"
              />
              <div className="absolute text-textColor font-medium text-xs bg-white px-1 -top-2 left-3">
                {"Expiration Date"}
              </div>
            </div>
            <div className="relative flex-1">
              <input
                defaultValue={"025"}
                type="text"
                className="border border-[#DCDCDC] rounded-[4px] py-3 px-4 w-full placeholder:font-medium placeholder:text-xs placeholder:text-[#ABABAB] font-semibold focus:border-primary focus:border-[2px] outline-none"
                placeholder="123"
              />
              <div className="absolute text-textColor font-medium text-xs bg-white px-1 -top-2 left-3">
                {"CVV"}
              </div>
            </div>
          </div>

          <div className="flex flex-col relative w-full gap-2">
            <input
              defaultValue={"John Doe"}
              type="text"
              className="border border-[#DCDCDC] rounded-[4px] py-3 px-4 w-full font-semibold focus:border-primary focus:border-[2px] outline-none"
            />
            <div className="absolute text-textColor font-medium text-xs bg-white px-1 -top-2 left-3">
              {"Account Name"}
            </div>
            <div className="font-medium text-[#ABABAB] ml-[12px]">
              As written on your card
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="px-8 flex gap-[6px] items-center">
        <FaSquareCheck className="text-primary" size={15} />

        <div className="font-medium text-xs">
          Save this card for future payments
        </div>
      </div>

      {modal && <AddAddressModal setModal={setModal} />}
    </div>
  );
};
