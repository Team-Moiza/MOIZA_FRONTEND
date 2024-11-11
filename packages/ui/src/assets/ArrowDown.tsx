import { IconPropsType } from './iconPropsType';

export const ArrowDown = ({ size = 24, color = '#000000' }: IconPropsType) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 8.5L12 15.5L5 8.5"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
