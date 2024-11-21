import { IconPropsType } from './iconPropsType';

export const Search = ({ size = 24, color = '#000000' }: IconPropsType) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="9.80589"
        cy="9.80547"
        r="7.49047"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.0156 15.4042L17.9523 18.3333"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
