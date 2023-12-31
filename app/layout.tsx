import type {Metadata} from 'next';
import {Roboto} from 'next/font/google';
import {Header} from '@/components/header';
import './globals.css';
import {Layout} from '@/components/layout';

const roboto = Roboto({subsets: ['latin'], weight: '300'});

export const metadata: Metadata = {
  title: 'Interactify',
  description: 'Red social',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='es'>
      <body className={roboto.className}>
        <Layout>
          <Header />
          <div className='max-w-[1050px] m-auto h-full pt-[4.5rem]'>
            {children}
          </div>
        </Layout>
      </body>
    </html>
  );
}
