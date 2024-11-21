import { DropdownItem } from './DropdownItem';

type DropdownMenuPropsType = {
  items: string[];
  selectedItem?: string;
  onSelect: (item: string) => void;
};

export const DropdownMenu = ({
  items,
  selectedItem,
  onSelect,
}: DropdownMenuPropsType) => {
  return (
    <div className="w-full absolute z-dropdown mt-[8px] p-[16px] bg-white border border-gray-100 rounded-[8px]">
      <div role="menu">
        {items.map((item, index) => (
          <DropdownItem
            key={`${item}-${index}`}
            isSelected={item === selectedItem}
            onSelect={onSelect}>
            {item}
          </DropdownItem>
        ))}
      </div>
    </div>
  );
};
