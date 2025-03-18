import { IconPropsType } from "./iconPropsType";

export const Delete = ({ size = 16, color = "#000000" }: IconPropsType) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.8833 6.81213C12.8833 6.81213 12.5213 11.3021 12.3113 13.1935C12.2113 14.0968 11.6533 14.6261 10.7393 14.6428C8.99994 14.6741 7.25861 14.6761 5.51994 14.6395C4.64061 14.6215 4.09194 14.0855 3.99394 13.1981C3.78261 11.2901 3.42261 6.81213 3.42261 6.81213"
                stroke="#5A5A5A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M13.8056 4.65981H2.50024"
                stroke="#5A5A5A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M11.6271 4.6598C11.1038 4.6598 10.6531 4.2898 10.5505 3.77713L10.3885 2.96647C10.2885 2.59247 9.9498 2.3338 9.5638 2.3338H6.7418C6.3558 2.3338 6.01713 2.59247 5.91713 2.96647L5.75513 3.77713C5.65247 4.2898 5.2018 4.6598 4.67847 4.6598"
                stroke="#5A5A5A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
