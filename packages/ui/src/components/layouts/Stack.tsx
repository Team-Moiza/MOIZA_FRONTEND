type StackPropsType = {
  children: React.ReactNode;
  gap?: number;
  justify?: 'start' | 'center' | 'end';
};

export const Stack = ({ children, gap, justify }: StackPropsType) => {
  return (
    <div
      className={`flex flex-col items-${justify}`}
      style={{ gap: gap + 'px' }}>
      {children}
    </div>
  );
};
