import { createTheme } from '@mui/material';

export const CUSTOM_MATERIAL_THEME = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#040046',
        },
      },
    },
  },
});
