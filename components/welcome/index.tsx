import {Lilita_One, Lato} from 'next/font/google';
import Image from 'next/image';
import WelcomeSvg from '@/ui/icons/welcome.svg';
import Link from 'next/link';
const lilita_One = Lilita_One({subsets: ['latin'], weight: '400'});
const lato = Lato({subsets: ['latin'], weight: '700'});
const navegationLink = [
  {text: 'Crear cuenta', link: '/signup'},
  {text: 'Iniciar sesión', link: '/signin'},
];
export function Welcome() {
  return (
    <div
      className={`${lilita_One.className} flex gap-4 m-auto justify-center items-center h-full max-md:flex-col max-md:gap-8 max-md:text-center`}>
      <div>
        <h1 className='text-[5rem] text-primary max-lg:text-[2rem]'>
          Interactify
        </h1>
        <Image
          src={'/welcome.webp'}
          width={800}
          height={300}
          alt='welcome'
          className='max-h-[auto]'
        />
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-[3.5rem] text-primary max-lg:text-[1.2rem]'>
          Únete a la comunidad
        </h2>
        <div className='flex flex-col gap-4'>
          {navegationLink.map((nav: TypeNavegationLink) => (
            <Link
              href={nav.link}
              key={nav.text}
              className={`${lato.className} p-[0.2rem] pl-[0.5rem] pr-[0.5rem] text-center  border-primary border-[1px] font-[100] rounded-lg hover:bg-primary hover:text-white min-h-[40px]`}>
              {nav.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
