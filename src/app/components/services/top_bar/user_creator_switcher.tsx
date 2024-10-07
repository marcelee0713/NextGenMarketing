import React, { useState } from "react";

export const UserSwitcher = () => {
  const [isUser, setIsUser] = useState<boolean>(true);

  return (
    <div
      onClick={() => setIsUser(!isUser)}
      className="flex h-[55px] bg-[#ECF0F2] text-textColor font-semibold rounded-[35px] cursor-pointer"
    >
      <div
        className={`select-none flex justify-center items-center rounded-3xl p-5 w-24 m-2 -mr-1 ${
          isUser && "bg-white text-primary"
        }`}
      >
        User
      </div>
      <div
        className={`select-none flex justify-center items-center rounded-3xl p-5 w-24 m-2 -ml-1 ${
          !isUser && "bg-white text-primary"
        }`}
      >
        Creator
      </div>
    </div>
  );
};
