import Link from "next/link";
import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { RiImageAddFill } from "react-icons/ri";

export const RequirementUpload = () => {
  return (
    <>
      <div
        className={`flex-1 flex flex-col mx-4 border border-[#ABABAB] border-dashed rounded-[4px] items-center justify-center gap-[20px]`}
      >
        <div className="flex flex-col items-center justify-center gap-[6px] text-center text-sm">
          <RiImageAddFill size={35} />
          <div className="font-semibold">
            Drag and drop asset files to upload
          </div>
          <div className="font-medium text-[#ABABAB]">
            your files will be private until you publish them.
          </div>
        </div>
        <div className="flex items-center justify-center rounded-md px-4 py-2 border border-[#ABABAB] font-semibold cursor-pointer">
          Select Files
        </div>
      </div>
      <div className="flex items-center py-3 px-5 gap-2 bg-[#F5F7FF] text-primary border-[2px] border-primary mx-4 rounded-[4px]">
        <FaFileAlt size={30} />
        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-2 text-sm text-textColor justify-between">
            <div className="font-semibold">sample_video.mp4</div>
            <div className="font-medium text-textColor">10 mins left</div>
          </div>
          <div className="w-full h-1 bg-[#DCE4FF] rounded-lg relative">
            <div className="w-[60%] h-1 bg-primary rounded-lg absolute"></div>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <hr className="mx-4" />
        <div
          style={{ marginInline: "auto" }}
          className="absolute  bg-white left-0 right-0 w-fit -bottom-2 px-4 text-sm font-medium"
        >
          or
        </div>
      </div>
      <div className="relative w-full px-4">
        <div className="border border-[#DCDCDC] rounded-[4px]  w-full font-semibold focus:border-primary focus:border-[2px] outline-none h-[45px] flex gap-2 items-stretch justify-between">
          <div className="flex gap-2 items-center py-3 px-4">
            <IoIosLink className="text-[#999999]" size={15} />
            <div className="font-medium text-textColor text-xs">
              https://www.youtube.com/watch?v=dQw4w9WgXcQ
            </div>
          </div>
          <Link
            href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
            className="font-bold text-xs text-primary border-l border-[#DCDCDC] px-5 flex items-center justify-center"
          >
            Upload
          </Link>
        </div>

        <div className="absolute text-textColor font-medium text-xs bg-white px-1 -top-2 left-7 ">
          {"Import from URL"}
        </div>
      </div>
    </>
  );
};
