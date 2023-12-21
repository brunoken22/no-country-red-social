'use client';
import Notification from '@/ui/icons/notification.svg';
import {TemplatePhotoProfile} from '@/ui/templatePhotoProfile';
import {TemplatePublications} from '../templatePublications';

export function NotificationComponents() {
  return (
    <div className='grid grid-rows-[repeat(1,300px_1fr)]'>
      <div className='flex flex-col gap-8 justify-items-start items-center max-md:border-none'>
        <div className='flex gap-2 items-center w-[90%]'>
          <input
            type='text'
            placeholder='Buscar'
            className='bg-gray-100 rounde p-2 rounded-lg w-full'
          />
          <Notification />
        </div>
        <div className='flex flex-col items-center justify-center gap-16'>
          <Notification />
          <h2>Notificaciones</h2>
          <div className='flex flex-col justify-items-stretch gap-[4.5rem] max-md:gap-4 pt-8 p-12 m-20 mt-8 '>
            {[1, 2, 3, 4, 5].map((user: number, item: number) => (
              <button
                key={user}
                className='flex flex-row gap-5 items-center hover:opacity-70    '>
                <TemplatePhotoProfile width='w-[60px]' height='h-[60px]' />
                <h2 className='font-semibold'>Usuario123</h2>
                <div className='flex flex-col items-stretch gap-2 p-4 m-10'>
                  {/* <TemplatePublications key={item} /> */}
                  <p>Descripcion de la notificicion</p>
                </div>
              </button>
            ))}
            <div className='border-t-2'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
