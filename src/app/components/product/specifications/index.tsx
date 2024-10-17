import { ProductSpecification } from "@/interfaces/user/user.product.interface";
import React from "react";

interface props {
  specs: ProductSpecification[];
}

export const ProductSpecifications: React.FC<props> = ({ specs }) => {
  return (
    <div className="h-fit flex flex-col gap-[10px] bg-white text-textColor rounded-[8px] py-4 px-6">
      <div className="font-bold">Product Specification</div>

      <table className="w-full text-textColor border border-[#DCDCDC] border-collapse rounded-lg">
        <thead className="text-sm">
          <tr className="text-left">
            <th
              scope="col"
              className="px-6 py-3 text-base text-center border border-[#DCDCDC]"
            >
              Attributes
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-base text-center border border-[#DCDCDC]"
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {specs.map((val, index) => {
            return (
              <tr key={index} className="bg-white">
                <td className="px-6 py-2 border border-[#DCDCDC] font-medium">
                  {val.attribute}
                </td>

                <td className="px-6 py-4 border border-[#DCDCDC] font-medium">
                  {val.value}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
