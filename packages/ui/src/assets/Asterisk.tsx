import { IconPropsType } from './iconPropsType';

export const Asterisk = ({ size = 24, color = '#000000' }: IconPropsType) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.94397 0.714233C5.10973 0.714233 5.2687 0.780081 5.38591 0.897292C5.50312 1.0145 5.56897 1.17347 5.56897 1.33923V3.59007L7.51813 2.46423C7.66161 2.38266 7.83152 2.36115 7.9908 2.40439C8.15008 2.44763 8.28578 2.55212 8.36831 2.69505C8.45083 2.83798 8.47347 3.00775 8.43128 3.16731C8.3891 3.32687 8.28551 3.46326 8.14313 3.54673L6.19397 4.67257L8.14313 5.79798C8.28551 5.88145 8.3891 6.01785 8.43128 6.17741C8.47347 6.33697 8.45083 6.50674 8.36831 6.64967C8.28578 6.7926 8.15008 6.89708 7.9908 6.94033C7.83152 6.98357 7.66161 6.96206 7.51813 6.88048L5.56897 5.75548V8.0059C5.56897 8.17166 5.50312 8.33063 5.38591 8.44784C5.2687 8.56505 5.10973 8.6309 4.94397 8.6309C4.77821 8.6309 4.61924 8.56505 4.50203 8.44784C4.38482 8.33063 4.31897 8.17166 4.31897 8.0059V5.75507L2.3698 6.8809C2.29869 6.92259 2.22004 6.9498 2.13838 6.96096C2.05671 6.97213 1.97365 6.96703 1.89396 6.94596C1.81427 6.92489 1.73954 6.88827 1.67406 6.8382C1.60859 6.78814 1.55366 6.72561 1.51245 6.65423C1.47124 6.58285 1.44455 6.50402 1.43392 6.42228C1.4233 6.34054 1.42895 6.25751 1.45055 6.17797C1.47214 6.09842 1.50926 6.02393 1.55976 5.95879C1.61026 5.89365 1.67315 5.83914 1.7448 5.7984L3.69397 4.67257L1.7448 3.54715C1.60242 3.46368 1.49884 3.32728 1.45665 3.16772C1.41447 3.00816 1.43711 2.8384 1.51963 2.69547C1.60215 2.55254 1.73786 2.44805 1.89714 2.40481C2.05641 2.36156 2.22633 2.38308 2.3698 2.46465L4.31897 3.58965V1.33923C4.31897 1.17347 4.38482 1.0145 4.50203 0.897292C4.61924 0.780081 4.77821 0.714233 4.94397 0.714233Z"
        fill={color}
      />
    </svg>
  );
};