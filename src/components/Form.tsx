'use client';
// import useEmail from '@/util/hooks/useEmail';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';

type FormData = {
  email: string;
  subject: string;
  message: string;
};

export default function Form() {
  const [form, setForm] = useState<FormData>({
    email: '',
    subject: '',
    message: '',
  });
  const [send, setSend] = useState<string | null>(null);
  const alertRef = useRef<HTMLDivElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSend('success');
    setTimeout(() => {
      setSend(null);
    }, 2000);
  };

  return (
    <form className='mt-12' onSubmit={onSubmit}>
      {send && (
        <div ref={alertRef} className='mb-10'>
          {send === 'success' && (
            <div className='inline-block px-4 py-1 text-sm text-black bg-lime-500 rounded-lg'>
              메일을 성공적으로 보냈습니다.
            </div>
          )}
          {send === 'fail' && (
            <div className='inline-block px-4 py-1 text-sm text-black bg-red-400 rounded-lg'>
              메일 전송에 실패했습니다. 다시 시도해 주세요!
            </div>
          )}
        </div>
      )}
      <div className='w-96 inline-block p-4 bg-zinc-900 rounded-lg text-left'>
        <div>
          <p className='mb-2'>Your Email</p>
          <input
            type='email'
            id='email'
            name='email'
            required
            autoFocus
            className='w-full text-black'
            value={form.email}
            onChange={onChange}
          />
        </div>
        <div className='mt-4'>
          <p className='mb-2'>Subject</p>
          <input
            type='text'
            id='subject'
            name='subject'
            required
            className='w-full text-black'
            value={form.subject}
            onChange={onChange}
          />
        </div>
        <div className='mt-4'>
          <p className='mb-2'>Message</p>
          <textarea
            id='message'
            name='message'
            required
            className='w-full h-60 text-black'
            value={form.message}
            onChange={onChange}
          />
        </div>
        <button
          type='submit'
          className='w-full py-2 mt-2 bg-amber-300 text-black text-sm'
        >
          Submit
        </button>
      </div>
    </form>
  );
}
