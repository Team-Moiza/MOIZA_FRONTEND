interface ButtonPropsType {
    children: string;
    type?: "default" | "white" | "special";
    isDisabled?: boolean;
    width?: number | string;
    onClick?: () => void | Promise<void>;
}

export const Button = ({
    type = "default",
    isDisabled = false,
    width = 136,
    children,
    onClick,
}: ButtonPropsType) => {
    const styleGenerator = () => {
        switch (type) {
            case "white":
                return "bg-white border border-gray-200";
            case "special":
                return "";
            case "default":
            default:
                return "bg-primary-500";
        }
    };

    const textGenerator = () => {
        switch (type) {
            case "white":
                return "text-black";
            case "special":
                return "text-primary-500";
            case "default":
            default:
                return "text-white";
        }
    };

    return (
        <button
            style={{ width: typeof width === "number" ? `${width}px` : width }}
            className={`h-[44px] rounded-[8px] ${styleGenerator()}`}
            disabled={isDisabled}
            onClick={onClick}
        >
            <div className={`text-p2 ${textGenerator()}`}>{children}</div>
        </button>
    );
};
