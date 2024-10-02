'use client';
import React, { useState } from 'react';
import { Icon } from '@repo/ui/src';

type FilterType = '최신순' | '좋아요순' | '팔로우';

const filter: FilterType[] = ['최신순', '좋아요순', '팔로우'];

const dummyPost = [
  {
    title: '유데미 개발 챌린지 같이 해 볼 사람?',
    content: `
    클론코딩 나가보려고 하는데 같이 해요. 다른 학교 상관없음
  🙌 유데미 개발 챌린지로 클론코딩 완성할 사람 찾습니다 
  (프론트엔드 / 백엔드 / 게임개발)
  
  유데미 개발 챌린지에서 무엇을 하나요? 
  🎯 현업 개발자 라이브 특강 2회
  😀 챌린지 참여자에게 코드 리뷰 기회
  💪4주 동안 주차별 미션
  🙌멘토와의 1:1 커피챗
  
  개발 카테고리는 ▲프론트엔드 ▲백엔드 ▲게임 개발 총 3개로 나뉘어 수강생들이 니즈에 맞는 강의를 들을 수 있다. 각 영역은 임동준 우아한형제들 개발자, 박재호 레인보우브레인 CTO(최고기술책임자), 이도행 라인게임즈 소프트웨어 엔지니어 등 우수한 멘토가 직접 성장을 지원한다.
  
  또한 커리큘럼이 진행되는 동안 현직 개발자가 진행하는 라이브 특강을 2회 실시하고, 미션 수행 우수자로 선정된 수강생에게는 멘토와의 1:1 커피챗 기회를 함께 제공한다.  ‘유데미 개발 챌린지: 클론코딩편’은 오는 9월 22일까지 유데미 큐레이션 공식 홈페이지를 통해 지원할 수 있다. 개발자 취업을 꿈꾸는 누구나 신청할 수 있으며, 커리큘럼은 9월 23일부터 10월 18일까지 약 한 달간 진행된다.
  
  출처 : 비즈서울`,
    date: '2024-09-16',
    writer: 'gimsua672',
    hashtags: ['#대회', '#유데미아카데미챌린지', '#클론코딩', '#같이할사람'],
    commentCount: 13,
    likeCount: 68,
  },
];

export default function Community() {
  const [selected, setSelected] = useState<FilterType>('최신순');
  const [postId, setPostId] = useState<string | null>('1');

  return (
    <>
      {postId && (
        <div className="absolute bg-[rgba(18,18,18,0.5)] w-[100vw] h-[100vh] z-[2] flex justify-center align-middle">
          <div className="w-[788px] rounded-[12px] mt-[80px] overflow-hidden bg-white">
            <div className="w-[100%] h-[100px] bg-[#EEF2F5] py-[20px] px-[30px]">
              <div className="flex flex-col gap-[8px]">
                <div className="flex gap-[12px] items-center">
                  <div className="flex gap-[8px] items-center">
                    <div className="w-[32px] h-[32px] rounded-[50%] bg-[#D9D9D9]"></div>
                    <div className="text-text text-p3">gimsua672</div>
                  </div>
                  <div className="text-primary-400">팔로우</div>
                </div>
                <div className="flex gap-[20px]">
                  <div className="btn-3 text-subText2">2024 - 09 - 16</div>
                  <div className="btn-3 text-subText2 flex gap-[8px]">
                    <span>#유데미</span>
                    <span>#대회</span>
                    <span>#클론코딩</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%] flex flex-col gap-[24px] px-[36px] py-[28px]">
              <div className="text-H4">유데미 개발 챌린지 같이 해 볼 사람?</div>
              <div className="text-p1">
                클론코딩 나가보려고 하는데 같이 해요. 다른 학교 상관없음
                <br />
                🙌 유데미 개발 챌린지로 클론코딩 완성할 사람 찾습니다 <br />
                (프론트엔드 / 백엔드 / 게임개발)
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="bg-background h-[calc(100vh_-_80px)] flex flex-col gap-[20px] pt-[142px] items-center">
        <div className="flex gap-[12px] w-[936px]">
          {filter.map((filterItem) => (
            <div
              key={filterItem}
              onClick={() => setSelected(filterItem)}
              className={`px-[20px] py-[9px] rounded-[8px] cursor-pointer ${selected === filterItem ? 'bg-primary-400' : 'bg-[#EDEDED]'} flex justify-center items-center text-btn2 ${selected === filterItem ? 'text-white' : 'text-black'}`}>
              {filterItem}
            </div>
          ))}
        </div>
        {dummyPost.map((post, index) => (
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
                        <div
                          key={hashtagIndex}
                          className="text-[#68687A] text-p3">
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
        ))}
      </div>
    </>
  );
}
