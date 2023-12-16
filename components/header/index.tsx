'use client';
import {Lilita_One} from 'next/font/google';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import UserSVG from '@/ui/icons/user.svg';
import {useEffect, useRef, useState} from 'react';
const lilita_One = Lilita_One({subsets: ['latin'], weight: '400'});

const navegationLink = [
  {text: 'Crear cuenta', link: '/signup'},
  {text: 'Iniciar sesión', link: '/signin'},
];

export function Header() {
  const pathname = usePathname();
  const [openSettingUser, setOpenSettingUser] = useState(false);

  return (
    pathname !== '/' && (
      <header className='bg-primary text-white fixed right-0	 left-0'>
        <nav className='flex justify-between items-center ml-[2rem] mr-[2rem] max-md:pt-4 max-md:pb-4 max-md:ml-1 max-md:mr-1 gap-4'>
          <Link
            href={'/'}
            className={`${lilita_One.className} text-[3rem] max-md:text-[1.5rem] `}>
            Interactify
          </Link>
          {pathname !== '/home' ? (
            <div className='flex gap-4'>
              {navegationLink.map((nav: TypeNavegationLink) => (
                <Link href={nav.link} key={nav.text}>
                  {nav.text}
                </Link>
              ))}
            </div>
          ) : (
            <>
              <div className='max-w-[500px] min-w-[100px] w-full max-sm:hidden '>
                <input
                  type='text'
                  placeholder='Explorar'
                  className='h-[40px] rounded-lg text-black indent-1 w-full'
                />
              </div>
              <div className='relative'>
                <button>
                  <div className='w-[45px] h-[43px] rounded-full bg-white  hover:opacity-70	'>
                    <UserSVG
                      onClick={() => setOpenSettingUser(!openSettingUser)}
                    />
                  </div>
                </button>
                {openSettingUser ? (
                  <>
                    <div
                      className='absolute bg-white text-primary p-4 right-0 '
                      onBlur={() => {
                        console.log('click');
                        setOpenSettingUser(false);
                      }}>
                      <Link
                        href={'/profile'}
                        className='font-medium hover:opacity-70 block'
                        onBlur={() => {
                          console.log('Focus');
                        }}>
                        Perfil
                      </Link>
                      <Link
                        href={'/setting'}
                        className='font-medium hover:opacity-70 block'>
                        configuración
                      </Link>
                    </div>
                  </>
                ) : null}
              </div>
            </>
          )}
        </nav>
      </header>
    )
  );
}
