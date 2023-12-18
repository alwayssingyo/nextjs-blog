import Link from 'next/link';

export default function Header() {
  return (
    <header className='fixed left-0 top-0 z-50 w-full h-16 px-4 bg-black'>
      <div className='max-w-screen-xl flex items-center justify-between h-full mx-auto'>
        <div className='text-2xl font-bold'>
          <Link href='/'>Singyo's Blog</Link>
        </div>
        <nav className='flex'>
          <div>
            <Link href='/'>home</Link>
          </div>
          <div className='ml-3'>
            <Link href='/about'>about</Link>
          </div>
          <div className='ml-3'>
            <Link href='/posts'>posts</Link>
          </div>
          <div className='ml-3'>
            <Link href='/contact'>contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
