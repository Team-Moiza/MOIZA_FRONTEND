import Link from "next/link";
import { Icon } from "@repo/ui/src";
import SearchBar from "./SearchBar";

const navItems = [
  { name: "커뮤니티", link: "#" },
  { name: "팀원모집", link: "#" },
  { name: "학교탐방", link: "#" },
];

const Header = () => {
  return (
    <header className="justify-center bg-white h-[80px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02)]">
      <div className="mx-[252px] h-full flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Icon.Logo />
        </div>
        <nav className="space-x-12">
          {navItems.map((item, index) => (
            <Link key={index} href={item.link} className="text-secondary-400 hover:text-primary-400">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <SearchBar/>
          <Icon.BellOn/>
          <div className="rounded-full bg-gray-400 w-[44px] h-[44px] flex-shrink-0"></div>
          </div>
        </div>
    </header>
  );
};

export default Header;