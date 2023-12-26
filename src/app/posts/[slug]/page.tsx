import MarkdownCont from '@/components/MarkdownCont/MarkdownCont';
import { getPostData, getPosts } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FaCalendar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const posts = await getPosts();
  const data = await getPostData(slug);
  const post = posts.filter((val) => val.path === slug)[0];

  if (!data) {
    redirect('/posts');
  }

  return (
    <div className='mt-6'>
      <div className='relative h-96'>
        <Image
          src={`/images/posts/${post.path}.png`}
          alt=''
          layout='fill'
          className='!h-full object-cover z-0 rounded-t-lg'
        />
      </div>
      <div className='bg-stone-900 rounded-b-lg'>
        {/* info */}
        <div className='pt-5 pb-8 px-10'>
          <div className='text-right text-sm font-bold text-stone-400'>
            <FaCalendar className='inline-block mr-2 mb-0.5' />
            {post.date}
          </div>
          <h1 className='text-4xl  font-bold'>{post.title}</h1>
          <p className='pt-1'>{post.description}</p>
          <span className='inline-block w-32 h-1 bg-lime-300'></span>
        </div>

        {/* markdown content */}
        <div className='pb-2 px-10'>{<MarkdownCont postData={data} />}</div>

        {/* navigation */}
        <div className='flex h-60 mb-10'>
          <div className='flex-1 bg-white rounded-bl-lg'>
            <Link href='' className='relative inline-block w-full h-full'>
              <FaArrowLeft
                color='black'
                className='absolute left-8 top-1/2 -translate-y-2/4 w-8 h-8'
              />
              <div></div>
              <div></div>
            </Link>
          </div>
          <div className='flex-1 bg-white rounded-br-lg'>
            <Link href='' className='relative inline-block w-full h-full'>
              <FaArrowRight
                color='black'
                className='absolute right-8 top-1/2 -translate-y-2/4 w-8 h-8'
              />
              <div></div>
              <div></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
