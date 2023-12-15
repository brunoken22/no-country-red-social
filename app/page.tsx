import {Welcome} from '@/components/welcome';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel='preload' href='/welcome.webp' as='image' />
      </Head>
      <div className='h-full'>
        <Welcome />
      </div>
    </>
  );
}
