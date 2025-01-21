interface IProp {
  value?: boolean;
  toggle: () => void;
}

export const Toggle = ({ value, toggle }: IProp) => {
  return (
    <button type="button" className={`transition-all duration-300 w-[36px] h-[20px] rounded-[100px] ${value ? "bg-primary-500" : "bg-gray-200"}`} onClick={toggle}>
      <div className="rounded-[100px] size-4 bg-white transition-all duration-300" style={{ transform: `translateX(${value ? 18 : 2}px)`, boxShadow: "0px 2px 4px 0px rgba(39,39,39,0.1)" }} />
    </button>
  );
};
