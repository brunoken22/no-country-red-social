'use client';
import {ChatBigSvg} from '@/ui/icons';
import EditSvg from '@/ui/icons/edit.svg';
import CloseSvg from '@/ui/icons/close.svg';
import {TemplatePhotoProfile} from '@/ui/templatePhotoProfile';
import {useState} from 'react';
export function ChatComponents() {
  const [openChat, setOpenChat] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenChat(true);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    setMessages((prev: any) => [...prev, target.message.value]);
    setTimeout(() => {
      target.message.value = '';
    }, 500);
  };

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
              onClick={handleClick}
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
        {}
      </div>
      <div className='flex flex-col items-center justify-center gap-4 max-md:hidden relative'>
        {openChat ? (
          <div className='absolute inset-0 m-4 border-2 border-primary flex flex-col justify-between bottom-4 z-10 '>
            <div className='bg-primary flex items-center justify-between text-white p-2'>
              <div className='flex gap-2 items-center'>
                <TemplatePhotoProfile width='w-[60px]' height='h-[60px]' />
                <h2>Usuario123</h2>
              </div>
              <button onClick={() => setOpenChat(false)}>
                <CloseSvg />
              </button>
            </div>
            <div className='h-full p-2 bg-white'>
              {messages.length
                ? messages.map((message: string, p: number) => (
                    <div key={p} className='flex justify-end	mb-2'>
                      {' '}
                      <p className='text-end bg-[#55a5ff] p-4 inline'>
                        {message}
                      </p>
                    </div>
                  ))
                : null}
            </div>
            <form
              onSubmit={handleSubmit}
              className='flex justify-between p-2 gap-2'>
              <input
                type='text'
                name='message'
                id='message'
                placeholder='Hola como andas?'
                className='bg-gray-100 w-full'
                required
              />
              <button className='p-2 border-2 border-primary opacity-70'>
                Enviar
              </button>
            </form>
          </div>
        ) : (
          <>
            {' '}
            <ChatBigSvg />
            <h2>Comienza un nuevo chat o continúa hablando con tus amigos</h2>
            <button className='flex gap-4 items-cente border-primary border-2 p-1 rounded-lg hover:opacity-70	'>
              Escribir un nuevo mensaje <EditSvg />
            </button>
          </>
        )}
      </div>
      {openChat ? (
        <div className='absolute inset-0 m-4 border-2 border-primary flex flex-col justify-between bottom-4 z-10 md:hidden'>
          <div className='bg-primary flex items-center justify-between text-white p-2'>
            <div className='flex gap-2 items-center'>
              <TemplatePhotoProfile width='w-[60px]' height='h-[60px]' />
              <h2>Usuario123</h2>
            </div>
            <button onClick={() => setOpenChat(false)}>
              <CloseSvg />
            </button>
          </div>
          <div className='h-full p-2 bg-white'>
            {messages.length
              ? messages.map((message: string, p: number) => (
                  <div key={p} className='flex justify-end	mb-2'>
                    {' '}
                    <p className='text-end bg-[#55a5ff] p-4 inline'>
                      {message}
                    </p>
                  </div>
                ))
              : null}
          </div>
          <form
            onSubmit={handleSubmit}
            className='flex justify-between p-2 gap-2'>
            <input
              type='text'
              name='message'
              id='message'
              placeholder='Hola como andas?'
              className='bg-gray-100 w-full'
              required
            />
            <button className='p-2 border-2 border-primary opacity-70'>
              Enviar
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
