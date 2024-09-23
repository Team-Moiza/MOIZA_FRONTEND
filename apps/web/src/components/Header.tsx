import Logo from "../../public/svg/Logo";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Logo />
        </div>
        <nav className="hidden md:flex space-x-8">
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

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="검색"
            className="bg-background px-4 py-2 border border-secondary-200 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary-400 flex items-center"
          />

          <div className="w-8 h-8 rounded-full bg-secondary-100"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
