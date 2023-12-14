import Link from 'next/link';

export default function Header() {
  return (
    <header className='fixed left-0 top-0 w-full flex items-center justify-between h-16 px-4 bg-black'>
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
          <Link href='/'>posts</Link>
        </div>
        <div className='ml-3'>
          <Link href='/contact'>contact</Link>
        </div>
      </nav>
    </header>
  );
}
