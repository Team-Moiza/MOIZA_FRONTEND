"use client";
import React from "react";

type TextPropsType = {
  children: string;
  className?: string;
  onClick?: () => void;
};

export const Text = ({ children, className, onClick }: TextPropsType) => {
  const text = children.toString().split("\n");

  return (
    <p className={`${className} cursor-default`} onClick={onClick}>
      {text.map((item, index) => (
        <React.Fragment key={index}>
          {item}
          {index !== text.length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  );
};
