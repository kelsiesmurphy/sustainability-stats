import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sustainability Testing',
  description: 'Sustainability Testing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={inter.className + ' bg-gradient overscroll-none bg-cover'}
      >
        <main className='flex min-h-screen flex-1 flex-col px-4 pb-12'>
          <NavBar />
          <div
            id='main-content'
            className='container flex flex-1 justify-center px-0'
          >
            <div className='flex flex-1 items-center rounded-md border border-gray-100 bg-zinc-100 bg-opacity-70 bg-clip-padding p-4 shadow-sm backdrop-blur-sm backdrop-filter'>
              <div className='flex-1'>{children}</div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
