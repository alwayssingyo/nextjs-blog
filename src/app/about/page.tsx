import Profile from '@/components/Profile';

export default function AboutPage() {
  return (
    <div className='px-4 pt-4'>
      <Profile />
      <div className='text-center bg-zinc-900 max-w-3xl mx-auto mt-10 p-10'>
        <div>
          <p className='font-bold text-xl'>Who am I ?</p>
          <p className='text-sm'>
            개발을 사랑하는 프론트엔드 개발자
            <br />
            사람과 디자인을 담는 웹앱을 만들고 있음
          </p>
        </div>

        <div className='mt-4'>
          <p className='font-bold text-xl'>Career</p>
          <p className='text-sm'>
            내인생에 (-Now)
            <br />
            커리어는 (-2019)
            <br />
            바로 너다 (-2015)
          </p>
        </div>

        <div className='mt-4'>
          <p className='font-bold text-xl'>Skills</p>
          <p className='text-sm'>
            React, Vue
            <br />
            Git, Clean Code
            <br />
            VS Code, Mongo DB
          </p>
        </div>
      </div>
    </div>
  );
}
