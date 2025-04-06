import { instance } from "./instance";
import { School, Major, EducationStatus } from "../enum/enums";

interface RegisterRequest {
    school: School;
    major: Major;
    educationStatus: EducationStatus;
}

export const resgister = {
    register: async (data: RegisterRequest) => {
        const response = await instance.patch("/users/register", data);
        return response.data;
    },
};
