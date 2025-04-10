"use client";

import { forwardRef, useState, useEffect } from "react";

interface TextareaPropsType extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  width: number;
  height: number;
  isBig?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaPropsType>(
  ({ width, height, isBig = false, value, defaultValue, onChange, ...rest }, ref) => {
    const isControlled = value !== undefined;

    const [text, setText] = useState(() =>
      isControlled ? value.toString() : defaultValue?.toString() ?? ""
    );

    useEffect(() => {
      if (!isControlled && typeof defaultValue === "string") {
        setText(defaultValue);
      }
    }, [defaultValue]);

    useEffect(() => {
      if (isControlled && typeof value === "string") {
        setText(value);
      }
    }, [value, isControlled]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!isControlled) setText(e.target.value);
      onChange?.(e);
    };

    return (
      <label className="flex flex-col gap-1 items-center">
        <textarea
          ref={ref}
          {...rest}
          onChange={handleChange}
          style={{ width, height }}
          className={`px-[16px] py-[12px] border border-gray-200 rounded-[8px] text-black text-p5 placeholder:text-gray-400 outline-0 resize-none`}
          {...(isControlled
            ? { value }
            : { defaultValue })}
        />
        {rest.maxLength && (
          <span className="text-caption1 text-gray-400 self-end">
            {text.length}/{rest.maxLength}
          </span>
        )}
      </label>
    );
  }
);
