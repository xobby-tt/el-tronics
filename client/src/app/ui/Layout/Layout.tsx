import { Container } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Header } from '../../../widgets/header';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <p>footer</p>
    </>
  );
};
