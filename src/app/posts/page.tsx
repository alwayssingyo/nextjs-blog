import { getPosts } from '@/service/posts';
import Posts from '@/components/Posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Posts',
  description: '블로그 글 리스트',
};

export default async function PostsPage() {
  const posts = await getPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <div className='flex pt-6 mb-20'>
      <Posts posts={posts} categories={categories} />
    </div>
  );
}
