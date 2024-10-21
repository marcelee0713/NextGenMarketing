import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaCircleCheck } from "react-icons/fa6";
import { ImDiamonds } from "react-icons/im";

interface props {
  onHome: () => void;
  onProceed: () => void;
  productName: string;
  businessName: string;
  fullAddress: string;
}

export const SuccessModal: React.FC<props> = ({
  businessName,
  fullAddress,
  productName,
  onHome,
  onProceed,
}) => {
  return (
    <div className="absolute inset-0 bg-opacity-80 bg-textColor w-full h-full z-30 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-white rounded-lg px-4 py-5 min-h-[585px] min-w-[350px] w-[390px] gap-[20px] text-textColor">
        <div className="relative">
          <BsFillBoxSeamFill className="text-[#0B1F65]" size={100} />
          <FaCircleCheck
            className="absolute text-primary -right-5 -bottom-3  "
            size={50}
          />

          <ImDiamonds
            className="absolute text-[#DCE4FF] right-2 -top-4  "
            size={20}
          />

          <ImDiamonds
            className="absolute text-[#DCE4FF] -left-6 bottom-5  "
            size={15}
          />

          <ImDiamonds
            className="absolute text-[#DCE4FF] -left-9 bottom-9 "
            size={20}
          />

          <ImDiamonds
            className="absolute text-[#DCE4FF] -right-6 top-10  "
            size={15}
          />
        </div>
        <div className="font-sora font-extrabold text-2xl text-center">
          Success!
        </div>
        <div className="text-center flex-col font-inter">
          <div className="font-medium text-[#ABABAB]">
            Your product will be delivered to:
          </div>
          <div className="font-semibold text-center">{fullAddress}</div>
        </div>
        <div className="text-center flex-col font-inter">
          <div className="font-extrabold text-primary text-2xl">
            {productName}
          </div>
          <div className="font-semibold text-center">{businessName}</div>
        </div>

        <div className="flex flex-col gap-2 w-full text-sm">
          <button
            onClick={onProceed}
            className="flex gap-[6px] items-center justify-center py-3 px-5 font-semibold bg-primary text-white rounded-lg"
          >
            Proceed
          </button>
          <button
            onClick={onHome}
            className="flex gap-[6px] items-center justify-center py-3 px-5 font-semibold border border-[#ABABAB] rounded-lg"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};
