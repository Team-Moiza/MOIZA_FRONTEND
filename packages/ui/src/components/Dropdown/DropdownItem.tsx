type DropdownItemPropsType = {
  children: string;
  isSelected: boolean;
  onSelect: (item: string) => void;
};

export const DropdownItem = ({ children, isSelected, onSelect }: DropdownItemPropsType) => {
  return (
    <button
      className={`w-full h-[44px] px-[20px] text-black text-left rounded-[4px] hover:bg-gray-100 duration-100 ${isSelected ? "bg-gray-100" : ""}`}
      type="button"
      onClick={() => onSelect(children)}
      role="menuitem"
    >
      {children}
    </button>
  );
};
