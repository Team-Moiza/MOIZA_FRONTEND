import React from "react";
import ProfileList from "./ProfileList";
import CustomPagination from "./Pagination";
import { Profile } from "../../types/portfolio";

interface ProfileListContainerProps {
    paginatedProfiles: Profile[];
    isLoggedOut: boolean;
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const ProfileListContainer: React.FC<ProfileListContainerProps> = ({
    paginatedProfiles,
    isLoggedOut,
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
}) => {
    return (
        <div className="flex flex-col gap-5 w-[93%]">
            <ProfileList
                paginatedProfiles={paginatedProfiles}
                isLoggedOut={isLoggedOut}
            />
            <CustomPagination
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={onPageChange}
            />
        </div>
    );
};

export default ProfileListContainer;
