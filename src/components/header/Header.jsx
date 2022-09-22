import React from 'react';
import { Typography } from '@mui/material';

function Header() {

   return (
      <Typography
         component='h1'
         variant='h5'
         align='center'
         color={'deeppink'}
         fontSize={'40px'}
         fontFamily={'Permanent Marker'}
         style={{ textShadow: '1px 1px darkmagenta' }}
      >
         The Ultimate form
      </Typography>
   );
}

export default Header;