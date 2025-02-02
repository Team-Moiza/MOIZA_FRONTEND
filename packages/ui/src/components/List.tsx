import { Close } from "../assets/Close";

interface IProp {
  list?: string[];
  remove?: (item: number) => void;
}

export const List = ({ list, remove }: IProp) => {
  if (list?.length) {
    return (
      <div className="w-full h-fit flex flex-wrap gap-2">
        {list.map((item, index) => (
          <button type="button" className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100" onClick={() => remove && remove(index)} key={`${item}${index}`}>
            <span className="text-p5 text-gray-600">{item}</span>
            <Close color="#787878" />
          </button>
        ))}
      </div>
    );
  }
};
