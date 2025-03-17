"use client";

import { useBoolean, useOutsideClickRef } from "@moija/hooks";
import { Button, Dropdown, InputTemplate, Label, Select } from "@moija/ui";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { resgister } from "../../apis/register";
import { School, Major, EducationStatus } from "../../enum/enums";

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

    const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
    const [selectedMajor, setSelectedMajor] = useState<string | null>(null);
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

    const handleRegister = async () => {
        if (!selectedSchool || !selectedMajor || !selectedStatus) {
            alert("모든 항목을 선택해주세요.");
            return;
        }

        try {
            await resgister.register({
                school: selectedSchool as School,
                major: selectedMajor as Major,
                educationStatus: selectedStatus as EducationStatus,
            });
            window.location.replace("/");
        } catch (error: any) {
            console.error(
                "회원정보 업데이트 실패:",
                error.response?.data || error.message
            );
        }
    };

    const handleDropdownToggle = (dropdown: string) => {
        if (dropdown === "school") {
            toggleSchool();
            closeMajor();
            closeStatus();
        } else if (dropdown === "major") {
            closeSchool();
            toggleMajor();
            closeStatus();
        } else if (dropdown === "status") {
            closeSchool();
            closeMajor();
            toggleStatus();
        }
    };

    const schoolName = [
        { label: "부산소프트웨어마이스터고등학교", value: "BSSM" },
        { label: "대구소프트웨어마이스터고등학교", value: "DGSM" },
        { label: "대덕소프트웨어마이스터고등학교", value: "DSM" },
        { label: "광주소소프트웨어마이스터고등학교", value: "GSM" },
    ];

    const majorName = [
        { label: "소프트웨어개발과", value: "SOFTWARE" },
        { label: "임베디드개발과", value: "EMBEDDED" },
        { label: "정보보안과", value: "SECURITY" },
        { label: "스마트IoT과", value: "IOT" },
        { label: "인공지능소프트웨어개발과", value: "AI" },
    ];

    const statuseName = [
        { label: "재학중", value: "ENROLLED" },
        { label: "졸업", value: "GRADUATED" },
    ];

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
                                    selectedItem={selectedSchool || ""}
                                    items={schoolName.map(
                                        (school) => school.label
                                    )}
                                    onSelect={(item) => {
                                        const selectedSchoolValue =
                                            schoolName.find(
                                                (school) =>
                                                    school.label === item
                                            )?.value ?? null;
                                        setSelectedSchool(selectedSchoolValue);
                                        handleDropdownToggle("school");
                                    }}
                                >
                                    <Select
                                        width={400}
                                        placeholder="학교 선택"
                                        isOpen={isSchoolOpen}
                                        value={
                                            schoolName.find(
                                                (school) =>
                                                    school.value ===
                                                    selectedSchool
                                            )?.label || ""
                                        }
                                        onClick={() =>
                                            handleDropdownToggle("school")
                                        }
                                    />
                                </Dropdown>
                            </div>
                        </InputTemplate>

                        <InputTemplate>
                            <Label>과</Label>
                            <div ref={majorRef}>
                                <Dropdown
                                    isOpen={isMajorOpen}
                                    selectedItem={selectedMajor || ""}
                                    items={majorName.map(
                                        (major) => major.label
                                    )}
                                    onSelect={(item) => {
                                        const selectedMajorValue =
                                            majorName.find(
                                                (major) => major.label === item
                                            )?.value ?? null;
                                        setSelectedMajor(selectedMajorValue);
                                        handleDropdownToggle("major");
                                    }}
                                >
                                    <Select
                                        width={400}
                                        placeholder="학과 선택"
                                        isOpen={isMajorOpen}
                                        value={
                                            majorName.find(
                                                (major) =>
                                                    major.value ===
                                                    selectedMajor
                                            )?.label || ""
                                        }
                                        onClick={() =>
                                            handleDropdownToggle("major")
                                        }
                                    />
                                </Dropdown>
                            </div>
                        </InputTemplate>

                        <InputTemplate>
                            <Label>재학 상태</Label>
                            <div ref={statusRef}>
                                <Dropdown
                                    isOpen={isStatusOpen}
                                    selectedItem={selectedStatus || ""}
                                    items={statuseName.map(
                                        (status) => status.label
                                    )}
                                    onSelect={(item) => {
                                        const selectedStatusValue =
                                            statuseName.find(
                                                (status) =>
                                                    status.label === item
                                            )?.value ?? null;
                                        setSelectedStatus(selectedStatusValue);
                                        handleDropdownToggle("status");
                                    }}
                                >
                                    <Select
                                        width={400}
                                        placeholder="재학 상태"
                                        isOpen={isStatusOpen}
                                        value={
                                            statuseName.find(
                                                (status) =>
                                                    status.value ===
                                                    selectedStatus
                                            )?.label || ""
                                        }
                                        onClick={() =>
                                            handleDropdownToggle("status")
                                        }
                                    />
                                </Dropdown>
                            </div>
                        </InputTemplate>

                        <Button width="100%" onClick={handleRegister}>
                            회원가입
                        </Button>

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
