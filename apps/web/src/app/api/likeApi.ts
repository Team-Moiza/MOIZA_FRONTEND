import { instance } from "../../apis/instance";

export const likeApi = {
    getLikeStatus: async (portfolioId: string) => {
        try {
            const response = await instance.get(`/likes/${portfolioId}`);
            return {
                isLiked: response.data === true,
                likeCount: null,
            };
        } catch (error) {
            console.error("좋아요 상태 조회 실패:", error);
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
