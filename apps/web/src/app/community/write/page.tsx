'use client';
import React, { useState } from 'react';

type PostType = 'post' | 'survey';

export default function CommunityWrite() {
  const [selectedOption, setSelectedOption] = useState<PostType>('post');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value as PostType);
  };

  return (
    <div className="bg-background h-[calc(100vh_-_80px)] flex flex-col gap-[20px] pt-[142px] items-center">
      <div className="w-[936px] flex flex-col">
        <div className="flex gap-[20px] w-[100%] px-[8px]">
          <label className="flex gap-[8px] items-center">
            <input
              type="radio"
              value="post"
              checked={selectedOption === 'post'}
              onChange={handleChange}
              className="hidden"
            />
            <div
              className={`w-[16px] h-[16px] rounded-[50%] border-[1px] ${selectedOption === 'post' ? 'border-primary-400' : 'border-subText2'} bg-background flex justify-center items-center`}>
              <div
                className={`w-[8px] h-[8px] rounded-[50%] bg-primary-400 ${selectedOption === 'post' ? 'block' : 'hidden'}`}></div>
            </div>
            게시물
          </label>
          <label className="flex gap-[8px] items-center">
            <input
              type="radio"
              value="survey"
              checked={selectedOption === 'survey'}
              onChange={handleChange}
              className="hidden"
            />
            <div
              className={`w-[16px] h-[16px] rounded-[50%] border-[1px] ${selectedOption === 'survey' ? 'border-primary-400' : 'border-subText2'} bg-background flex justify-center items-center`}>
              <div
                className={`w-[8px] h-[8px] rounded-[50%] bg-primary-400 ${selectedOption === 'survey' ? 'block' : 'hidden'}`}></div>
            </div>
            설문
          </label>
        </div>
      </div>
    </div>
  );
}
