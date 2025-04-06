import { IconPropsType } from "./iconPropsType";

export const Menu = ({ size = 16, color = "#000000" }: IconPropsType) => {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.99967 2.3334C11.405 2.3334 14.1663 5.09407 14.1663 8.50007C14.1663 11.9054 11.405 14.6667 7.99967 14.6667C4.59367 14.6667 1.83301 11.9054 1.83301 8.50007C1.83301 5.09474 4.59434 2.3334 7.99967 2.3334Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M10.6262 8.50867H10.6322" stroke={color} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7.95338 8.50867H7.95938" stroke={color} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M5.28053 8.50867H5.28653" stroke={color} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};
