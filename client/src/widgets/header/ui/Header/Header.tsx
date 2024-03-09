import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import classes from './Header.module.css';

const pages = ['Products', 'Pricing', 'Blog'];

export const Header = () => {
  function handleCloseNavMenu(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <img className={classes.logo} src="logo.png"></img>

          <Box sx={{ flexGrow: 1, marginLeft: '20px' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white' }}
              startIcon={<PersonOutlineIcon />}
            >
              Log In
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
