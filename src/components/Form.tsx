'use client';
import { sendContactEmail } from '@/service/contact';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';

type FormData = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: '',
  subject: '',
  message: '',
};
export default function Form() {
  const [form, setForm] = useState<FormData>(DEFAULT_DATA);
  const [send, setSend] = useState<string | null>(null);
  const alertRef = useRef<HTMLDivElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form) //
      .then(() => {
        setSend('success');
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setSend('fail');
      })
      .finally(() => {
        setTimeout(() => {
          setSend(null);
        }, 2000);
      });
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
            type='from'
            id='from'
            name='from'
            required
            autoFocus
            className='w-full text-black'
            value={form.from}
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
