import { instance } from "../../apis/instance";

type CodeItem = {
    id: number;
    keyword: string;
};

const getCodes = async (keyword?: string): Promise<CodeItem[]> => {
    try {
        const response = await instance.get("/codes", {
            params: keyword ? { keyword } : {},
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default getCodes;
