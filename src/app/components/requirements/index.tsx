"use client";
import React, { useState } from "react";
import NavBar from "../nav_bar";
import { GetServicesParams } from "@/interfaces/services/data_access";
import { RequirementTabs } from "./tabs";
import { IoChatbubbles } from "react-icons/io5";
import { RequirementContentHandler } from "./content_handler";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../context";

export const MainRequirementsPage = () => {
  const { setExpandNav } = useGlobalContext();

  const [params, setParams] = useState<GetServicesParams>({
    pagination: {
      skip: 0,
      take: 8,
    },
  });

  const router = useRouter();

  const [tab, setTab] = useState<"DETAILS" | "UPLOAD">("DETAILS");

  return (
    <>
      <NavBar params={params} setParams={setParams} />
      <main className="font-inter flex-1 flex flex-col items-center justify-center text-textColor container mx-auto no-scrollbar overflow-y-auto">
        <div className="flex flex-col bg-white rounded-lg py-3 min-h-[730px] min-w-[480px] w-[675px] gap-[20px]">
          <div className="flex flex-col gap-[2px] px-4">
            <div className="font-bold">Upload Requirements</div>
            <div className="font-medium text-sm text-[#999999]">
              Submitted data will be sent to your advertiser.
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-[12px]">
            <RequirementTabs currentTab={tab} setTab={setTab} />
            <hr />
            <RequirementContentHandler currentTab={tab} />
          </div>

          <hr />

          <div className="flex justify-between items-center text-sm px-4">
            <div className="flex gap-[6px] items-center justify-center py-3 px-5 font-bold border border-[#ABABAB] text-textColor rounded-lg">
              <IoChatbubbles size={18} className="text-[#666666]" />
              Help
            </div>
            <button
              onClick={() => {
                router.push("/order-success");
                setExpandNav(false);
              }}
              className="flex gap-[6px] items-center justify-center py-3 px-5 font-bold bg-primary text-white rounded-lg"
            >
              Apply Changes
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
