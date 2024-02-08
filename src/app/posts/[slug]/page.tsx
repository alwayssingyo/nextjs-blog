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
  const data = await getPostData(slug);

  if (!data) {
    redirect('/posts');
  }

  return (
    <div className='mt-6'>
      <div className='relative h-96'>
        <Image
          src={`/images/posts/${data.path}.png`}
          alt=''
          layout='fill'
          className='!h-full object-cover z-0 rounded-t-lg'
        />
      </div>
      <div className='bg-gray-100 rounded-b-lg'>
        {/* info */}
        <div className='pt-5 pb-8 px-10 text-black'>
          <div className='text-right text-sm font-bold text-stone-400'>
            <FaCalendar className='inline-block mr-2 mb-0.5' />
            {data.date}
          </div>
          <h1 className='text-4xl font-bold'>{data.title}</h1>
          <p className='pt-1 text-stone-700'>{data.description}</p>
          <span className='inline-block w-32 h-1 bg-sky-700'></span>
        </div>

        {/* markdown content */}
        <div className='pb-2 px-10'>
          {<MarkdownCont postData={data.content} />}
        </div>

        {/* navigation */}
        <div className='flex h-60 mb-10'>
          {data.prev && (
            <div className='flex-1 bg-white rounded-bl-lg overflow-hidden'>
              <Link
                href={`/posts/${data.prev?.path}`}
                className='relative inline-block w-full h-full bg-black'
              >
                <div className='absolute inline-block w-full h-full z-0'>
                  <Image
                    src={`/images/posts/${data.prev?.path}.png`}
                    alt=''
                    layout='fill'
                  />
                </div>
                <div className='absolute inline-block w-full h-full z-1 bg-black opacity-60'></div>
                <FaArrowLeft
                  color='white'
                  className='absolute left-8 inset-y-1/2 -translate-y-1/2 w-8 h-8 z-2'
                />
                <div className='inline-block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center z-3'>
                  <div className='text-2xl font-bold'>{data.prev?.title}</div>
                  <div className='mt-1'>{data.prev?.description}</div>
                </div>
              </Link>
            </div>
          )}
          {data.next && (
            <div className='flex-1 bg-white rounded-br-lg overflow-hidden'>
              <Link
                href={`/posts/${data.next?.path}`}
                className='relative inline-block w-full h-full bg-black'
              >
                <div className='absolute inline-block w-full h-full z-0'>
                  <Image
                    src={`/images/posts/${data.next?.path}.png`}
                    alt=''
                    layout='fill'
                  />
                </div>
                <div className='absolute inline-block w-full h-full z-1 bg-black opacity-60'></div>
                <FaArrowRight
                  color='white'
                  className='absolute right-8 inset-y-1/2 -translate-y-1/2 w-8 h-8 z-1'
                />
                <div className='inline-block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center z-2'>
                  <div className='text-2xl font-bold'>{data.next?.title}</div>
                  <div className='mt-1'>{data.next?.description}</div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
