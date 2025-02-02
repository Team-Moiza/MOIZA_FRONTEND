import { IconPropsType } from "./iconPropsType";

export const LinkIcon = ({ size = 24, color = "#000000" }: IconPropsType) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.73054 7.57684L1.88423 10.4231C0.705255 11.6021 0.705255 13.5136 1.88423 14.6926L3.30739 16.1158C4.48637 17.2947 6.39787 17.2947 7.57685 16.1158L10.4232 13.2695M6.86528 11.1348L11.1347 6.86529M7.57684 4.73054L10.4231 1.88424C11.6021 0.705256 13.5136 0.705255 14.6926 1.88423L16.1158 3.30739C17.2947 4.48637 17.2947 6.39787 16.1158 7.57685L13.2695 10.4232"
        stroke={color}
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
