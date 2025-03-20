interface RightArrowProps {
    color?: string;
    size?:string;
}

export const RightArrow = ({ color = "#9E9E9E", size="18" }: RightArrowProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.875 3.75L12.125 9L6.875 14.25"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
