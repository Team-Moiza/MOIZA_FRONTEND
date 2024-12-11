import { Google, Logo } from "@moija/ui";

const Login = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-50">
            <div className="flex flex-col items-center">
                <div className="w-[500px] h-[480px] flex flex-col items-center justify-center gap-[50px] bg-white border border-gray-100 rounded-[30px]">
                    <div className="flex flex-col items-center gap-5">
                        <Logo width={150} />
                        <div className="text-gray-600 text-center text-p4">
                            로그인하고 소마고생들의 포트폴리오를 구경해보세요!
                        </div>
                    </div>
                        <button className="flex items-center gap-4 border-2 border-[#E2E8F0] px-10 py-4 rounded-[50px] text-black">
                            <Google />
                            Google로 로그인
                        </button>
                </div>
                {/* 하단 텍스트 */}
                <div className="text-gray-300 text-caption1 mt-[50px]">
                    ©2024. team MOIZA. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Login;
