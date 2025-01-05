type FlexPropsType = {
  children: React.ReactNode;
  gap?: number;
  align?: 'start' | 'center' | 'end';
};

export const Flex = ({ children, gap, align }: FlexPropsType) => {
  return (
    <div className={`flex items-${align}`} style={{ gap: gap + 'px' }}>
      {children}
    </div>
  );
};
