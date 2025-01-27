import { Logo } from "@moija/ui";

type User = {
  profile: string;
  name: string;
};

const Header = () => {
  const isLoggedIn = true;
  const user: User = {
    profile: "https://i.pinimg.com/564x/b3/ea/18/b3ea1834562fc0dcbe9a7f3c4ef7612b.jpg",
    name: "강민지",
  };

  return (
    <header className="z-100 w-[100vw] fixed justify-center bg-white h-[80px] px-[200px] py-[25px] shadow-custom">
      <div className="h-full flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Logo />
        </div>
        <div className="flex items-center gap-5">
          {isLoggedIn ? (
            <div className="flex items-center gap-[14px]">
              <img src={user.profile} className="rounded-full w-[42px] h-[42px] flex-shrink-0" />
              <div className="text-p3 text-black">{user.name}님</div>
            </div>
          ) : (
            <div className="gap-[50px] flex">
              <div className="text-p3 text-black">로그인</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
