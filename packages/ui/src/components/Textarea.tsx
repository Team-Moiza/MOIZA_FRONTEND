"use client";

import { forwardRef, useState } from "react";

interface TextareaPropsType extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  width: number;
  height: number;
  isBig?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaPropsType>(
  ({ width, height, isBig = false, ...rest }, ref) => {
    return (
      <label className="flex flex-col gap-1 items-center">
        <textarea
          ref={ref}
          {...rest}
          style={{ width: width, height: height }}
          className={`px-[16px] py-[12px] border border-gray-200 rounded-[8px] text-black text-p5 placeholder:text-gray-400 outline-0 resize-none`}
        />
        {rest.maxLength && (
          <span className="text-caption1 text-gray-400 self-end">
            {(rest.value?.toString().length ?? 0)}/{rest.maxLength}
          </span>
        )}
      </label>
    );
  }
);
