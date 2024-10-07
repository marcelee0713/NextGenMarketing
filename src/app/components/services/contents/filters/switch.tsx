import { GetServicesParams } from "@/interfaces/services/data_access";
import React, { Dispatch, SetStateAction } from "react";
import Switch from "react-switch";

interface props {
  params: GetServicesParams;
  setParams: Dispatch<SetStateAction<GetServicesParams>>;
}

export const SwitchPro = ({ params, setParams }: props) => {
  const handleChange = (val: boolean) => {
    setParams({
      ...params,
      filter: {
        ...params.filter,
        isPro: val,
      },
    });
  };

  return (
    <div className="flex gap-3 items-center justify-center">
      <Switch
        onChange={handleChange}
        checked={params.filter?.isPro ?? false}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor="#3562ff"
        height={25}
        handleDiameter={19}
      />
      <div>Pro Services</div>
    </div>
  );
};
