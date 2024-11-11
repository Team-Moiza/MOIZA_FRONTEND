type CenterPropsType = {
  children: React.ReactNode;
};

export const Center = ({ children }: CenterPropsType) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-fit h-fit">{children}</div>
    </div>
  );
};
