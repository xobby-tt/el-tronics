import { Box, Container } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Footer } from '../../../widgets/footer';
import { Header } from '../../../widgets/header';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box display={'flex'} sx={{ flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container sx={{ flexGrow: 1, marginTop: '40px', marginBottom: '40px' }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};
