import React from 'react';
import './style.css'

function Form({ children, ...props }) {
   return (
      <form
         className="form"
         noValidate {...props}
      >
         {children}
      </form>
   );
}

export default Form;