import LikeSvg from '@/ui/icons/disLike.svg';
import DisLikeSvg from '@/ui/icons/like.svg';
import CommentSvg from '@/ui/icons/comment.svg';
import {TemplatePhotoProfile} from '@/ui/templatePhotoProfile';
export function TemplatePublications(props: Publicacion) {
  return (
    <div className=' border-[1px]  border-primary '>
      <div className='flex gap-4 items-center p-4 max-md:p-2 border-b-primary border-b-2'>
        <TemplatePhotoProfile
          img={props.imgUser}
          width='w-[60px]'
          height='h-[60px]'
        />
        <div>
          <h2 className='font-bold text-[1.2rem]'>{props.fullName}</h2>
          <p>@uniRed</p>
        </div>
      </div>
      {props.description && (
        <div className='p-2'>
          <p>{props.description}</p>
        </div>
      )}
      {props.img && (
        <div className='p-2 h-[400px]'>
          <img
            src={props.img}
            alt='user'
            className='w-full h-full object-contain'
          />
        </div>
      )}
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
  );
}
