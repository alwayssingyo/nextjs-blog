import MarkdownCont from '@/components/MarkdownCont/MarkdownCont';
import { getPostData, getPosts } from '@/service/posts';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { FaCalendar } from 'react-icons/fa';

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
      <div className='bg-stone-900 px-10 pb-10'>
        <div className='pt-5 pb-8'>
          <div className='text-right text-sm font-bold text-stone-400'>
            <FaCalendar className='inline-block mr-2 mb-0.5' />
            {post.date}
          </div>
          <h1 className='text-4xl  font-bold'>{post.title}</h1>
          <p className='pt-1'>{post.description}</p>
          <span className='inline-block w-32 h-1 bg-lime-300'></span>
        </div>
        {<MarkdownCont postData={data} />}
      </div>
    </div>
  );
}
