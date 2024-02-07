'use client';

import { Posts } from '@/service/posts';
import Category from '@/components/Category';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Posts({ posts }: { posts: Posts[] }) {
  const [filterdPosts, setFilterdPosts] = useState<Posts[]>(posts);

  const onFilter = (category: string) => {
    if (category === 'all') {
      setFilterdPosts(posts);
    } else {
      setFilterdPosts(posts.filter((post) => post.category === category));
    }
  };

  return (
    <>
      <div className='flex-auto h-full'>
        <div className='flex flex-wrap'>
          {filterdPosts.map((post) => (
            <div className='inline-block lg:w-1/3 md:w-1/2 sm:w-full w-full p-3'>
              <Link
                href={`/posts/${post.path}`}
                key={post.path}
                className='inline-block w-full h-full rounded-lg bg-white'
              >
                <div className='relative w-full h-40'>
                  <Image
                    src={`/images/posts/${post.path}.png`}
                    alt=''
                    layout='fill'
                    className='!h-full object-cover z-0 rounded-t-lg'
                    sizes='(max-width: 732px) 90vw, (max-width: 992px) 45vw, 320px'
                  />
                </div>
                <div className='text-black p-4 rounded-b-lg'>
                  <div className='text-right text-xs mb-2'>{post.date}</div>
                  <div className='text-center'>
                    <div className='font-bold'>{post.title}</div>
                    <div className='text-sm'>{post.description}</div>
                    <div className='inline-block p-1 mt-2 bg-green-100 text-xs rounded-md'>
                      {post.category}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Category onClick={onFilter} />
    </>
  );
}
