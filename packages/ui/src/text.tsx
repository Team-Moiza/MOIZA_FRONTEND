interface TextProps {
  variant:
    | 'D1'
    | 'D2'
    | 'D3'
    | 'H1'
    | 'H2'
    | 'H3'
    | 'H4'
    | 'H5'
    | 'p1'
    | 'p2'
    | 'p3'
    | 'context'
    | 'caption'
    | 'code'
    | 'btn1'
    | 'btn2'
    | 'btn3';
  children: string;
}

const Text = ({ variant, children }: TextProps) => {
  const variants = {
    D1: 'text-[72px] font-bold leading-[130%] tracking-[-1.5px]',
    D2: 'text-[60px] font-bold leading-[130%] tracking-[-0.5px]',
    D3: 'text-[48px] font-bold leading-[130%] tracking-[0]',
    H1: 'text-[36px] font-bold leading-[140%] tracking-[0.25px]',
    H2: 'text-[28px] font-bold leading-[140%] tracking-[0]',
    H3: 'text-[24px] font-semibold leading-[140%] tracking-[0.15px]',
    H4: 'text-[20px] font-semibold leading-[140%] tracking-[0.15px]',
    H5: 'text-[18px] font-semibold leading-[140%] tracking-[0.15px]',
    p1: 'text-[18px] font-normal leading-[160%] tracking-[-0.15px]',
    p2: 'text-[16px] font-normal leading-[160%] tracking-[-0.15px]',
    p3: 'text-[14px] font-normal leading-[160%] tracking-[-0.1px]',
    context: 'text-[16px] font-medium leading-[130%] tracking-[0]',
    caption: 'text-[12px] font-normal leading-[140%] tracking-[0]',
    code: 'text-[16px] font-normal leading-[130%] tracking-[0]',
    btn1: 'text-[18px] font-semibold leading-[130%] tracking-[0]',
    btn2: 'text-[16px] font-medium leading-[130%] tracking-[0]',
    btn3: 'text-[14px] font-medium leading-[130%] tracking-[0]',
  };

  return <div className={variants[variant]}>{children}</div>;
};

export default Text;
