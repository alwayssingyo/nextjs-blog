import { useState } from 'react';

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Category({ categories, selected, onClick }: Props) {
  return (
    <nav className='flex-none px-8 text-center hidden sm:inline-block'>
      <h2 className='text-xl font-bold border-b-2 border-yellow-200 mb-4'>
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button
              className={`text-sm  mt-1 hover:text-lime-400 ${
                category === selected && 'text-lime-400'
              }`}
              onClick={() => {
                onClick(category);
              }}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
