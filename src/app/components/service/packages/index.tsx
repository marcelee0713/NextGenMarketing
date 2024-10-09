import { ServicePackages } from "@/interfaces/services/services.interface";
import { ServiceClassType } from "@/types/services/services.types";
import React, { Dispatch, SetStateAction } from "react";
import { CiLock } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { ButtonPackages } from "./button_packages";
import { FaArrowRightLong } from "react-icons/fa6";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { MdEmail } from "react-icons/md";

interface props {
  packages: ServicePackages;
  likes: number;
  currentClass: ServiceClassType;
  setClass: Dispatch<SetStateAction<ServiceClassType>>;
  dreamyBull?: boolean;
  userDetails?: {
    username: string;
    email: string;
    pfp: string | StaticImport;
  };
  setModal?: Dispatch<SetStateAction<boolean>>;
}

export const ServiceAvailablePackages: React.FC<props> = ({
  likes,
  packages,
  currentClass,
  setClass,
  dreamyBull,
  userDetails,
  setModal,
}) => {
  return (
    <div className="sticky z-10 top-0 flex flex-col gap-[12px] flex-shrink-0">
      <div className="w-full min-h-[680px] h-fit flex flex-col gap-4 bg-white rounded-lg p-3 px-4">
        <div className="flex flex-col gap-[2px]">
          <div className="flex justify-between items-center gap-2">
            <div className="font-bold text-textColor">Available Package</div>
            <div className="rounded-[4px] p-2 bg-[#DCE4FF] flex gap-2">
              <FaHeart className="text-[#0B1F65]" size={15} />
              <div className="text-xs text-[#0B1F65] font-semibold">
                {likes}
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center text-[#999999] text-sm">
            <CiLock />
            <div className="font-medium">All payments protected</div>
          </div>
        </div>
        <hr />
        {userDetails && (
          <div className="flex gap-2 items-center text-textColor">
            <Image
              src={userDetails.pfp}
              alt="pfp"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="flex flex-col gap-[2px]">
              <div className="font-bold">{userDetails.username}</div>
              <div className="flex gap-1 items-center">
                <MdEmail size={15} />
                <div className="font-medium text-sm">{userDetails.email}</div>
              </div>
            </div>
          </div>
        )}
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex flex-col gap-3 text-textColor">
            <ButtonPackages
              isSelected={currentClass === "BASIC"}
              onPress={() => {
                setClass("BASIC");
              }}
              packages={packages.packages.basic}
            />
            <ButtonPackages
              isSelected={currentClass === "STANDARD"}
              onPress={() => {
                setClass("STANDARD");
              }}
              packages={packages.packages.standard}
            />
            <ButtonPackages
              isSelected={currentClass === "PREMIUM"}
              onPress={() => {
                setClass("PREMIUM");
              }}
              packages={packages.packages.premium}
            />
          </div>
          <div className="text-textColor text-sm self-center font-medium">
            Pricing not appropriate?{" "}
            <span className="text-primary font-semibold">Let us know</span>
          </div>
        </div>
        {!dreamyBull && (
          <div className="flex flex-col gap-2 font-semibold">
            <button
              onClick={() => {
                setModal && setModal(true);
              }}
              className="flex gap-2 bg-primary text-white rounded-lg py-4 items-center justify-center relative"
            >
              <div>Proceed</div>
              <FaArrowRightLong className="absolute right-10" />
            </button>
            <button className="flex gap-2 border border-[#DCDCDC] text-textColor rounded-lg py-4 items-center justify-center">
              <div>Contact me</div>
            </button>
          </div>
        )}
      </div>
      {!dreamyBull && (
        <div className="w-full min-h-[95px] flex flex-col gap-3 p-3 px-4 bg-white rounded-lg">
          <div className="font-bold text-textColor">Share Profile</div>
          <div className="flex gap-2">
            <div className="border text-textColor border-[#DCDCDC] rounded-[4px] px-3 py-2 font-semibold flex-1">
              https://www.necks-gin.com/
            </div>
            <button className="rounded-[4px] px-4 py-2 font-semibold text-primary bg-[#F5F7FF]">
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
