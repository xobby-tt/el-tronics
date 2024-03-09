import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { Box, Container, Typography } from '@mui/material';
import classes from './Footer.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
  return (
    <Box className={classes.footer}>
      <Container color={'grey'}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="body2" display="block" gutterBottom>
            c El-tronics. All rights reserved
          </Typography>

          <Box>
            <XIcon />
            <FacebookIcon />
            <InstagramIcon />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
