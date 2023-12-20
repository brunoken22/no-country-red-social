'use client';
import Link from 'next/link';
import EditSvg from '@/ui/icons/edit.svg';
import SettingSvg from '@/ui/icons/settings.svg';
import {TemplatePhotoProfile} from '@/ui/templatePhotoProfile';
import {TemplatePublications} from '../templatePublications';
import {useRecoilValue} from 'recoil';
import {publicacionUser, user} from '@/lib/atom';
import {GetAllPublicacionesUser} from '@/lib/hook';
import {useState} from 'react';
const buttonEditUser = [
  {text: 'Editar', link: '/', svg: <EditSvg />},
  {text: 'Configuración', link: '/setting', svg: <SettingSvg />},
];
export function ProfileComponent() {
  const userDataRecoil = useRecoilValue(user);
  const publicacionesUserRecoil = useRecoilValue(publicacionUser);
  const [pagePubli, setPagePubli] = useState(0);
  const token =
    typeof window !== 'undefined'
      ? (localStorage.getItem('token') as string)
      : '';
  const {dataPubliAllAmigosSwr, isLoadingAllAmigos} = GetAllPublicacionesUser(
    token,
    pagePubli
  );
  return userDataRecoil ? (
    <>
      <div className='flex justify-between items-center max-md:flex-col max-md:p-4 max-md:gap-4 pb-8'>
        <div className='flex gap-4 items-center max-md:gap-8'>
          <TemplatePhotoProfile
            width={'w-[150px]'}
            height={'h-[150px]'}
            style='max-md:w-[100px] max-md:h-[100px]'
            img={userDataRecoil.user.img}
          />
          <div>
            <h2 className='font-bold text-2xl'>
              {userDataRecoil.user.fullName}
            </h2>
            <p>📸Video creator</p>
            <p>❤Swiftie</p>
            <p>Chubut-Argentina</p>
          </div>
        </div>
        <div className='flex gap-8 items-center'>
          {buttonEditUser.map((nav) => (
            <Link
              key={nav.text}
              href={nav.link}
              className='border-[1px] border-primary p-2 hover:opacity-70 font-medium rounded-lg flex gap-2'>
              {nav.svg} {nav.text}
            </Link>
          ))}
        </div>
      </div>
      {[] ? (
        <div className='flex flex-col gap-[1.5rem] max-md:gap-4 pt-8 border-t-2  border-t-primary '>
          {publicacionesUserRecoil.map((item: Publicacion) => (
            <TemplatePublications
              key={item.id}
              description={item.description}
              img={item.img}
              fullName={userDataRecoil.user.fullName}
              imgUser={userDataRecoil.user.img}
            />
          ))}
          {[dataPubliAllAmigosSwr.length == 10] && (
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
    </>
  ) : null;
}
