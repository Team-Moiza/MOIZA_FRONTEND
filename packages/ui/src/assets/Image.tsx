import { IconPropsType } from './iconPropsType';

export const Image = ({ size = 24, color = '#000000' }: IconPropsType) => {
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
        d="M25.8124 4.35388H12.1134C7.34443 4.35388 4.35352 7.73271 4.35352 12.5144V25.4122C4.35352 30.1939 7.33177 33.5727 12.1134 33.5727H25.8045C30.5941 33.5727 33.5708 30.1939 33.5708 25.4122V12.5144C33.5771 7.73271 30.5989 4.35388 25.8124 4.35388Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.9463 13.9096C16.9463 15.5246 15.6384 16.8325 14.0234 16.8325C12.41 16.8325 11.1006 15.5246 11.1006 13.9096C11.1006 12.2946 12.41 10.9868 14.0234 10.9868C15.6368 10.9884 16.9447 12.2962 16.9463 13.9096Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M33.5778 23.6725C32.1163 22.1683 29.3059 19.1299 26.2501 19.1299C23.1927 19.1299 21.4304 25.8321 18.4902 25.8321C15.5499 25.8321 12.8788 22.8016 10.5228 24.7444C8.16683 26.6855 5.9375 30.655 5.9375 30.655"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
