'use client';

import { Dropdown } from '@moija/ui';
import { useState } from 'react';

type DropdownTriggerProps = {
  placeholder?: string;
  selectedItem?: string;
  width?: string | number;
  isOpen: boolean;
  onClick: () => void;
};

const SelectBar = ({
  placeholder = '선택해주세요',
  selectedItem,
  width,
  isOpen,
  onClick,
}: DropdownTriggerProps) => {
  return (
    <button
      className={`${
        typeof width === 'string' ? width : ''
      } flex items-center justify-between w-full px-4 py-2 bg-white border rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500`}
      onClick={onClick}
      aria-haspopup="true"
      aria-expanded={isOpen}>
      <span className="text-gray-700">{selectedItem || placeholder}</span>
      <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
        ▼
      </span>
    </button>
  );
};

// Usage Example
export default function Home() {
  const dummy = ['Typescript', 'TypeORM', 'Prototype'];
  const [selected, setSelected] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item: string) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">드롭다운 데모</h1>

      <Dropdown items={dummy} onSelect={handleSelect}>
        <SelectBar
          placeholder="선택해주세요"
          selectedItem={selected}
          width="w-72"
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
      </Dropdown>

      {selected && (
        <p className="text-gray-600">
          선택된 항목: <span className="font-medium">{selected}</span>
        </p>
      )}
    </main>
  );
}
