'use client';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {CreateUser} from '@/lib/hook';
import {useEffect, useState} from 'react';
const formGroup = [
  {
    nombre: 'Nombre',
    type: 'name',
    id: 'first-name',
    placeholder: 'Allison Lucia',
  },
  {
    nombre: 'Apellido',
    type: 'name',
    id: 'last-name',
    placeholder: 'Alvarez Rodriguez',
  },
  {
    nombre: 'Email',
    type: 'email',
    id: 'email',
    placeholder: 'Example@gmail.com',
  },
  {
    nombre: 'Contraseña',
    type: 'password',
    id: 'password',
    placeholder: '*****',
  },
  {
    nombre: 'Repetir contraseña',
    type: 'password',
    id: 'repeat-password',
    placeholder: '*****',
  },
];

export function SignupComponent() {
  const {push} = useRouter();
  const [dataUser, setDataUser] = useState<DataUser | null>(null);
  const {data, isLoading} = CreateUser(dataUser);

  useEffect(() => {
    if (data == 'Usuario Registrado') {
      alert('Usuario registrado');
    }
    if (data?.user?.id) {
      setDataUser(null);
      alert('Usuario registrado con exito');
      localStorage.setItem('token', data.token);
      push('/home');
    }
  }, [data]);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const validar = validarPassword(
      formElement['repeat-password'].value,
      formElement.password.value
    );

    if (validar) {
      const newDataUser = {
        fullName:
          formElement['first-name'].value +
          ' ' +
          formElement['last-name'].value,
        email: formElement.email.value,
        password: formElement.password.value,
      };
      setDataUser(newDataUser);
    }
  };

  return (
    <div className='m-[2rem_10%] '>
      <h2 className='text-[3rem] border-b-primary	border-b-2 font-bold max-md:text-[1.5rem] max-md:border-none max-md:text-center'>
        Crear cuenta
      </h2>
      <form
        action=''
        className='flex flex-col gap-4 m-[2rem_auto] w-[80%]  max-md:w-auto'
        onSubmit={handleSubmit}>
        {formGroup.map((inputLab: TypeFormGroup) => (
          <div
            className='flex flex-col gap-2 p-2 rounded-md border-b-2 border-b-primary'
            key={inputLab.nombre}>
            <label htmlFor={inputLab.id} className='text-primary'>
              {inputLab.nombre}
            </label>
            <input
              type={inputLab.type}
              name={inputLab.id}
              id={inputLab.id}
              placeholder={inputLab.placeholder}
              className='border-none bg-transparent outline-0	'
              required
            />
          </div>
        ))}
        <div className='flex items-center justify-end mt-8 max-lg:justify-center'>
          <div>
            <button className='border-[1px] border-primary hover:bg-primary hover:text-white p-2 pr-4 pl-4 w-full rounded-md'>
              Crear cuenta
            </button>
            <p className='text-[0.8rem]'>
              ¿Ya estás registrado?
              <Link href={'/signin'} className='text-sky-500	'>
                Iniciá sesión
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
function validarPassword(con1: string, con2: string) {
  if (con1 === con2) return true;
  return false;
}
