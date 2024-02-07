'use client';

import { useState } from 'react';

type Props = {
  onClick: (category: string) => void;
};

export default function Category({ onClick }: Props) {
  const [active, setActive] = useState<number>(0);

  return (
    <nav className='flex-none px-8 text-center hidden sm:inline-block'>
      <div className='text-xl font-bold border-b-2 border-yellow-200 mb-4'>
        Category
      </div>
      <ul>
        <li>
          <button
            className={
              active === 0
                ? 'text-sm hover:text-lime-400 text-lime-400'
                : 'text-sm hover:text-lime-400'
            }
            onClick={() => {
              onClick('all');
              setActive(0);
            }}
          >
            All Posts
          </button>
        </li>
        <li>
          <button
            className={
              active === 1
                ? 'text-sm  mt-1  hover:text-lime-400 text-lime-400'
                : 'text-sm   mt-1 hover:text-lime-400'
            }
            onClick={() => {
              onClick('my story');
              setActive(1);
            }}
          >
            my story
          </button>
        </li>
        <li>
          <button
            className={
              active === 2
                ? 'text-sm  mt-1  hover:text-lime-400 text-lime-400'
                : 'text-sm   mt-1 hover:text-lime-400'
            }
            onClick={() => {
              onClick('frontend');
              setActive(2);
            }}
          >
            frontend
          </button>
        </li>
        <li>
          <button
            className={
              active === 3
                ? 'text-sm  mt-1  hover:text-lime-400 text-lime-400'
                : 'text-sm   mt-1 hover:text-lime-400'
            }
            onClick={() => {
              onClick('backend');
              setActive(3);
            }}
          >
            backend
          </button>
        </li>
        <li>
          <button
            className={
              active === 4
                ? 'text-sm  mt-1  hover:text-lime-400 text-lime-400'
                : 'text-sm   mt-1 hover:text-lime-400'
            }
            onClick={() => {
              onClick('javascript');
              setActive(4);
            }}
          >
            javascript
          </button>
        </li>
      </ul>
    </nav>
  );
}
