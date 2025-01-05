interface TextareaPropsType extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  width: number;
  height: number;
  isBig?: boolean;
}

export const Textarea = ({ width, height, isBig = false, ...rest }: TextareaPropsType) => {
  return (
    <textarea
      {...rest}
      style={{ width: width, height: height }}
      className={`px-[16px] py-[12px] border border-gray-200 rounded-[8px] text-black ${isBig ? "text-p1" : "text-p5"} placeholder:text-gray-400 outline-0 resize-none`}
    />
  );
};
