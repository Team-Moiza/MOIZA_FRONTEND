type InputTemplatePropsType = {
  children: React.ReactNode;
  full?: boolean;
};

export const InputTemplate = ({ children, full }: InputTemplatePropsType) => {
  return <div className={`flex flex-col items-start gap-[4px] ${full ? "w-full" : "w-fit"}`}>{children}</div>;
};
