import LikeList from '@/components/LikeList';
import Profile from '@/components/Profile';
import { getPosts } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';

export default async function Home() {
  const data = await getPosts();
  const featuedData = data
    .filter((val) => val.featured === true)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .reverse();
  const likeData = data
    .filter((val) => val.featured === false)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .reverse();

  return (
    <div className='min-h-full px-4 pt-4 pb-10'>
      <Profile />

      {/* Featured Posts */}
      <div className='mt-10 mb-3 text-xl font-bold'>Featured Posts</div>
      <div className='flex flex-wrap -m-3'>
        {featuedData.map((post) => (
          <div className='inline-block w-1/3 p-3'>
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

      {/* You may like */}
      <div className='mt-10 mb-3 text-xl font-bold'>You may like</div>
      <div className=''>
        <LikeList likeData={likeData} />
      </div>
    </div>
  );
}
