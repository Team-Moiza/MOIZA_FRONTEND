import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { customAxios } from '../customAxios';
import { DetailPostType, PostType, PostWriteType } from '../../types/post';

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

  const request = async (body: PostWriteType) => {
    await customAxios.post<PostWriteType>(`/post`, body);
  };

  return useMutation({
    mutationFn: request,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['community'] });
      console.log('게시물 생성 성공:', data);
    },
    onError: (error) => {
      console.error('게시물 생성 실패:', error);
    },
  });
};

/* 커뮤니티 글 수정 */
export const useUpdateCommunityPost = (postId: string) => {
  const queryClient = useQueryClient();

  const request = async (body: Omit<PostWriteType, 'image'>) => {
    await customAxios.patch<Omit<PostWriteType, 'image'>>(
      `/post/${postId}`,
      body
    );
  };

  return useMutation({
    mutationFn: request,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['community'] });
      console.log('게시물 수정 성공:', data);
    },
    onError: (error) => {
      console.error('게시물 수정 실패:', error);
    },
  });
};

/* 커뮤니티 글 삭제 */
export const useDeleteCommunityPost = (postId: string) => {
  const queryClient = useQueryClient();

  const request = async () => {
    await customAxios.delete(`/post/${postId}`);
  };

  return useMutation({
    mutationFn: request,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['community'] });
      console.log('게시물 삭제 성공');
    },
    onError: (error) => {
      console.error('게시물 삭제 실패:', error);
    },
  });
};
