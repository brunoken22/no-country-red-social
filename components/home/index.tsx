'use client';
import {Publish} from '../publish';
import {TemplatePublications} from '../templatePublications';
import {NavegationComponent} from '../navegation';

export function HomeComponents() {
  return (
    <NavegationComponent>
      <div className='m-auto w-full'>
        <Publish />
      </div>
      <div className='flex flex-col gap-6 mt-8 max-md:mt-4'>
        {[1, 2, 3, 4].map((e: number) => (
          <TemplatePublications key={e} />
        ))}
      </div>
    </NavegationComponent>
  );
}
