import { DropdownMenu } from './DropdownMenu';

type DropdownPropsType = {
  children: React.ReactNode;
  isOpen: boolean;
  items: string[];
  selectedItem?: string;
  onSelect: (item: string) => void;
};

export const Dropdown = ({
  children,
  isOpen,
  items,
  selectedItem,
  onSelect,
}: DropdownPropsType) => {
  return (
    <div className="relative w-fit">
      {children}
      {isOpen && (
        <DropdownMenu
          items={items}
          selectedItem={selectedItem}
          onSelect={onSelect}
        />
      )}
    </div>
  );
};
