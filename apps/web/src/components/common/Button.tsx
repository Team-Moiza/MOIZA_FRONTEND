import React from "react";

type ButtonProps = {
    text: string;
};

const Button = ({ text }: ButtonProps) => {
    return (
        <div className="w-full h-11 px-10 py-2 bg-[#19deb3] rounded-lg justify-center items-center flex">
            <div className="text-white text-p2">
                {text}
            </div>
        </div>
    );
};

export default Button;
