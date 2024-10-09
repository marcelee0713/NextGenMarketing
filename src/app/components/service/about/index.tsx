import React from "react";

interface props {
  about: string;
}

export const ServiceAbout: React.FC<props> = ({ about }) => {
  return (
    <div className=" flex flex-col gap-[20px] bg-white text-textColor rounded-[8px] py-4 px-6">
      <div className="font-bold">About this Gig</div>
      <div className="font-medium">{about}</div>
      <hr />
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="font-semibold text-sm">Figma</div>
          <div className="font-medium text-xs text-[#999999]">
            Software Tools
          </div>
        </div>

        <div className="flex flex-col">
          <div className="font-semibold text-sm">Business</div>
          <div className="font-medium text-xs text-[#999999]">Website Type</div>
        </div>

        <div className="flex flex-col">
          <div className="font-semibold text-sm">Figma File</div>
          <div className="font-medium text-xs text-[#999999]">
            Deliverables Format
          </div>
        </div>

        <div className="flex flex-col">
          <div className="font-semibold text-sm">New Design</div>
          <div className="font-medium text-xs text-[#999999]">Service Type</div>
        </div>
      </div>
    </div>
  );
};
