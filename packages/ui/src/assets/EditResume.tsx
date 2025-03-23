import { IconPropsType } from "./iconPropsType";

export const EditResume = ({ size = 18, color = "#5a5a5a" }: IconPropsType) => {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.66198 2.35933H5.16932C3.11932 2.35933 1.83398 3.81066 1.83398 5.86533V11.408C1.83398 13.4627 3.11332 14.914 5.16932 14.914H11.052C13.1087 14.914 14.388 13.4627 14.388 11.408V8.72266" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.88541 7.7806L10.8674 2.7986C11.4881 2.1786 12.4941 2.1786 13.1147 2.7986L13.9261 3.60994C14.5467 4.2306 14.5467 5.23727 13.9261 5.85727L8.92008 10.8633C8.64875 11.1346 8.28075 11.2873 7.89675 11.2873H5.39941L5.46208 8.76727C5.47141 8.3966 5.62275 8.04327 5.88541 7.7806Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M10.1104 3.56833L13.1544 6.61233" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};
