import { IconPropsType } from "./iconPropsType";

export const Delete = ({ size = 24, color = "#000000" }: IconPropsType) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4933 7.1012C14.4933 7.1012 14.0861 12.1524 13.8498 14.2802C13.7373 15.2964 13.1096 15.8919 12.0813 15.9107C10.1246 15.9459 8.1656 15.9482 6.2096 15.9069C5.22035 15.8867 4.6031 15.2837 4.49285 14.2854C4.2551 12.1389 3.8501 7.1012 3.8501 7.1012"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.531 4.67981H2.8125"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.0804 4.6798C12.4917 4.6798 11.9847 4.26355 11.8692 3.6868L11.6869 2.7748C11.5744 2.35405 11.1934 2.06305 10.7592 2.06305H7.58443C7.15018 2.06305 6.76918 2.35405 6.65668 2.7748L6.47443 3.6868C6.35893 4.26355 5.85193 4.6798 5.26318 4.6798"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
