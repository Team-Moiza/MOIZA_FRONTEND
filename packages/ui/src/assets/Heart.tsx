import { MouseEventHandler } from "react";

interface HeartProps {
    fill?: string;
    stroke?: string;
    size?: number;
    onClick?: MouseEventHandler<SVGSVGElement>;
}

export const Heart = ({
    fill,
    stroke = "#5A5A5A",
    size = 20,
    onClick,
}: HeartProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 20 20"
            fill={fill}
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.3929 9.66527C1.49873 6.8736 2.54373 3.68277 5.47456 2.7386C7.01623 2.2411 8.7179 2.53443 9.99956 3.4986C11.2121 2.5611 12.9762 2.24443 14.5162 2.7386C17.4471 3.68277 18.4987 6.8736 17.6054 9.66527C16.2137 14.0903 9.99956 17.4986 9.99956 17.4986C9.99956 17.4986 3.83123 14.1419 2.3929 9.66527Z"
                stroke={stroke}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};