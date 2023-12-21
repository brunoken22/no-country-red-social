'use client';
import CameraSvg from '@/ui/icons/camera.svg';
import EmojiSvg from '@/ui/icons/emoji.svg';
import GaleriaSvg from '@/ui/icons/galeria.svg';
import EditSvg from '@/ui/icons/edit.svg';
import CloseSvg from '@/ui/icons/close.svg';
import Link from 'next/link';
import {useState} from 'react';
import {TemplatePhotoProfile} from '@/ui/templatePhotoProfile';
import EmojiPicker, {EmojiStyle} from 'emoji-picker-react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {publicacionAmigos, publicacionUser, user} from '@/lib/atom';
const itemPublic = [
  {text: 'Trasmisión en vivo', svg: <CameraSvg />},
  {text: 'Fotos y videos', svg: <GaleriaSvg />},
  {text: 'Emoji', svg: <EmojiSvg />},
];
export function Publish() {
  const [openCreatePubli, setOpenCreatePubli] = useState(false);
  const [publicacionUserData, setPublicacionUserData] =
    useRecoilState(publicacionUser);
  const [changePublic, setChangePublic] = useState('');
  const [openEmoji, setOpenEmoji] = useState(false);
  const userDataRecoil = useRecoilValue(user);
  const [publicacionesAllAmigos, setPublicacionesAllAmigos] =
    useRecoilState(publicacionAmigos);
  const hadnleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const newPublic = {
      id: (Math.random() * 100).toString(),
      description: changePublic,
      like: 0,
      img: '',
      comentarios: [],
      fecha: formattedDate,
      fullName: userDataRecoil.user.fullName,
      imgUser: userDataRecoil.user.img,
      userId: userDataRecoil.user.id,
    };
    setPublicacionUserData((prev: any) => [newPublic, ...prev]);
    setPublicacionesAllAmigos((prev: any) => [newPublic, ...prev]);
    setTimeout(() => {
      setChangePublic('');
      document.body.style.overflow = 'auto';
      setOpenCreatePubli(false);
    }, 500);
  };

  return userDataRecoil ? (
    <div className='flex gap-4 p-4 border-2 border-b-[5px] border-primary rounded-md items-center text-primary'>
      <Link href={'/profile'} className=' hover:opacity-70'>
        <TemplatePhotoProfile
          img={userDataRecoil.user.img}
          width={'w-[80px]'}
          height={'h-[80px]'}
          style='max-md:w-[60px] max-md:h-[60px]'
        />
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
              {item.svg} <span className='max-sm:hidden'>{item.text}</span>
            </button>
          ))}
        </div>
      </div>
      {openCreatePubli ? (
        <div className='absolute inset-0 backdrop-blur	flex justify-center items-center text-white z-10'>
          <div
            className='w-[500px]  bg-secundary rounded-lg
           p-4 flex flex-col gap-[1.5rem] max-sm:w-[90%]'>
            <div className='flex relative justify-center items-center'>
              <h2 className='text-white font-semibold '>Crear publicación</h2>
              <button
                className='absolute right-0 bg-gray-400 rounded-full p-[0.2rem_0.3rem]'
                onClick={() => {
                  setOpenCreatePubli(false);
                  document.body.style.overflow = 'auto';
                }}>
                <CloseSvg />
              </button>
            </div>
            <form
              onSubmit={hadnleSubmit}
              className='flex justify-between h-full flex-col gap-4'>
              <div className='flex gap-4 flex-col relative'>
                <div className='flex gap-4 items-center'>
                  <TemplatePhotoProfile
                    width={'w-[80px]'}
                    height={'h-[80px]'}
                    img={userDataRecoil.user.img}
                  />
                  <h2 className='text-[1.5rem]'>
                    {userDataRecoil.user.fullName}
                  </h2>
                </div>
                <div className='relative  '>
                  <textarea
                    className={`text-white outline-0  max-h-[250px] min-h-[100px] text-2xl	overflow-auto	placeholder:text-red-100 relative z-10 bg-transparent w-full resize-none	`}
                    onChange={(e: any) => {
                      setChangePublic(e.target.value);
                    }}
                    placeholder={`Qué estás pensando ${userDataRecoil.user.fullName}?`}
                    value={changePublic}></textarea>
                </div>
              </div>
              <div className='flex flex-col gap-6'>
                <div className='flex justify-between rounded-lg border-2 border-[#2b2a2a] p-2'>
                  <h2 className=''>Agregar a tu publicación</h2>
                  <div className='flex gap-4 relative'>
                    <button className=' hover:opacity-70'>
                      <GaleriaSvg />
                    </button>
                    <button
                      className=' hover:opacity-70'
                      onClick={() => setOpenEmoji(!openEmoji)}>
                      <EmojiSvg />
                    </button>
                    {openEmoji ? (
                      <div className='absolute right-0 bottom-full z-10'>
                        <EmojiPicker
                          emojiStyle={EmojiStyle.GOOGLE}
                          height={'350px'}
                          width={'100%'}
                          lazyLoadEmojis={true}
                          onEmojiClick={(code: any) => {
                            setChangePublic(
                              (prev: any) =>
                                prev +
                                (code.isCustom ? code.unified : code.emoji)
                            );
                            setOpenEmoji(false);
                          }}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className=' bg-primary rounded-lg hover:opacity-70'>
                  <button className='text-center p-2 w-full '>Publicar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  ) : null;
}
