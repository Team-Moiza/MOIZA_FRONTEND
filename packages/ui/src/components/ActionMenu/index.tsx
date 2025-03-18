import { useBoolean, useOutsideClickRef } from "@moija/hooks";
import { ReactNode } from "react";

interface MenuItem {
    icon?: ReactNode;
    label: string;
    onClick?: () => void;
    fontColor?: string;
}

interface ActionMenuProps {
    items: MenuItem[];
    children: ReactNode;
}

export const ActionMenu = ({ items, children }: ActionMenuProps) => {
    const {
        boolean: menu,
        toggle: toggleMenu,
        setFalse: closeMenu,
    } = useBoolean(false);
    const menuRef = useOutsideClickRef<HTMLDivElement>(closeMenu);

    return (
        <div className="relative">
            <button type="button" onClick={toggleMenu}>
                {children}
            </button>
            {menu && (
                <div
                    className="absolute flex flex-col w-[180px] right-0"
                    ref={menuRef}
                    onClick={closeMenu}
                >
                        <div className="w-full h-fit bg-white border border-gray-50 rounded-lg shadow-md absolute z-10 flex flex-col px-4 py-2">
                            {items.map(
                                (
                                    { icon, label, onClick, fontColor },
                                    index
                                ) => (
                                    <button
                                        key={index}
                                        className={`text-p4 cursor-pointer flex items-center w-full gap-3 py-2 ${
                                            fontColor || "text-gray-600"
                                        }`}
                                        onClick={() => {
                                            onClick?.();
                                            closeMenu();
                                        }}
                                    >
                                        {icon}
                                        {label}
                                    </button>
                                )
                            )}
                        </div>
                </div>
            )}
        </div>
    );
};
