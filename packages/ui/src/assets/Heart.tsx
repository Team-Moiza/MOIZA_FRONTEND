import { MouseEventHandler } from "react";

interface HeartProps {
    fill?: string;
    stroke?: string;
    onClick?: MouseEventHandler<SVGSVGElement>;
}

export const Heart = ({ fill, stroke = "#5A5A5A", onClick }: HeartProps) => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill={fill}
            onClick={onClick}
            xmlns="http://www.w3.org/1600/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.91441 7.73221C1.19908 5.49888 2.03508 2.94621 4.37975 2.19088C5.61308 1.79288 6.97441 2.02755 7.99975 2.79888C8.96975 2.04888 10.3811 1.79555 11.6131 2.19088C13.9577 2.94621 14.7991 5.49888 14.0844 7.73221C12.9711 11.2722 7.99975 13.9989 7.99975 13.9989C7.99975 13.9989 3.06508 11.3135 1.91441 7.73221Z"
                stroke={stroke}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
