interface BottomArrowProps {
    isOpen?: boolean;
    size?: string;
}

export const BottomArrow = ({ isOpen, size='14' }: BottomArrowProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 14 14"
            fill="none"
            style={{
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s",
            }}
        >
            <path
                d="M11.0833 4.95825L6.99996 9.04159L2.91663 4.95825"
                stroke="#5A5A5A"
                strokeWidth="0.875"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
