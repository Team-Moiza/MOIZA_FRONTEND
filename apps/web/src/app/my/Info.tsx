import { Label } from "@moija/ui";

interface IProp {
  required?: boolean;
  name: string;
  value?: string;
  children?: React.ReactNode;
}

export const Info = ({ required, name, value, children }: IProp) => {
  return (
    <div className="w-full flex items-center gap-[80px] py-3">
      <div className="w-[60px]">
        <Label accent={required}>{name}</Label>
      </div>
      <div className="flex flex-col gap-[6px]">
        <span className={`text-p5 ${!value && "text-gray-400"}`}>{value ?? "값을 입력하세요"}</span>
        {children}
      </div>
    </div>
  );
};
