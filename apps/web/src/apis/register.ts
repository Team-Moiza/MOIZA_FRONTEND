import { instance } from "./instance";
import { School, Major, EducationStatus } from "../app/register/enum";

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

    getProfile: async () => {
        const response = await instance.get("/users");
        return response.data;
    },
};
