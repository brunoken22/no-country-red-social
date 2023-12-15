'use client';
import CameraSvg from '@/ui/icons/camera.svg';
import EmojiSvg from '@/ui/icons/emoji.svg';
import GaleriaSvg from '@/ui/icons/galeria.svg';
import EditSvg from '@/ui/icons/edit.svg';
import UserSvg from '@/ui/icons/user.svg';
import CloseSvg from '@/ui/icons/close.svg';
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';

const itemPublic = [
  {text: 'Trasmisión en vivo', svg: <CameraSvg />},
  {text: 'Fotos y videos', svg: <GaleriaSvg />},
  {text: 'Emoji', svg: <EmojiSvg />},
];
export function Publish() {
  const [openCreatePubli, setOpenCreatePubli] = useState(false);
  return (
    <div className='flex gap-4 p-4 border-2 border-b-[5px] border-primary rounded-md items-center text-primary'>
      <Link href={'/profile'} className=' hover:opacity-70'>
        <UserSvg />
      </Link>
      <div className='w-full flex flex-col gap-2'>
        <button
          className='flex gap-4 justify-between w-full  border-[1px] border-primary rounded-md p-2 bg-[#F5F5F5] hover:opacity-70'
          onClick={() => {
            document.body.style.overflow = 'hidden';
            setOpenCreatePubli(true);
          }}>
          <p className='font-[700] '>Creá una publicación</p>
          <EditSvg />
        </button>
        <div className='flex gap-4 justify-end max-md:gap-6'>
          {itemPublic.map((item) => (
            <button
              key={item.text}
              className='flex gap-2 items-center hover:opacity-70	'
              onClick={() => {
                document.body.style.overflow = 'hidden';
                setOpenCreatePubli(true);
              }}>
              {item.svg}{' '}
              <span
                className='max-md:hidde
              n'>
                {item.text}
              </span>
            </button>
          ))}
        </div>
      </div>
      {openCreatePubli ? (
        <div className='absolute inset-0 backdrop-blur	flex justify-center items-center'>
          <div className='w-[500px] h-[500px] bg-secundary rounded-md p-4'>
            <div className='flex relative justify-center items-center'>
              <h2 className='text-white font-semibold'>Crear publicación</h2>
              <button
                className='absolute right-0 bg-gray-400 rounded-full p-[0.2rem_0.3rem]'
                onClick={() => setOpenCreatePubli(false)}>
                <CloseSvg />
              </button>
            </div>
            <div></div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
