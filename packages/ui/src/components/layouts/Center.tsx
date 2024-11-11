type CenterPropsType = {
  children: React.ReactNode;
  horizontal?: boolean;
  vertical?: boolean;
};

export const Center = ({
  children,
  horizontal = true,
  vertical = true,
}: CenterPropsType) => {
  return (
    <div
      className={`w-full h-full flex ${horizontal && 'justify-center'} ${vertical && 'items-center'}`}>
      <div className="w-fit h-fit">{children}</div>
    </div>
  );
};
