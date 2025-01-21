type InputTemplatePropsType = {
  children: React.ReactNode;
};

export const InputTemplate = ({ children }: InputTemplatePropsType) => {
  return <div className="flex flex-col items-start gap-[4px] w-fit">{children}</div>;
};
