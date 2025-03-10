"use client";
import NavBar from "../../../components/detail/NavBar";
import Section from "../../../components/detail/Section";
import { profileData } from "../../../data/profileData";
import Profile from "../../../components/detail/Profile";
import { LinkIcon } from "@moija/ui";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { detailPortFolio } from "../../../apis";
import { FormData } from "../../write/[id]/page";

const Detail = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["detail"],
    queryFn: async () => await detailPortFolio(id as string),
  });
  const rData = data?.data as FormData;

  return (
    <>
      <div id="education" className="w-screen pt-[80px] px-[200px]">
        <div className="border-x border-gray-200">
          <NavBar />
          <div className="px-[68px] pt-[68px] pb-[200px]">
            <Profile data={rData} />
            <div className="flex flex-col gap-[76px]">
              <Section id="introduction" title="자기소개">
                <p className="text-gray-700 leading-relaxed">{rData?.introduction.introduce}</p>
                <p>{rData?.introduction.url}</p>
              </Section>

              <Section id="skills" title="기술 스택">
                <div className="flex flex-wrap gap-3">
                  {rData?.codes.length
                    ? rData?.codes.map(({ id, keyword }) => (
                        <span key={id} className="px-3 py-[6px] bg-white rounded-full text-black text-p5 border border-gray-200">
                          {keyword}
                        </span>
                      ))
                    : "기술스택 없음"}
                </div>
              </Section>

              <Section id="projects" title="프로젝트">
                {rData?.projects.map((project, index) => (
                  <>
                    <div className="gap-3 flex flex-col">
                      <div>
                        <div className="text-h5 mb-1">{project.title}</div>
                        <div className="text-p5 text-gray-500">
                          {project.startDate} ~ {project.status ? "진행중" : project.endDate}
                        </div>
                      </div>
                      <div className="text-p3 text-black">{project.description}</div>
                      {project.link && (
                        <Link href={project.link} className="text-primary-500 text-p3">
                          {project.link}
                        </Link>
                      )}
                    </div>
                    {index < profileData.projects.length - 1 && <div className="border-b border-gray-100 my-8" />}
                  </>
                ))}
              </Section>

              <Section id="awards" title="수상 내역">
                {rData?.awards.map((award) => (
                  <>
                    <div className="text-h5 text-black">{award.name}</div>
                    <div className="text-gray-500 text-p4 mb-4">{award.date}</div>
                    <div className="text-black text-p3">{award.description}</div>
                  </>
                ))}
              </Section>

              <Section id="certificates" title="자격증">
                {rData?.qualifications.map((cert, index) => (
                  <>
                    <div key={cert.name}>
                      <div className="text-h5 text-black">{cert.name}</div>
                      <div className="text-gray-500 text-p4">{cert.date}</div>
                    </div>
                    {index < profileData.certificates.length - 1 && <div className="border-b border-gray-100 my-8" />}
                  </>
                ))}
              </Section>

              <Section id="links" title="링크">
                <div className="flex flex-col gap-2">
                  {rData?.links.map(({ id, url }) => (
                    <div className="w-full px-5 py-3 rounded-lg border border-gray-200 cursor-pointer">
                      {url && (
                        <span key={id} className="text-black text-p5 flex items-center gap-3" onClick={() => window.open(url as unknown as URL)}>
                          <LinkIcon size={18} />
                          {url}
                        </span>
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
