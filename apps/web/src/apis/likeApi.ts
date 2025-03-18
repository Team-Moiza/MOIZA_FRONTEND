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

    getLikedPortfolios: async () => {
        const response = await instance.get(`/likes`);
        return response.data.map((portfolio: any) => ({
            id: portfolio.portfolioId,
            name: portfolio.name,
            profileImg: portfolio.profile,
            school: portfolio.school,
            major: portfolio.major,
            introduce: portfolio.introduce,
            likeCnt: portfolio.likeCnt
        }));
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
