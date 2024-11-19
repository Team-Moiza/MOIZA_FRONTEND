interface InputPropsType extends React.InputHTMLAttributes<HTMLInputElement> {
  isBig?: boolean;
}

export const Input = ({ isBig, ...rest }: InputPropsType) => {
  return (
    <input
      {...rest}
      style={{ width: rest.width + 'px', height: isBig ? '60px' : '48px' }}
      className={`px-[16px] border border-gray-200 rounded-[8px] text-black text-${isBig ? 'p1' : 'p5'} placeholder:text-gray-400 outline-0`}
    />
  );
};
