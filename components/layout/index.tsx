'use client';

import {RecoilRoot} from 'recoil';

export function Layout({children}: {children: React.ReactNode}) {
  return <RecoilRoot> {children}</RecoilRoot>;
}
