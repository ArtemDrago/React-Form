import { Container } from '@mui/system';
import React from 'react';
import './style.css'

function MainContainer({ children, ...props }) {
   return (
      <Container
         container='main'
         maxWidth='xs'
         {...props}
         className='container'
      >
         {children}
      </Container>
   );
}

export default MainContainer;