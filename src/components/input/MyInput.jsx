import React, { forwardRef } from 'react';
import './style.css'
import { TextField } from '@mui/material';

export const MyInput = forwardRef((props, ref) => {
   return <TextField
      variant='outlined'
      margin='normal'
      inputRef={ref}
      {...props}
      fullWidth
   />
})

