import LikeSvg from '@/ui/icons/disLike.svg';
import DisLikeSvg from '@/ui/icons/like.svg';
import CommentSvg from '@/ui/icons/comment.svg';
import {TemplatePhotoProfile} from '@/ui/templatePhotoProfile';
import {useRecoilValue} from 'recoil';
import {user} from '@/lib/atom';
export function TemplatePublications() {
  const userDataRecoil = useRecoilValue(user);

  return userDataRecoil ? (
    <div className=' border-[1px]  border-primary '>
      <div className='flex gap-4 items-center p-4 max-md:p-2 border-b-primary border-b-2'>
        <TemplatePhotoProfile
          img={userDataRecoil.user.img}
          width='w-[60px]'
          height='h-[60px]'
        />
        <div>
          <h2 className='font-bold text-[1.2rem]'>
            {userDataRecoil.user.fullName}
          </h2>
          <p>@prueba</p>
        </div>
      </div>
      <div className='p-2'>
        <img
          src='https://res.cloudinary.com/dy26iktoi/image/upload/v1700611644/j9qjjm3mcd4qjekomvgq.webp'
          alt='user'
          className='w-full'
        />
      </div>
      <div className='flex gap-8 border-t-[1px] border-t-primary p-4'>
        <button>
          <CommentSvg className='fill-primary hover:fill-[green]' />
        </button>
        <button>
          <LikeSvg className='fill-primary hover:fill-[#4c92fc]' />
        </button>
        <button>
          <DisLikeSvg className='fill-primary hover:fill-[#f75151]' />
        </button>
      </div>
    </div>
  ) : null;
}
