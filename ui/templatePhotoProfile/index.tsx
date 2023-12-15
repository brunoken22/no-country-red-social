import Image from 'next/image';
import UserSvg from '@/ui/icons/user.svg';

export function TemplatePhotoProfile() {
  return (
    <div className='flex gap-4'>
      <div className='rounded-full p-2 bg-white '>
        <UserSvg />
      </div>
      <div className='text-white'>
        <h2 className='text-xl'>Tú</h2>
      </div>
    </div>
  );
}
