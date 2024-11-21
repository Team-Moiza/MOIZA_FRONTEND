import React from 'react';

interface InputPropsType extends React.InputHTMLAttributes<HTMLInputElement> {
  isBig?: boolean;
  icon?: JSX.Element;
}

export const Input = React.forwardRef<HTMLInputElement, InputPropsType>(
  ({ isBig, icon = false, ...rest }, ref) => {
    return (
      <div
        style={{
          width: rest.width ? `${rest.width}px` : '100%',
          height: isBig ? '60px' : '48px',
        }}
        className="border border-gray-200 rounded-[8px] overflow-hidden relative z-input">
        {icon && (
          <div className="w-[20px] h-[20px] left-[20px] top-[20px] absolute">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          style={{ padding: icon ? '0 56px' : '0 16px' }}
          {...rest}
          className={`w-[100%] h-[calc(100%_+_2px)] text-black text-${
            isBig ? 'p1' : 'p5'
          } placeholder:text-gray-400 outline-0`}
        />
      </div>
    );
  }
);
