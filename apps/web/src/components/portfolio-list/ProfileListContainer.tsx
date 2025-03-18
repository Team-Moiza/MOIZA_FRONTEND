import ProfileList from "./ProfileList";
import CustomPagination from "./Pagination";
import { Profile } from "../../types/portfolio";

interface ProfileListContainerProps {
    paginatedProfiles: Profile[];
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const ProfileListContainer = ({
    paginatedProfiles,
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
}: ProfileListContainerProps) => {
    return (
        <div className="flex flex-col gap-5 w-[93%]">
            <ProfileList paginatedProfiles={paginatedProfiles} />
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
