import { GetServicesParams } from "@/interfaces/services/data_access";
import React, { Dispatch, SetStateAction } from "react";
import { useDebouncedCallback } from "use-debounce";

interface props {
  params: GetServicesParams;
  setParams: Dispatch<SetStateAction<GetServicesParams>>;
}

export const SearchInput = ({ params, setParams }: props) => {
  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target.value;

    setParams({
      ...params,
      filter: {
        ...params.filter,
        searchInput: input.trim() === "" ? undefined : input,
      },
    });
  };

  useDebouncedCallback(handleOnInputChange, 500);

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
        autoFocus
        type="text"
        value={params.filter?.searchInput || ""}
        id="default-search"
        className="block w-full p-4 ps-12 text-sm text-textColorAccent placeholder-textColorAccent rounded-3xl outline-none"
        placeholder="Search freelancers, collections and more"
        required
        onChange={handleOnInputChange}
      />
    </div>
  );
};
