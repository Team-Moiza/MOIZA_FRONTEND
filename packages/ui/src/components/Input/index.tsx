interface InputPropsType extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...rest }: InputPropsType) => {
  return (
    <input
      {...rest}
      style={{ width: rest.width + 'px' }}
      className="h-[48px] px-[16px] border border-gray-200 rounded-[8px] text-black text-p5 placeholder:text-gray-400 outline-0"
    />
  );
};
