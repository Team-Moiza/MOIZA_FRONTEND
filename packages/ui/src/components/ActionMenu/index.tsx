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
    const { boolean: menu, toggle: toggleMenu, setFalse: closeMenu } = useBoolean(false);
    const menuRef = useOutsideClickRef<HTMLDivElement>(closeMenu);

    return (
        <div className="relative">
            <button type="button" onClick={toggleMenu}>
                {children}
            </button>
            {menu && (
                <div
                    className="absolute right-0 flex flex-col w-[180px]"
                    ref={menuRef}
                    onClick={closeMenu}
                >
                    <div className="relative w-full h-fit bg-white border border-gray-50 rounded-lg shadow-md z-10 flex flex-col">
                        {items.map(({ icon, label, onClick, fontColor }, index) => (
                            <button
                                key={index}
                                className={`
                                    w-full text-left px-4 py-2 text-p4 cursor-pointer
                                    ${fontColor || "text-gray-700"}
                                    hover:bg-[#F7F9FA]
                                `}
                                onClick={() => {
                                    onClick?.();
                                    closeMenu();
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    {icon}
                                    {label}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
