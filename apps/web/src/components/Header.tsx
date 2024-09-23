import Bell from "../../public/svg/Bell";
import Logo from "../../public/svg/Logo";
import Profile from "../../public/svg/Profile";
import Search from "../../public/svg/Search";

const Header = () => {
  return (
    <header className="bg-white h-[80px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02)]">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Logo />
        </div>
        <nav className="space-x-8">
          <a href="#" className="text-secondary-400 hover:text-primary-400">
            커뮤니티
          </a>
          <a href="#" className="text-secondary-400 hover:text-primary-400">
            팀원모집
          </a>
          <a href="#" className="text-secondary-400 hover:text-primary-400">
            학교탐방
          </a>
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
