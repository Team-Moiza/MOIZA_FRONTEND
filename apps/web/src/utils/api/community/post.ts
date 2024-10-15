import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { customAxios } from '../customAxios';
import { DetailPostType, PostType } from '../../types/post';

/* 커뮤니티 글 전체 조회 */
export const useGetAllCommunityPost = () => {
  const response = async () => {
    const { data } = await customAxios.get<PostType>(`/`);
    return data;
  };

  return useQuery({
    queryKey: ['community'],
    queryFn: response,
  });
};

/* 커뮤니티 글 상세 조회 */
export const useGetDetailCommunityPost = (postId: string) => {
  const response = async () => {
    const { data } = await customAxios.get<DetailPostType>(`/post/${postId}`);
    return data;
  };

  return useQuery({
    queryKey: ['community', postId],
    queryFn: response,
    enabled: !!postId,
  });
};

/* 커뮤니티 글 작성 */
export const useCreateCommunityPost = () => {
  const queryClient = useQueryClient();

  const createPost = async (body: any) => {
    const { data } = await customAxios.post(`/post`, body);
    return data;
  };

  return useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['community'] });
      console.log('게시물 생성 성공:', data);
    },
    onError: (error) => {
      console.error('게시물 생성 실패:', error);
    },
  });
};
