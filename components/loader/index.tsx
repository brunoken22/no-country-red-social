import {BarLoader} from 'react-spinners';

export function LoaderComponents() {
  return (
    <div className='absolute inset-0 flex justify-center items-center z-10 backdrop-blur-md	'>
      <BarLoader color='#BB46C4' />
    </div>
  );
}
