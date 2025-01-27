"use client";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight =
                document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / documentHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const navItems = [
        { id: "education", label: "학력" },
        { id: "introduction", label: "자기소개" },
        { id: "skills", label: "기술 스택" },
        { id: "projects", label: "프로젝트" },
        { id: "awards", label: "수상 내역" },
        { id: "certificates", label: "자격증" },
        { id: "links", label: "링크" },
    ];

    return (
        <div className="sticky top-[80px] bg-white border-b border-gray-200">
            <div className="flex justify-between items-center px-[235px] h-[56px]">
                {navItems.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-p5 cursor-pointer px-4 py-2 text-gray-500 hover:text-primary-500"
                    >
                        {item.label}
                    </div>
                ))}
            </div>
            <div className="h-[2px] bg-gray-200">
                <div
                    className="h-full bg-primary-500 transition-all duration-300"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>
        </div>
    );
};

export default NavBar;
