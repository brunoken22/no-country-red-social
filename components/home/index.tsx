'use client';
import {Publish} from '../publish';
import {TemplatePublications} from '../templatePublications';
import {NavegationComponent} from '../navegation';
import {useRecoilValue} from 'recoil';
import {publicacionAmigos, user} from '@/lib/atom';
import {GetAllPublicaciones} from '@/lib/hook';
import {useState} from 'react';

export function HomeComponents() {
  const userDataRecoil = useRecoilValue(user);
  const [pagePubli, setPagePubli] = useState(0);
  const token =
    typeof window !== 'undefined'
      ? (localStorage.getItem('token') as string)
      : '';
  const {dataPubliAllAmigosSwr, isLoadingAllAmigos} = GetAllPublicaciones(
    token,
    pagePubli
  );
  return (
    <NavegationComponent>
      <div className='m-auto w-full'>
        <Publish />
      </div>

      {dataPubliAllAmigosSwr?.length && userDataRecoil ? (
        <div className='flex flex-col gap-6 mt-8 max-md:mt-4'>
          {dataPubliAllAmigosSwr.map((item: Publicacion) => (
            <TemplatePublications
              key={item.id}
              description={item.description}
              img={item.img}
              fullName={
                item.userId == Number(userDataRecoil.user.id)
                  ? 'Tú'
                  : 'Otro usuario'
              }
              imgUser={
                item.userId == Number(userDataRecoil.user.id)
                  ? userDataRecoil.user.img
                  : ''
              }
            />
          ))}
          {dataPubliAllAmigosSwr.length == 10 && (
            <div className='flex items-center justify-center'>
              <button
                onClick={() => setPagePubli((prev) => prev + 10)}
                className='text-primary hover:opacity-70'>
                Más
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className='text-center font-bold text-[1.5rem]'>
          No hay publicaciones
        </div>
      )}
    </NavegationComponent>
  );
}
