import { useBoolean, useOutsideClickRef } from "@moija/hooks";
import { Menu } from "@moija/ui";
import { ReactNode } from "react";

interface MenuItem {
  icon: ReactNode;
  label: string;
  onClick: () => void;
}

interface ActionMenuProps {
  items: MenuItem[];
}

export const ActionMenu = ({ items }: ActionMenuProps) => {
  const { boolean: menu, toggle: toggleMenu, setFalse: closeMenu } = useBoolean(false);
  const menuRef = useOutsideClickRef<HTMLDivElement>(closeMenu);

  return (
    <div className="relative">
      <button type="button" onClick={toggleMenu}>
        <Menu color="#9E9E9E" />
      </button>
      {menu && (
        <div className="absolute top-1 flex flex-col w-[144px] right-0 z-30" ref={menuRef} onClick={closeMenu}>
          <div className="relative h-fit">
            <div className="w-full mt-4 h-fit bg-white border-[1px] border-gray-50 rounded-lg left-3 shadow-md absolute z-10 flex flex-col px-4 py-2 pt-2">
              {items.map(({ icon, label, onClick }, index) => (
                <button
                  key={index}
                  className="text-btn1 text-gray-600 cursor-pointer flex items-center w-full gap-3 py-[6px]"
                  onClick={() => {
                    onClick();
                    closeMenu();
                  }}
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
