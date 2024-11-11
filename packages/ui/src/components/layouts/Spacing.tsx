type SpacingPropsType = {
  children: React.ReactNode;
  align?: 'start' | 'center' | 'end';
};

export const Spacing = ({ children, align }: SpacingPropsType) => {
  return (
    <div className={`w-full flex items-${align} justify-between`}>
      {children}
    </div>
  );
};
