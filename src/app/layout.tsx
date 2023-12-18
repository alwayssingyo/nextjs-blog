import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Singyo's Blog",
  description: '싱요의 블로그입니다',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full'>
      <body className={`h-full ${inter.className}`}>
        <div className='h-full min-h-full max-w-screen-xl mx-auto'>
          <Header />
          <div className='flex flex-col justify-between pt-16 min-h-full'>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
