import { Icon } from '@repo/types-config';

export const HeartFill = ({
  size = 24,
  color = '#FF3B30',
}: Icon.IconPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M4.42605 12.3115L12 19.8854L19.574 12.3115C21.4754 10.4101 21.4754 7.32738 19.574 5.42602C17.6726 3.52466 14.5899 3.52466 12.6886 5.42602L12 6.11456L11.3115 5.42602C9.41013 3.52466 6.32741 3.52466 4.42605 5.42602C2.52469 7.32738 2.52469 10.4101 4.42605 12.3115Z"
        fill={color}
        stroke={color}
        stroke-width="1.6"
        stroke-linejoin="round"
      />
    </svg>
  );
};
