'use client';
import {user} from '@/lib/atom';
import React, {useState} from 'react';
import {useRecoilState} from 'recoil';

export function SettingComponents() {
  const [openCambiarNameYEmail, setOpenCambiarNameYEmail] = useState(false);
  const [openCambiarContraseña, setOpenCambiarContraseña] = useState(false);
  const [userData, setUserData] = useRecoilState(user);
  const handleSubmitFullName = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    setUserData((prev: any) => ({
      ...prev,
      user: {
        fullName: target.nombre.value,
      },
    }));
    alert('Modificado con exito');
  };
  return (
    <div>
      <div className='flex flex-col gap-4'>
        <button
          className={`border-2 border-primary p-2 hover:opacity-70 ${
            openCambiarNameYEmail
              ? 'bg-secundary text-white  hover:opacity-100'
              : ''
          }`}
          onClick={() => {
            setOpenCambiarNameYEmail(true);
            setOpenCambiarContraseña(false);
          }}>
          <h2>Cambiar nombre de usuario y email</h2>
        </button>
        <button
          className={`border-2 border-primary p-2 hover:opacity-70 ${
            openCambiarContraseña
              ? 'bg-secundary text-white  hover:opacity-100'
              : ''
          }`}
          onClick={() => {
            setOpenCambiarContraseña(true);
            setOpenCambiarNameYEmail(false);
          }}
          id='contraseña'>
          <h2>Cambiar contraseña</h2>
        </button>
      </div>
      {openCambiarNameYEmail ? (
        <div className='flex flex-col items-center gap-4 mt-16 border-2 border-primary p-4 shadow-[0_0_10px_1px_#BB46C4]'>
          <h2 className='font-semibold text-3xl	'>Email y nombre</h2>
          <form
            action=''
            className='flex w-[80%] flex-col gap-8'
            onSubmit={handleSubmitFullName}>
            <div className=''>
              <label htmlFor='nombre'>Nombre y apellido</label>
              <input
                id='nombre'
                type='text'
                placeholder='Allison Lucia'
                className='block w-full outline-0 border-b-2 border-b-secundary focus:border-b-primary'
                defaultValue={userData.user.fullName}
              />
            </div>
            <div className=''>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                placeholder='example@gmail.com'
                className='block w-full outline-0 border-b-2 border-b-secundary focus:border-b-primary'
                defaultValue={userData.user.email}
              />
            </div>
            <div className='flex items-center justify-center'>
              <button className='p-2 border-2 border-primary hover:bg-primary hover:text-white'>
                Guardar
              </button>
            </div>
          </form>
        </div>
      ) : null}
      {openCambiarContraseña ? (
        <div className='flex flex-col items-center gap-4 mt-16 border-2 border-primary p-4 shadow-[0_0_10px_1px_#BB46C4]'>
          <h2 className='font-semibold text-3xl	'>Contraseña</h2>

          <form
            action=''
            className='flex w-[80%] flex-col gap-8'
            onSubmit={() => alert('Modificado con exito')}>
            <div className=''>
              <label htmlFor='password'>Nueva Contraseña</label>
              <input
                id='password'
                type='password'
                placeholder='*****'
                className='block w-full outline-0 border-b-2 border-b-secundary focus:border-b-primary'
              />
            </div>
            <div className=''>
              <label htmlFor='reContra'>Repetir contraseña</label>
              <input
                id='reContra'
                type='password'
                placeholder='*****'
                className='block w-full outline-0 border-b-2 border-b-secundary focus:border-b-primary'
              />
            </div>
            <div className='flex items-center justify-center'>
              <button className='p-2 border-2 border-primary hover:bg-primary hover:text-white w-full'>
                Guardar
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}
