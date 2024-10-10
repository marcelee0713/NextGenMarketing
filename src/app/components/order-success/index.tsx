"use client";
import { GetServicesParams } from "@/interfaces/services/data_access";
import React, { useState } from "react";
import NavBar from "../nav_bar";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaCircleCheck } from "react-icons/fa6";
import { ImDiamonds } from "react-icons/im";
import Link from "next/link";

export const MainOrderSuccessPage = () => {
  const [params, setParams] = useState<GetServicesParams>({
    pagination: {
      skip: 0,
      take: 8,
    },
  });

  return (
    <>
      <NavBar params={params} setParams={setParams} />
      <main className="font-inter flex-1 flex flex-col items-center justify-center text-textColor container mx-auto no-scrollbar overflow-y-auto">
        <div className="flex flex-col items-center justify-center bg-white rounded-lg px-4 py-5 min-h-[585px] min-w-[350px] w-[390px] gap-[20px]">
          <div className="relative">
            <BsFillBoxSeamFill className="text-[#0B1F65]" size={100} />
            <FaCircleCheck
              className="absolute text-primary -right-5 -bottom-3  "
              size={50}
            />

            <ImDiamonds
              className="absolute text-[#DCE4FF] right-2 -top-4  "
              size={20}
            />

            <ImDiamonds
              className="absolute text-[#DCE4FF] -left-6 bottom-5  "
              size={15}
            />

            <ImDiamonds
              className="absolute text-[#DCE4FF] -left-9 bottom-9 "
              size={20}
            />

            <ImDiamonds
              className="absolute text-[#DCE4FF] -right-6 top-10  "
              size={15}
            />
          </div>
          <div className="font-sora font-extrabold text-2xl text-center">
            Thank you for choosing NextGen
          </div>
          <div className="text-center flex-col">
            <div className="font-medium text-[#ABABAB]">
              Should we send the order summary to
            </div>
            <div className="font-semibold">johnnydoe93@@gmail.com</div>
          </div>
          <div className="flex flex-col gap-2 w-full text-sm">
            <button
              onClick={() => {}}
              className="flex gap-[6px] items-center justify-center py-3 px-5 font-semibold bg-primary text-white rounded-lg"
            >
              Yes
            </button>
            <button
              onClick={() => {}}
              className="flex gap-[6px] items-center justify-center py-3 px-5 font-semibold border border-[#ABABAB] rounded-lg"
            >
              No
            </button>

            <Link
              href={"/progression"}
              className="text-sm font-semibold text-center underline text-primary"
            >
              See project progression
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
