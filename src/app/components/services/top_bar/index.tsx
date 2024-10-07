import React, { Dispatch, SetStateAction } from "react";
import { SearchInput } from "./search_input";
import { UserButton } from "./user_button";
import { Notification } from "./notification";
import { UserSwitcher } from "./user_creator_switcher";
import { GetServicesParams } from "@/interfaces/services/data_access";

interface props {
  params: GetServicesParams;
  setParams: Dispatch<SetStateAction<GetServicesParams>>;
}

export const TopBar = ({ params, setParams }: props) => {
  return (
    <div className="flex w-full h-fit justify-between items-center">
      <SearchInput params={params} setParams={setParams} />
      <div className="flex gap-4 items-center ">
        <UserSwitcher />
        <Notification />
        <UserButton />
      </div>
    </div>
  );
};
