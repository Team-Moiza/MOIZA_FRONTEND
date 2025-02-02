"use client";

import { forwardRef, useState } from "react";

interface TextareaPropsType extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  width: number;
  height: number;
  isBig?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaPropsType>(({ width, height, isBig = false, ...rest }: TextareaPropsType, ref) => {
  const [value, setValue] = useState("");

  return (
    <label className="flex flex-col gap-1 items-center">
      <textarea
        ref={ref}
        value={value}
        {...rest}
        onChange={(e) => {
          if (rest.maxLength) setValue(e.target.value);
          if (rest && rest.onChange) rest.onChange(e);
        }}
        style={{ width: width, height: height }}
        className={`px-[16px] py-[12px] border border-gray-200 rounded-[8px] text-black ${isBig ? "text-p1" : "text-p5"} placeholder:text-gray-400 outline-0 resize-none`}
      />
      {rest.maxLength && (
        <span className="text-caption1 text-gray-400 self-end">
          {value.length}/{rest.maxLength}
        </span>
      )}
    </label>
  );
});
