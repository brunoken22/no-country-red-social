'use client';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import HomeSvg from '@/ui/icons/home.svg';
import ChatSvg from '@/ui/icons/chat.svg';
import NotifiSvg from '@/ui/icons/notification.svg';
import HelpSvg from '@/ui/icons/help.svg';
import {TemplatePhotoProfile} from '@/ui/templatePhotoProfile';

const navegationOfHome = [
  {text: 'Inicio', link: '/home', svg: <HomeSvg />},
  {text: 'Notificaciones', link: '/notification', svg: <NotifiSvg />},
  {text: 'Chat', link: '/chat', svg: <ChatSvg />},
];
export function NavegationComponent({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
  return (
    <div className='grid grid-cols-[repeat(1,300px_1fr)] h-full max-md:block max-md:relative'>
      <div className='border-r-4 border-r-primary'>
        <div className='flex flex-col justify-between pt-16 pb-8  max-md:hidden fixed bottom-0 top-[4.5rem] w-[300px]'>
          <div className='flex flex-col gap-8 '>
            {navegationOfHome.map((nav) => (
              <Link
                href={nav.link}
                key={nav.text}
                className={`flex gap-4 fill-primary ${
                  nav.text !== 'chat' ? '' : 'stroke-current'
                }  items-center font-bold hover:text-primary p-2 ${
                  pathname == nav.link
                    ? 'bg-primary text-white fill-white hover:text-white '
                    : ''
                }`}>
                {nav.svg}
                {nav.text}
              </Link>
            ))}
          </div>
          <div className=''>
            <Link
              href={'/help'}
              className='font-bold flex gap-4 hover:text-primary'>
              <HelpSvg />
              Ayuda
            </Link>
          </div>
        </div>
      </div>
      {/* <div className='flex w-[300px]'>
        <div>
          <h4>Nuevas</h4>
          <button>
            <TemplatePhotoProfile width='w-[40px]' height='h-[40px]' /> A
            Allison S. le gustó tu publicaión
          </button>
        </div>
        <div></div>
      </div> */}
      <div
        className={` p-4 ${
          pathname == '/chat' ? 'block' : 'grid grid-rows-[repeat(1,auto_1fr)]'
        }`}>
        {children}
      </div>
    </div>
  );
}
