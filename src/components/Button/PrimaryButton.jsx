import { Button } from '@mui/material';
import React from 'react';
import './style.css'

function PrimaryButton({ children, props }) {
   return (
      <Button
         className='btn'
         type='submit'
         color='primary'
         variant='contained'
         fullWidth
         {...props}
      >
         {children}
      </Button>
   );
}

export default PrimaryButton;