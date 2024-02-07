import FeaturedList from '@/components/FeaturedList';
import LikeList from '@/components/LikeList';
import Profile from '@/components/Profile';
import { getFeaturedPost, getNonFeaturedPost } from '@/service/posts';
import 'swiper/css';

export default async function Home() {
  const featuredData = await getFeaturedPost();
  const likeData = await getNonFeaturedPost();

  return (
    <div className='min-h-full px-4 pt-4 pb-10'>
      <Profile />

      {/* Featured Posts */}
      <h2 className='mt-10 mb-3 text-xl font-bold'>Featured Posts</h2>
      <FeaturedList featuredData={featuredData} />

      {/* You may like */}
      <h2 className='mt-10 mb-3 text-xl font-bold'>You may like</h2>
      <LikeList likeData={likeData} />
    </div>
  );
}
