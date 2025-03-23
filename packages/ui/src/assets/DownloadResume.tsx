import { IconPropsType } from "./iconPropsType";

export const DownloadResume = ({ size = 18, color = "#5a5a5a" }: IconPropsType) => {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.08171 10.7907L8.08171 2.7634" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M10.0254 8.83893L8.08139 10.7909L6.13739 8.83893" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M11.17 5.91867H11.792C13.1487 5.91867 14.248 7.018 14.248 8.37534L14.248 11.6313C14.248 12.9847 13.1514 14.0813 11.798 14.0813L4.37138 14.0813C3.01471 14.0813 1.91471 12.9813 1.91471 11.6247L1.91471 8.368C1.91471 7.01534 3.01205 5.91867 4.36471 5.91867H4.99271"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
