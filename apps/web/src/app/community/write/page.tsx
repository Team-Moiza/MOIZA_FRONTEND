'use client';
import React, { useState } from 'react';
import { Icon } from '@repo/ui/src';

type PostType = 'post' | 'survey';

const EditedArray = [
  Icon.Bold,
  Icon.Italic,
  Icon.LineThrough,
  Icon.Highlight,
  Icon.Quotes,
  Icon.Link,
  Icon.Code,
];

export default function CommunityWrite() {
  const [selectedOption, setSelectedOption] = useState<PostType>('post');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value as PostType);
  };

  return (
    <div className="bg-background h-[calc(100vh_-_80px)] flex flex-col gap-[20px] pt-[142px] items-center">
      <div className="w-[936px] flex flex-col gap-[12px]">
        <div className="flex gap-[20px] w-[100%] px-[8px]">
          <label className="flex gap-[8px] items-center text-btn3">
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
          <label className="flex gap-[8px] items-center text-btn3">
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
        <input
          type="text"
          className="w-[100%] h-[52px] px-[20px] rounded-[4px] outline-none border-accent border-[1px] text-text placeholder-subText2 text-p1"
          placeholder="제목을 입력해주세요"
        />
        <div className="flex gap-[8px] w-[100%]">
          <input
            className="px-[12px] w-[94px] h-[30px] flex justify-center items-center bg-[rgba(18,18,18,0.04)] placeholder-subText1 text-btn2 rounded-[4px] outline-none"
            placeholder="#태그 입력"
          />
        </div>
        <div className="w-[100%] mt-[2px] border-[1px] border-accent min-h-[272px] rounded-[4px] bg-white relative">
          <div className="w-[100%] h-[40px] border-b-[1px] border-accent flex items-center gap-[8px] px-[12px]">
            {EditedArray.map((icon, index) => {
              return (
                <React.Fragment key={index}>
                  {icon()}
                  {index !== EditedArray.length && (
                    <div className="border-[1px] border-accent h-[24px] w-[0]" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
          <textarea
            placeholder="내용을 입력해주세요"
            className="outline-none w-[100%] min-h-[100%] resize-none p-[20px] placeholder-subText2 text-text text-p1"></textarea>
        </div>
      </div>
    </div>
  );
}
