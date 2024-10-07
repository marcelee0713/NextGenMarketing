import React from "react";
import { GoHome } from "react-icons/go";

interface props {
  currentCategory?: string;
  currentProfileName?: string;
}

export const BreadCrumbNav = ({
  currentCategory,
  currentProfileName,
}: props) => {
  return (
    <div className="flex gap-2 text-sm text-textColor">
      <GoHome size={20} className="cursor-pointer" />
      <div>/</div>
      <div className="cursor-pointer hover:underline">{currentCategory}</div>
      {currentProfileName && (
        <>
          <div>/</div>
          <div className="cursor-pointer hover:underline">
            {currentProfileName}
          </div>
        </>
      )}
    </div>
  );
};
