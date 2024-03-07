import { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <p>header</p>
      {children}
      <p>footer</p>
    </>
  );
};
