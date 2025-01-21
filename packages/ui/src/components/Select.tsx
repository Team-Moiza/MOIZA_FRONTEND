import { ArrowDown } from "./../assets/ArrowDown";
import { Text } from "./Text";

type SelectPropsType = {
  placeholder: string;
  isOpen: boolean;
  onClick: () => void;
  isBig?: boolean;
  value?: string;
  width?: number | string;
};

export const Select = ({ placeholder, value, isBig, width, isOpen, onClick }: SelectPropsType) => {
  return (
    <button
      style={{ width: width + "px", height: isBig ? "60px" : "48px" }}
      className="border border-gray-200 rounded-[8px] flex justify-between items-center px-[20px] outline-none"
      type="button"
      onClick={onClick}
    >
      {value ? (
        <Text className={`text-${isBig ? "p1" : "p5"} text-black cursor-pointer`}>{value}</Text>
      ) : (
        <Text className={`text-${isBig ? "p1" : "p5"} text-gray-400 cursor-pointer`}>{placeholder}</Text>
      )}
      <div className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}>
        <ArrowDown size={24} color="#787878" />
      </div>
    </button>
  );
};
