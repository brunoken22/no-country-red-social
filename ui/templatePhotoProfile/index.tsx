import Image from 'next/image';
import UserSvg from '@/ui/icons/user.svg';

export function TemplatePhotoProfile({
  width,
  height,
  img,
  style,
}: {
  width?: string;
  height?: string;
  style?: string;
  img?: string;
}) {
  return (
    <div
      className={`rounded-full border-[2px] border-primary bg-white ${
        width || 'w-45px'
      } ${height || 'h-43px'}
      ${style || ''}
    flex items-center justify-center relative`}>
      {img ? (
        <Image
          src={img}
          fill
          objectFit='cover'
          alt='user'
          className='rounded-[inherit] w-full h-full object-cover'
        />
      ) : (
        <UserSvg />
      )}
    </div>
  );
}
