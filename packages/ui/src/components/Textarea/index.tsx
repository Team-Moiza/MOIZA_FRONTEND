interface TextareaPropsType
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  width: number;
  height: number;
}

export const Textarea = ({ width, height, ...rest }: TextareaPropsType) => {
  return (
    <textarea
      {...rest}
      style={{ width: width + 'px', height: height + 'px' }}
      className="h-[48px] px-[24px] py-[16px] border border-gray-200 rounded-[8px] text-black text-p5 placeholder:text-gray-400 outline-0 resize-none"
    />
  );
};
