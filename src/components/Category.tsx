'use client';

export default function Category() {
  return (
    <nav className='flex-none px-8 text-center'>
      <div className='text-xl font-bold border-b-2 border-yellow-200 mb-4'>
        Category
      </div>
      <ul>
        <li>
          <button className='text-sm hover:text-lime-400'>All Posts</button>
        </li>
        <li>
          <button className='text-sm mt-1 hover:text-lime-400'>my story</button>
        </li>
        <li>
          <button className='text-sm mt-1 hover:text-lime-400'>frontend</button>
        </li>
        <li>
          <button className='text-sm mt-1 hover:text-lime-400'>backend</button>
        </li>
        <li>
          <button className='text-sm mt-1 hover:text-lime-400'>
            javascript
          </button>
        </li>
      </ul>
    </nav>
  );
}
