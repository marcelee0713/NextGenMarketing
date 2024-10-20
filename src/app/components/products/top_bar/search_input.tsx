import React from "react";

export const SearchInputProducts = () => {
  return (
    <div className="relative  w-[400px]">
      <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
        <svg
          className="w-5 h-5 text-textColorAccent"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        className="block w-full p-4 ps-12 text-sm text-textColorAccent placeholder-textColorAccent rounded-3xl outline-none"
        placeholder="Search freelancers, collections and more"
      />
    </div>
  );
};
