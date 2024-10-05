import React, { useState } from 'react';
import { Icon } from '@repo/ui/src';
import { PostType } from '../../utils/types/Post';

type PostDetailProps = {
  posts: PostType[];
  postId: string | null;
  setPostId: (id: string | null) => void;
};

export const PostDetail = ({ posts, postId, setPostId }: PostDetailProps) => {
  const post = postId ? posts[Number(postId)] : null;

  const [comment, setComment] = useState('');

  if (!post) return null;

  return (
    <div
      className="absolute bg-[rgba(18,18,18,0.5)] w-[100vw] h-[100vh] z-[2] flex justify-center align-middle"
      onClick={() => {
        setPostId(null);
      }}>
      <div
        className="w-[788px] rounded-[12px] mt-[80px] overflow-hidden bg-white flex-none h-max"
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <div className="w-[100%] h-[100px] bg-[#EEF2F5] py-[20px] px-[30px]">
          <div className="flex flex-col gap-[8px]">
            <div className="flex gap-[12px] items-center">
              <div className="flex gap-[8px] items-center">
                <div className="w-[32px] h-[32px] rounded-[50%] bg-[#D9D9D9]"></div>
                <div className="text-text text-p3">{post.writer}</div>
              </div>
              <div className="text-primary-400">팔로우</div>
            </div>
            <div className="flex gap-[20px]">
              <div className="btn-3 text-subText2">{post.date}</div>
              <div className="btn-3 text-subText2 flex gap-[8px]">
                {post.hashtags.map((hashtag, index) => (
                  <span key={index}>{hashtag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex flex-col gap-[24px] px-[36px] pt-[28px] pb-[124px]">
          <div className="text-H4">{post.title}</div>
          <div className="text-p1">{post.content}</div>
        </div>
        <div className="w-[100%] flex justify-center">
          <div className="w-[132px] h-[52px] rounded-[12px] bg-accent flex gap-[4px] justify-center items-center cursor-pointer">
            <Icon.Heart />
            <div className="text-btn2">{post.likeCount}개</div>
          </div>
        </div>
        <div className="w-[100%] mt-[84px] flex justify-center gap-[12px] pb-[40px]">
          <div className="w-[40px] h-[40px] rounded-[50%] bg-gray-400"></div>
          <input
            type="text"
            className="w-[546px] h-[44px] bg-accent rounded-[8px] pl-[16px] placeholder-subText2 text-black text-btn3 focus:outline-none"
            placeholder="add a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div
            className={`w-[68px] h-[44px] rounded-[8px] flex justify-center items-center ${
              comment
                ? 'text-primary-400 cursor-pointer'
                : 'text-subText2 cursor-not-allowed'
            } text-btn2 bg-accent`}>
            추가
          </div>
        </div>
      </div>
    </div>
  );
};
