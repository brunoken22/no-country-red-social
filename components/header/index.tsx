'use client';
import {Lilita_One} from 'next/font/google';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import UserSVG from '@/ui/icons/user.svg';
import {useEffect, useRef, useState} from 'react';
import {useRecoilValue} from 'recoil';
import {user} from '@/lib/atom';
import {TemplatePhotoProfile} from '@/ui/templatePhotoProfile';
import {GetAllPublicacionesUser, GetUser} from '@/lib/hook';
import {LoaderComponents} from '../loader';
const lilita_One = Lilita_One({subsets: ['latin'], weight: '400'});

const navegationLink = [
  {text: 'Crear cuenta', link: '/signup'},
  {text: 'Iniciar sesión', link: '/signin'},
];

export function Header() {
  const pathname = usePathname();
  const [openSettingUser, setOpenSettingUser] = useState(false);
  const userDataRecoil = useRecoilValue(user);
  const [pagePubli, setPagePubli] = useState(0);
  const token =
    typeof window !== 'undefined'
      ? (localStorage.getItem('token') as string)
      : '';
  const {dataPubliAllAmigosSwr, isLoadingAllAmigos} = GetAllPublicacionesUser(
    token,
    pagePubli
  );
  const {isLoading} = GetUser(token);
  if (isLoadingAllAmigos || isLoading) {
    return <LoaderComponents />;
  }
  return (
    pathname !== '/' &&
    userDataRecoil && (
      <header className='bg-primary text-white fixed right-0	 left-0 z-10'>
        <nav className='flex justify-between items-center ml-[2rem] mr-[2rem]  max-md:ml-1 max-md:mr-1 gap-4 max-md:p-2'>
          <Link
            href={'/home'}
            className={`${lilita_One.className} text-[3rem] max-md:text-[1.5rem] `}>
            Interactify
          </Link>
          {pathname == '/signin' || pathname == '/signup' ? (
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
                <button
                  onClick={() => setOpenSettingUser(!openSettingUser)}
                  className='hover:opacity-70'>
                  <TemplatePhotoProfile
                    width={'w-[60px]'}
                    height={'h-[60px]'}
                    style='max-w-[50px] max-h-[50px]'
                    img={userDataRecoil.user.img}
                  />
                </button>
                {openSettingUser ? (
                  <>
                    <div
                      className='absolute bg-white text-primary p-4 right-0 '
                      onBlur={() => {
                        setOpenSettingUser(false);
                      }}>
                      <Link
                        href={'/profile'}
                        className='font-medium hover:opacity-70 block'
                        onBlur={() => {}}>
                        Perfil
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
