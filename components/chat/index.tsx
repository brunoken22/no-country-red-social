'use client';
import {ChatBigSvg} from '@/ui/icons';
import EditSvg from '@/ui/icons/edit.svg';
import {TemplatePhotoProfile} from '@/ui/templatePhotoProfile';
export function ChatComponents() {
  return (
    <div className='grid grid-cols-[repeat(1,320px_1fr)] h-full max-md:grid-cols-[auto]'>
      <div className='border-r-[1px] border-r-primary flex flex-col gap-8 items-center max-md:border-none '>
        <div className='flex gap-2 items-center w-[90%]'>
          <input
            type='text'
            placeholder='Buscar'
            className='bg-gray-100 rounde p-2 rounded-lg  w-full'
          />
          <EditSvg />
        </div>
        <div className='flex flex-col gap-6 w-[90%] max-md:flex-row max-md:flex-wrap max-md:gap-4'>
          {[1, 2, 3, 4, 5, 6].map((user: number) => (
            <button
              key={user}
              className='flex gap-2 items-center hover:opacity-70	'>
              <TemplatePhotoProfile width='w-[60px]' height='h-[60px]' />
              <div>
                <h2 className='font-semibold	'>Usuario123</h2>
                <p>@usuario123</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 max-md:hidden'>
        <ChatBigSvg />
        <h2>Comienza un nuevo chat o continúa hablando con tus amigos</h2>
        <button className='flex gap-4 items-cente border-primary border-2 p-1 rounded-lg hover:opacity-70	'>
          Escribir un nuevo mensaje <EditSvg />
        </button>
      </div>
    </div>
  );
}
