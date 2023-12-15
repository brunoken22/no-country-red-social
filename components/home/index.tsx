'use client';
import Link from 'next/link';
import HomeSvg from '@/ui/icons/home.svg';
import ChatSvg from '@/ui/icons/chat.svg';
import NotifiSvg from '@/ui/icons/notification.svg';
import HelpSvg from '@/ui/icons/help.svg';
import {Publish} from '../publish';
import {TemplatePublications} from '../templatePublications';
const navegationOfHome = [
  {text: 'Inicio', link: '/home', svg: <HomeSvg />},
  {text: 'Notificaciones', link: '/notification', svg: <NotifiSvg />},
  {text: 'Chat', link: '/chat', svg: <ChatSvg />},
];
export function HomeComponents() {
  return (
    <div className='grid grid-cols-[repeat(1,300px_1fr)] h-full max-sm:block'>
      <div>
        <div className='flex flex-col justify-between pt-16 pb-8 border-r-2 border-r-primary max-sm:hidden fixed bottom-0 top-[4.5rem] p-[4.8rem]'>
          <div className='flex flex-col gap-8 '>
            {navegationOfHome.map((nav) => (
              <Link
                href={nav.link}
                key={nav.text}
                className='flex gap-4 items-center font-bold hover:text-primary'>
                {nav.svg}
                {nav.text}
              </Link>
            ))}
          </div>
          <div className=''>
            <Link href={"/help"} className='font-bold flex gap-4 hover:text-primary'>
              <HelpSvg />
              Ayuda
            </Link>
          </div>
        </div>
      </div>
      <div className='grid grid-rows-[repeat(1,150px_1fr)] p-4'>
        <div className='m-auto w-full'>
          <Publish />
        </div>
        <div className='flex flex-col gap-6 mt-8 max-md:mt-4'>
          {[1, 2, 3, 4].map((e: number) => (
            <TemplatePublications key={e} />
          ))}
        </div>
      </div>
    </div>
  );
}
