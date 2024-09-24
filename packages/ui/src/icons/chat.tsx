import { Icon } from '@repo/types-config';

export const Chat = ({ size = 24, color = '#121212' }: Icon.IconPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M7.29476 18.7714L7.25578 18.7488L7.21305 18.7631L3.90098 19.8681L3.90096 19.8681C3.79587 19.9032 3.68319 19.9089 3.57509 19.8846C3.46699 19.8604 3.36757 19.807 3.28755 19.7304C3.20754 19.6538 3.14997 19.5567 3.12107 19.4498C3.09216 19.3428 3.09302 19.23 3.12354 19.1235L3.12355 19.1234L4.13219 15.5945L4.14344 15.5551L4.12386 15.5192C3.45191 14.2856 3.10005 12.9031 3.10049 11.4984C3.10085 9.64904 3.71147 7.85151 4.83763 6.38464C5.96379 4.91776 7.54253 3.86353 9.32896 3.38549C11.1154 2.90745 13.0096 3.03232 14.7179 3.74073C16.4261 4.44914 17.8528 5.70149 18.7767 7.3035C19.7005 8.90552 20.0699 10.7676 19.8275 12.601C19.5851 14.4344 18.7445 16.1365 17.436 17.4434C16.1276 18.7503 14.4244 19.5888 12.5908 19.8289C10.7572 20.069 8.89558 19.6973 7.29476 18.7714ZM11.5003 4.31503H11.5002C10.232 4.31495 8.98627 4.65068 7.8898 5.28809C6.79332 5.9255 5.88515 6.84187 5.25761 7.94404C4.63006 9.04622 4.30552 10.2949 4.31696 11.5632C4.3284 12.8314 4.6754 14.0739 5.32267 15.1646C5.36485 15.2359 5.392 15.3151 5.40246 15.3974C5.41292 15.4796 5.40647 15.5631 5.3835 15.6427L5.38344 15.6429L4.66237 18.1646L4.61026 18.3469L4.79011 18.287L7.13887 17.505L7.13894 17.505C7.22461 17.4764 7.31557 17.4672 7.40521 17.4782C7.49486 17.4891 7.58095 17.5199 7.65722 17.5682L7.65729 17.5683C8.59867 18.164 9.66571 18.5327 10.7741 18.6451C11.8825 18.7574 13.0018 18.6104 14.0436 18.2157C15.0854 17.821 16.0211 17.1893 16.7767 16.3707C17.5324 15.5521 18.0873 14.5689 18.3975 13.4989C18.7078 12.4289 18.7649 11.3014 18.5644 10.2055C18.3639 9.1096 17.9112 8.07537 17.2422 7.18454C16.5732 6.29372 15.7061 5.57072 14.7096 5.0727C13.713 4.57468 12.6143 4.31529 11.5003 4.31503ZM8.76699 10.0817C8.76699 9.92035 8.83108 9.76562 8.94516 9.65153C9.05924 9.53745 9.21397 9.47336 9.3753 9.47336H13.6252C13.7865 9.47336 13.9412 9.53745 14.0553 9.65153C14.1694 9.76562 14.2335 9.92035 14.2335 10.0817C14.2335 10.243 14.1694 10.3978 14.0553 10.5118C13.9412 10.6259 13.7865 10.69 13.6252 10.69H9.3753C9.21397 10.69 9.05924 10.6259 8.94516 10.5118C8.83108 10.3978 8.76699 10.243 8.76699 10.0817ZM8.94516 12.4849C9.05924 12.3708 9.21397 12.3067 9.3753 12.3067H12.2086C12.3699 12.3067 12.5246 12.3708 12.6387 12.4849C12.7528 12.5989 12.8169 12.7537 12.8169 12.915C12.8169 13.0764 12.7528 13.2311 12.6387 13.3452C12.5246 13.4593 12.3699 13.5234 12.2086 13.5234H9.3753C9.21397 13.5234 9.05924 13.4593 8.94516 13.3452C8.83108 13.2311 8.76699 13.0764 8.76699 12.915C8.76699 12.7537 8.83108 12.5989 8.94516 12.4849Z"
        fill={color}
        stroke="white"
        stroke-width="0.2"
      />
    </svg>
  );
};
