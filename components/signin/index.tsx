'use client';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

export function SigninComponent() {
  const {push} = useRouter();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    push('/home');
  };

  return (
    <div className='m-[2rem_10%] '>
      <h2 className='text-[3rem] border-b-primary	border-b-2 font-bold max-md:text-[1.5rem] max-md:border-none max-md:text-center'>
        Iniciar sesión
      </h2>
      <form
        action=''
        className='flex flex-col gap-4 m-[2rem_auto] w-[80%] max-md:w-auto'
        onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2 p-2 rounded-md border-b-2 border-b-primary'>
          <label htmlFor='email' className='text-primary'>
            Email
          </label>
          <input
            type='email'
            id='email'
            placeholder='Example@gmail.com'
            className='border-none bg-transparent outline-0	'
            required
          />
        </div>
        <div className='flex flex-col gap-2 p-2 rounded-md border-b-2 border-b-primary'>
          <label htmlFor='contraseña' className='text-primary'>
            Contraseña
          </label>
          <input
            type='password'
            id='contraseña'
            placeholder='*******'
            className='border-none bg-transparent outline-0	'
            required
          />
        </div>
        <div className='flex items-center justify-end mt-8 max-lg:justify-center'>
          <div>
            <button className='border-[1px] border-primary hover:bg-primary hover:text-white p-2 pr-4 pl-4 w-full rounded-md'>
              Iniciar sesión
            </button>
            <p className='text-[0.8rem]'>
              ¿No tenés cuenta aún?
              <Link href={'/signup'} className='text-sky-500	'>
                Crear cuenta
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
