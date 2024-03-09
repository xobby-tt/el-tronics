import { ThemeProvider } from '@mui/material/styles';
import { FC, PropsWithChildren } from 'react';
import { CUSTOM_MATERIAL_THEME } from '../../config/theme';

export const ProvidersWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={CUSTOM_MATERIAL_THEME}>{children}</ThemeProvider>;
};
