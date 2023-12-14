'use client';
// import useEmail from '@/util/hooks/useEmail';
import { useState } from 'react';

export default function Form() {
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  return (
    <section className='mt-12'>
      {/* <div className='mb-10'>
        <div className='inline-block px-4 py-1 text-sm text-black bg-lime-500'>
          메일을 성공적으로 보냈습니다.
        </div>
        <div className='inline-block px-4 py-1 text-sm text-black bg-red-400'>
          메일 전송에 실패했습니다. 다시 시도해 주세요!
        </div>
      </div> */}
      <div className='w-96 inline-block p-4 bg-zinc-900 rounded-lg text-left'>
        <div>
          <p className='mb-2'>Your Email</p>
          <input
            className='w-full text-black'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className='mt-4'>
          <p className='mb-2'>Subject</p>
          <input
            className='w-full text-black'
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
        </div>
        <div className='mt-4'>
          <p className='mb-2'>Message</p>
          <textarea
            className='w-full h-60 text-black'
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
        <button
          type='submit'
          className='w-full py-2 mt-2 bg-amber-300 text-black text-sm'
          // onClick={() => {
          //   useEmail(email, subject, message);
          // }}
        >
          Submit
        </button>
      </div>
    </section>
  );
}
