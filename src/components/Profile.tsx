'use client';
import Image from 'next/image';
import image from '../../public/images/profile.jpeg';
import Link from 'next/link';

export default function Profile() {
  return (
    <div className='text-center'>
      <div className='relative w-36 h-36 rounded-full mx-auto mb-4'>
        <Image
          src={image}
          alt='singyo'
          layout='fill'
          className='!h-full object-cover z-0 rounded-full'
        />
      </div>
      <h2 className='text-2xl font-bold'>Hi, I'm Singyo</h2>
      <h3>Front-end engineer</h3>
      <div className='mt-2 text-sm text-slate-400 '>
        싱요 블로그에 오신 걸 환영해용
      </div>
      <Link
        href='/contact'
        className='inline-block mt-4 px-2 py-1 rounded-2xl text-sm bg-orange-600'
      >
        Contact Me
      </Link>
    </div>
  );
}
