import Link from "next/link";
import Bell from "../../public/svg/Bell";
import Logo from "../../public/svg/Logo";
import Profile from "../../public/svg/Profile";
import Search from "../../public/svg/Search";

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
          <Logo />
        </div>
        <nav className="space-x-12">
          {navItems.map((item, index) => (
            <Link key={index} href={item.link} className="text-secondary-400 hover:text-primary-400">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <div className="bg-accent border border-none rounded-[8px] flex items-center py-[10px] px-[16px] w-full max-w-xs">
            <Search />
            <input
              type="text"
              placeholder="검색"
              className="bg-transparent text-text placeholder-subText focus:outline-none ml-2 w-full"
            />
          </div>
          <Bell />
          <Profile />
        </div>
      </div>
    </header>
  );
};

export default Header;