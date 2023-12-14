import Form from '@/components/Form';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className='px-4 pt-4 text-center'>
      <h2 className='text-2xl font-bold'>Contact me</h2>
      <div className='mt-1 text-sm'>alwayssingyo@gmail.com</div>
      <div className='mt-3'>
        <Link
          href='https://github.com/alwayssingyo'
          className='inline-block w-7 h-7'
        >
          <FaGithub className='w-full h-full' />
        </Link>
        <Link
          href='https://github.com/alwayssingyo'
          className='inline-block w-7 h-7 ml-3'
        >
          <FaLinkedin className='w-full h-full' />
        </Link>
        <Link
          href='https://github.com/alwayssingyo'
          className='inline-block w-7 h-7 ml-3'
        >
          <FaYoutube className='w-full h-full' />
        </Link>
      </div>
      <div className='mt-4 text-2xl font-bold'>Or Send me an email ^,^</div>

      <Form />
    </div>
  );
}
