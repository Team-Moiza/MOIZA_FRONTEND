"use client";

import NavBar from "../../components/detail/NavBar";
import Section from "../../components/detail/Section";
import { profileData } from "../../data/profileData";   
import Profile from "../../components/detail/Profile";
import { LinkIcon } from "@moija/ui";
import Link from "next/link";

const Detail = () => {
    return (
        <>
            <div id="education" className="w-screen pt-[80px] px-[200px]">
                <div className="border-x border-gray-200">
                    <NavBar />
                    <div className="px-[68px] pt-[68px] pb-[200px]">
                        <Profile />
                        <div className="flex flex-col gap-[76px]">
                            <Section id="introduction" title="자기소개">
                                <p className="text-gray-700 leading-relaxed">
                                    {profileData.introduction}
                                </p>
                            </Section>

                            <Section id="skills" title="기술 스택">
                                <div className="flex flex-wrap gap-3">
                                    {profileData.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-[6px] bg-white rounded-full text-black text-p5 border border-gray-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </Section>

                            <Section id="projects" title="프로젝트">
                                {profileData.projects.map((project, index) => (
                                    <>
                                        <div className="gap-3 flex flex-col">
                                            <div>
                                                <div className="text-h5 mb-1">
                                                    {project.title}
                                                </div>
                                                <div className="text-p5 text-gray-500">
                                                    {project.date}
                                                </div>
                                            </div>
                                            <div className="text-p3 text-black">
                                                {project.desc}
                                            </div>
                                            {project.link && (
                                                <Link
                                                    href={project.link}
                                                    className="text-primary-500 text-p3"
                                                >
                                                    {project.link}
                                                </Link>
                                            )}
                                        </div>
                                        {index <
                                            profileData.projects.length - 1 && (
                                            <div className="border-b border-gray-100 my-8" />
                                        )}
                                    </>
                                ))}
                            </Section>

                            <Section id="awards" title="수상 내역">
                                {profileData.awards.map((award) => (
                                    <>
                                        <div className="text-h5 text-black">
                                            {award.title}
                                        </div>
                                        <div className="text-gray-500 text-p4 mb-4">
                                            {award.date}
                                        </div>
                                        <div className="text-black text-p3">
                                            {award.desc}
                                        </div>
                                    </>
                                ))}
                            </Section>

                            <Section id="certificates" title="자격증">
                                {profileData.certificates.map((cert, index) => (
                                    <>
                                        <div key={cert.name}>
                                            <div className="text-h5 text-black">
                                                {cert.name}
                                            </div>
                                            <div className="text-gray-500 text-p4">
                                                {cert.date}
                                            </div>
                                        </div>
                                        {index <
                                            profileData.certificates.length -
                                                1 && (
                                            <div className="border-b border-gray-100 my-8" />
                                        )}
                                    </>
                                ))}
                            </Section>

                            <Section id="links" title="링크">
                                <div className="flex flex-col gap-2">
                                    {profileData.links.map((link) => (
                                        <div className="w-full px-5 py-3 rounded-lg border border-gray-200">
                                            {link && (
                                                <Link
                                                    href={link}
                                                    className="text-black text-p5 flex items-center gap-3"
                                                >
                                                    <LinkIcon size={18} />
                                                    {link}
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </Section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Detail;
