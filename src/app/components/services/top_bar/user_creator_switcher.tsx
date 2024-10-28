import { useGlobalContext } from "../../context";
import { useRouter } from "next/navigation";

export const UserSwitcher = () => {
  const { mode, setMode } = useGlobalContext();
  const router = useRouter();

  return (
    <div
      onClick={() => {
        if (mode === "SERVICES") {
          setMode("PRODUCT");
          router.push("/products");
        } else {
          setMode("SERVICES");
          router.push("/");
        }
      }}
      className="flex h-[55px] bg-[#ECF0F2] text-textColor font-semibold rounded-[35px] cursor-pointer"
    >
      <div
        className={`select-none flex justify-center items-center rounded-3xl p-5 w-24 m-2 -mr-1 ${
          mode === "SERVICES" && "bg-primary text-white"
        }`}
      >
        Services
      </div>
      <div
        className={`select-none flex justify-center items-center rounded-3xl p-5 w-24 m-2 -ml-1 ${
          mode === "PRODUCT" && "bg-primary text-white"
        }`}
      >
        Products
      </div>
    </div>
  );
};
