"use client";

import { useBoolean, useOutsideClickRef } from "@moija/hooks";
import { Button, Dropdown, InputTemplate, Label, Select } from "@moija/ui";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { resgister } from "../api/register";
import { School, Major, EducationStatus } from "./enum";

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

    const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
    const [selectedMajor, setSelectedMajor] = useState<Major | null>(null);
    const [selectedStatus, setSelectedStatus] =
        useState<EducationStatus | null>(null);

    const schools = [
        { value: School.DGSM, label: "대구소프트웨어마이스터고" },
        { value: School.DSM, label: "대덕소프트웨어마이스터고" },
        { value: School.BSSM, label: "부산소프트웨어마이스터고" },
        { value: School.GSM, label: "광주소프트웨어마이스터고" },
    ];

    const majors = [
        { value: Major.SOFTWARE, label: "소프트웨어개발과" },
        { value: Major.EMBEDDED, label: "임베디드개발과" },
        { value: Major.SECURITY, label: "정보보안과" },
        { value: Major.IOT, label: "스마트IoT과" },
        { value: Major.AI, label: "인공지능소프트웨어개발과" },
    ] as const;

    const statuses = [
        { value: EducationStatus.ENROLLED, label: "재학중" },
        { value: EducationStatus.GRADUATED, label: "졸업" },
    ];

    const handleRegister = async () => {
        if (!selectedSchool || !selectedMajor || !selectedStatus) {
            alert("모든 항목을 선택해주세요.");
            return;
        }

        try {
            await resgister.register({
                school: selectedSchool,
                major: selectedMajor,
                educationStatus: selectedStatus,
            });
            router.push("/");
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
                                    selectedItem={
                                        schools.find(
                                            (item) =>
                                                item.value === selectedSchool
                                        )?.label || ""
                                    }
                                    items={schools.map((item) => item.label)}
                                    onSelect={(item) => {
                                        const selectedValue =
                                            schools.find(
                                                (s) => s.label === item
                                            )?.value || null;
                                        setSelectedSchool(selectedValue);
                                        handleDropdownToggle("school");
                                    }}
                                >
                                    <Select
                                        width={400}
                                        placeholder="학교 선택"
                                        isOpen={isSchoolOpen}
                                        value={
                                            schools.find(
                                                (item) =>
                                                    item.value ===
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
                                    selectedItem={
                                        majors.find(
                                            (item) =>
                                                item.value === selectedMajor
                                        )?.label || ""
                                    }
                                    items={majors.map((item) => item.label)}
                                    onSelect={(item) => {
                                        const selectedValue =
                                            majors.find((m) => m.label === item)
                                                ?.value || null;
                                        setSelectedMajor(selectedValue);
                                        handleDropdownToggle("major");
                                    }}
                                >
                                    <Select
                                        width={400}
                                        placeholder="학과 선택"
                                        isOpen={isMajorOpen}
                                        value={
                                            majors.find(
                                                (item) =>
                                                    item.value === selectedMajor
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
                                    selectedItem={
                                        statuses.find(
                                            (item) =>
                                                item.value === selectedStatus
                                        )?.label || ""
                                    }
                                    items={statuses.map((item) => item.label)}
                                    onSelect={(item) => {
                                        const selectedValue =
                                            statuses.find(
                                                (s) => s.label === item
                                            )?.value || null;
                                        setSelectedStatus(selectedValue);
                                        handleDropdownToggle("status");
                                    }}
                                >
                                    <Select
                                        width={400}
                                        placeholder="재학 상태"
                                        isOpen={isStatusOpen}
                                        value={
                                            statuses.find(
                                                (item) =>
                                                    item.value ===
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
