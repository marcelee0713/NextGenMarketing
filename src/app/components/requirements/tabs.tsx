import React, { Dispatch, SetStateAction } from "react";

interface props {
  currentTab: "DETAILS" | "UPLOAD";
  setTab: Dispatch<SetStateAction<"DETAILS" | "UPLOAD">>;
}

export const RequirementTabs: React.FC<props> = ({ currentTab, setTab }) => {
  return (
    <div className="flex px-5 font-semibold text-sm gap-10">
      <button
        onClick={() => setTab("DETAILS")}
        className={`relative ${currentTab === "DETAILS" && "text-primary"}`}
      >
        <div>Product Details</div>
        {currentTab === "DETAILS" && (
          <div className="absolute bg-primary h-1 w-full rounded-full top-7"></div>
        )}
      </button>
      <button
        onClick={() => setTab("UPLOAD")}
        className={`relative ${currentTab === "UPLOAD" && "text-primary"}`}
      >
        Upload Files
        {currentTab === "UPLOAD" && (
          <div className="absolute bg-primary h-1 w-full rounded-full top-7"></div>
        )}
      </button>
    </div>
  );
};
