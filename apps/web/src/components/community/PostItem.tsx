import React from 'react';
import { Icon } from '@repo/ui/src';
import { PostType } from '../../utils/types/Post';

type PostListProps = {
  post: PostType;
  setPostId: (id: string) => void;
  index: number;
};

export const PostItem: React.FC<PostListProps> = ({
  post,
  setPostId,
  index,
}) => {
  return (
    <article
      className="w-[936px] h-[356px] pt-[28px] px-[36px] flex flex-col gap-[16px] align-middle rounded-[12px] bg-white shadow-[0px_2px_12px_0px_rgba(171,190,209,0.25)]"
      key={index}
      onClick={() => {
        setPostId(index.toString());
      }}>
      <div className="relative w-[100%] h-[264px]">
        <div className="w-[100%] h-[264px] flex flex-col gap-[24px]">
          <h4 className="text-H4 text-text">{post.title}</h4>
          <div className="text-p1 overflow-hidden text-text">
            {post.content}
          </div>
        </div>
        <div className="absolute z-[1] bottom-0 w-[100%] h-[120px] bg-gradient-to-t from-white to-transparent [background:linear-gradient(0deg,#FFF 0%,rgba(255,255,255,0.64) 51.13%,rgba(255,255,255,0.32) 75.88%,rgba(255,255,255,0) 100%)]"></div>
      </div>
      <div className="w-[100%] flex justify-between">
        <div className="flex gap-[12px] items-center">
          <div className="flex gap-[4px] text-p3">
            <Icon.HeartFill />
            {post.likeCount}개
          </div>
          <div className="flex gap-[4px] text-p3 text-text">
            <Icon.Chat />
            {post.commentCount}개
          </div>
        </div>
        <div className="flex gap-[28px] items-center">
          <div className="flex gap-[12px]">
            {post.hashtags.map((hashtag, hashtagIndex) => {
              if (hashtagIndex <= 1)
                return (
                  <div key={hashtagIndex} className="text-[#68687A] text-p3">
                    {hashtag}
                  </div>
                );
            })}
          </div>
          <div className="text-subText1 text-p3">{post.date}</div>
          <div className="text-text text-btn3 flex gap-[8px] items-center">
            <div className="rounded-full bg-gray-400 w-[32px] h-[32px] flex-shrink-0"></div>
            {post.writer}
          </div>
        </div>
      </div>
    </article>
  );
};
