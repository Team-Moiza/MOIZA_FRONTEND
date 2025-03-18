import { DropdownItem } from "./DropdownItem";

type DropdownMenuPropsType = {
  items: string[];
  selectedItem?: string;
  onSelect: (item: string) => void;
  limit?: number;
};

export const DropdownMenu = ({ items, selectedItem, onSelect, limit }: DropdownMenuPropsType) => {
  return (
    <div className={`w-full absolute z-10 mt-[8px] p-[16px] bg-white border border-gray-200 rounded-[8px]`}>
      <div role="menu" style={{ height: limit ? limit * 44 + "px" : "none" }} className="overflow-auto">
        {items.map((item, index) => (
          <DropdownItem key={`${item}-${index}`} isSelected={item === selectedItem} onSelect={onSelect}>
            {item}
          </DropdownItem>
        ))}
      </div>
    </div>
  );
};
