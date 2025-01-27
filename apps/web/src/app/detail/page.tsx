// pages/detail.tsx
import { Footer } from "@moija/ui";
import React from "react";
import NavBar from "../../components/detail/NavBar";
import Section from "../../components/detail/Section";
import { profileData } from "../../data/profileData";
import Profile from "../../components/detail/Profile";

const Detail = () => {
    return (
        <>
            <div id="education" className="w-screen pt-[80px] px-[200px]">
                <div className="border-x border-gray-200">
                    <NavBar />
                    <div className="p-[68px]">
                      <Profile/>
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
                                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Section>

                        <Section id="projects" title="프로젝트">
                            <div className="space-y-6">
                                {profileData.projects.map((project) => (
                                    <div
                                        key={project.title}
                                        className="border-b pb-4"
                                    >
                                        <h3 className="font-bold mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {project.date}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        <Section id="awards" title="수상 내역">
                            <div className="space-y-4">
                                {profileData.awards.map((award) => (
                                    <div key={award.title}>
                                        <h3 className="font-bold">
                                            {award.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {award.date}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        <Section id="certificates" title="자격증">
                            <div className="space-y-4">
                                {profileData.certificates.map((cert) => (
                                    <div key={cert.name}>
                                        <p className="font-bold">{cert.name}</p>
                                        <p className="text-gray-600 text-sm">
                                            {cert.date}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Detail;
