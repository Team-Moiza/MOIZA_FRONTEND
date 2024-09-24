import Link from "next/link";
import { Icon } from "@repo/ui/src";

const SearchBar = () => {
  return (
          <div className="bg-accent border border-none rounded-[8px] flex items-center py-[10px] px-[16px] w-full max-w-xs">
            <Icon.Search />
            <input
              type="text"
              placeholder="검색"
              className="bg-transparent text-text placeholder-subText focus:outline-none ml-2 w-full"
            />
          </div>
  );
};

export default SearchBar;