"use client";

import { forwardRef, useState, useEffect } from "react";

interface TextareaPropsType extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  width: number;
  height: number;
  isBig?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaPropsType>(({ width, height, isBig = false, ...rest }, ref) => {
  const [value, setValue] = useState(rest?.defaultValue ?? "");

  useEffect(() => {
    setValue(rest?.defaultValue ?? "");
  }, [rest?.defaultValue]);

  return (
    <label className="flex flex-col gap-1 items-center">
      <textarea
        ref={ref}
        {...rest}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          rest.onChange?.(e);
        }}
        style={{ width: width, height: height }}
        className={`px-[16px] py-[12px] border border-gray-200 rounded-[8px] text-black text-p5 placeholder:text-gray-400 outline-0 resize-none`}
      />
      {rest.maxLength && (
        <span className="text-caption1 text-gray-400 self-end">
          {value?.toString().length}/{rest.maxLength}
        </span>
      )}
    </label>
  );
});
