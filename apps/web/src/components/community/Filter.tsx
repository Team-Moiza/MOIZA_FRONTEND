import React from 'react';

type FilterProps = {
  selected: '최신순' | '좋아요순' | '팔로우';
  setSelected: (filter: '최신순' | '좋아요순' | '팔로우') => void;
};

const filters: FilterProps['selected'][] = ['최신순', '좋아요순', '팔로우'];

export const Filter: React.FC<FilterProps> = ({ selected, setSelected }) => {
  return (
    <div className="flex gap-[12px] w-[936px]">
      {filters.map((filterItem) => (
        <div
          key={filterItem}
          onClick={() => setSelected(filterItem)}
          className={`px-[20px] py-[9px] rounded-[8px] cursor-pointer ${selected === filterItem ? 'bg-primary-400' : 'bg-[#EDEDED]'} flex justify-center items-center text-btn2 ${selected === filterItem ? 'text-white' : 'text-black'}`}>
          {filterItem}
        </div>
      ))}
    </div>
  );
};
