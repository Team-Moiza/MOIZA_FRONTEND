import { IconPropsType } from './iconPropsType';

export const Profile = ({ size = 24, color = '#000000' }: IconPropsType) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.99088 9.45197C4.73477 9.45197 2.80811 9.79308 2.80811 11.1592C2.80811 12.5253 4.72255 12.8786 6.99088 12.8786C9.24699 12.8786 11.1731 12.537 11.1731 11.1714C11.1731 9.80585 9.25922 9.45197 6.99088 9.45197Z"
        fill={color}
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.9907 7.50345C8.47125 7.50345 9.67125 6.3029 9.67125 4.82234C9.67125 3.34178 8.47125 2.14178 6.9907 2.14178C5.51014 2.14178 4.30959 3.34178 4.30959 4.82234C4.30459 6.2979 5.49681 7.49845 6.97181 7.50345H6.9907Z"
        fill={color}
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
