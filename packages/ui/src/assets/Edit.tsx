import { IconPropsType } from "./iconPropsType";

export const Edit = ({ size = 16, color = "#000000" }: IconPropsType) => {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.5287 1.76396C10.7721 1.52056 11.061 1.32748 11.379 1.19575C11.6971 1.06402 12.0379 0.996216 12.3822 0.996216C12.7264 0.996216 13.0672 1.06402 13.3853 1.19575C13.7033 1.32748 13.9922 1.52056 14.2357 1.76396C14.4791 2.00737 14.6721 2.29633 14.8039 2.61435C14.9356 2.93238 15.0034 3.27323 15.0034 3.61746C15.0034 3.96169 14.9356 4.30254 14.8039 4.62057C14.6721 4.93859 14.4791 5.22756 14.2357 5.47096L13.4567 6.24996L9.74965 2.54296L10.5287 1.76396ZM9.04265 3.24996L2.65665 9.63596C2.28298 10.0102 2.0164 10.4778 1.88465 10.99L1.01465 14.376C0.993079 14.4602 0.993851 14.5486 1.01689 14.6325C1.03994 14.7163 1.08446 14.7927 1.14605 14.8541C1.20765 14.9155 1.28419 14.9598 1.36812 14.9826C1.45206 15.0053 1.54048 15.0058 1.62465 14.984L5.00965 14.115C5.52204 13.9837 5.98969 13.717 6.36365 13.343L12.7497 6.95696L9.04265 3.24996Z"
        fill={color}
      />
    </svg>
  );
};