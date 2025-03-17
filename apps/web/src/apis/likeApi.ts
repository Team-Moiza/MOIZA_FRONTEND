import { instance } from "./instance";

export const likeApi = {
    getLikeStatus: async (portfolioId: string) => {
        try {
            const response = await instance.get(`/likes/${portfolioId}`);
            return {
                isLiked: response.data === true,
                likeCount: null,
            };
        } catch (error) {
            return {
                isLiked: false,
                likeCount: null,
            };
        }
    },

    addLike: async (portfolioId: string) => {
        const response = await instance.post(
            `/likes?portfolioId=${portfolioId}`
        );
        return response.data;
    },

    removeLike: async (portfolioId: string) => {
        const response = await instance.put(
            `/likes?portfolioId=${portfolioId}`
        );
        return response.data;
    },
};
