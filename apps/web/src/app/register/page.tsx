"use client";
import { useBoolean, useOutsideClickRef } from "@moija/hooks";
import { Button, Dropdown, InputTemplate, Label, Select } from "@moija/ui";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
    const router = useRouter();

    const {
        boolean: isSchoolOpen,
        toggle: toggleSchool,
        setFalse: closeSchool,
    } = useBoolean(false);
    const {
        boolean: isMajorOpen,
        toggle: toggleMajor,
        setFalse: closeMajor,
    } = useBoolean(false);
    const {
        boolean: isStatusOpen,
        toggle: toggleStatus,
        setFalse: closeStatus,
    } = useBoolean(false);

    const schoolRef = useOutsideClickRef<HTMLDivElement>(closeSchool);
    const majorRef = useOutsideClickRef<HTMLDivElement>(closeMajor);
    const statusRef = useOutsideClickRef<HTMLDivElement>(closeStatus);

    const [selectedSchool, setSelectedSchool] = useState("");
    const [selectedMajor, setSelectedMajor] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");

    const schools = [
        "대구소프트웨어마이스터고",
        "부산소프트웨어마이스터고",
        "광주소프트웨어마이스터고",
    ];
    const majors = [
        "소프트웨어개발과",
        "임베디드개발과",
        "인공지능소프트웨어개발과",
        "정보보안과",
        "스마트 IoT과",
    ];
    const statuses = ["재학중", "졸업"];

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-50">
            <div className="flex flex-col items-center">
                <div className="px-[56px] py-[50px] flex flex-col items-center justify-center gap-5 bg-white border border-gray-100 rounded-[30px]">
                    <div className="gap-2.5 flex flex-col">
                        <div className="text-black text-center text-h4">
                            회원가입
                        </div>
                        <div className="text-gray-500 text-center text-p4">
                            회원가입하고 소마고생들의 포트폴리오를 구경해보세요!
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 w-full">
                        <InputTemplate>
                            <Label>학교</Label>
                            <div ref={schoolRef}>
                                <Dropdown
                                    isOpen={isSchoolOpen}
                                    selectedItem={selectedSchool}
                                    items={schools}
                                    onSelect={(item) => {
                                        setSelectedSchool(item);
                                        toggleSchool();
                                    }}
                                >
                                    <Select
                                        width={400}
                                        placeholder="학교 선택"
                                        isOpen={isSchoolOpen}
                                        value={selectedSchool}
                                        onClick={toggleSchool}
                                    />
                                </Dropdown>
                            </div>
                        </InputTemplate>

                        <InputTemplate>
                            <Label>과</Label>
                            <div ref={majorRef}>
                                <Dropdown
                                    isOpen={isMajorOpen}
                                    selectedItem={selectedMajor}
                                    items={majors}
                                    onSelect={(item) => {
                                        setSelectedMajor(item);
                                        toggleMajor();
                                    }}
                                >
                                    <Select
                                        width={400}
                                        placeholder="과 선택"
                                        isOpen={isMajorOpen}
                                        value={selectedMajor}
                                        onClick={toggleMajor}
                                    />
                                </Dropdown>
                            </div>
                        </InputTemplate>

                        <InputTemplate>
                            <Label>재학 상태</Label>
                            <div ref={statusRef}>
                                <Dropdown
                                    isOpen={isStatusOpen}
                                    selectedItem={selectedStatus}
                                    items={statuses}
                                    onSelect={(item) => {
                                        setSelectedStatus(item);
                                        toggleStatus();
                                    }}
                                >
                                    <Select
                                        width={400}
                                        placeholder="재학 상태"
                                        isOpen={isStatusOpen}
                                        value={selectedStatus}
                                        onClick={toggleStatus}
                                    />
                                </Dropdown>
                            </div>
                        </InputTemplate>

                        <Button width="100%">회원가입</Button>

                        <div className="text-center text-p5 text-gray-500">
                            이미 계정이 있다면?{" "}
                            <span
                                className="text-primary-500 cursor-pointer"
                                onClick={() => router.push("/login")}
                            >
                                로그인
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
