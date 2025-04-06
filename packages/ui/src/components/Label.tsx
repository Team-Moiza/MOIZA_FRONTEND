interface LabelPropsType extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: string;
  accent?: boolean;
}

export const Label = ({ children, accent = false, ...rest }: LabelPropsType) => {
  return (
    <label {...rest} className="text-p5 text-black">
      <span className={accent ? "after:content-['_*'] after:text-[#FF3B30]" : ""}>{children}</span>
    </label>
  );
};
