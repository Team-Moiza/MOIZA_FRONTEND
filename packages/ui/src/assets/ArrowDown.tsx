import { IconPropsType } from "./iconPropsType.js";

export const ArrowDown = ({ size = 24, color = "#000000" }: IconPropsType) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19 8.5L12 15.5L5 8.5"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
