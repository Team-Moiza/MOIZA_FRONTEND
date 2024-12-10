import { DropdownMenu } from './DropdownMenu';

type DropdownPropsType = {
  children: React.ReactNode;
  isOpen: boolean;
  items: string[];
  selectedItem?: string;
  onSelect: (item: string) => void;
  limit?: number;
};

export const Dropdown = ({
  children,
  isOpen,
  items,
  selectedItem,
  onSelect,
  limit,
}: DropdownPropsType) => {
  return (
    <div className="relative w-fit z-dropdown">
      {children}
      {isOpen && (
        <DropdownMenu
          limit={limit}
          items={items}
          selectedItem={selectedItem}
          onSelect={onSelect}
        />
      )}
    </div>
  );
};
