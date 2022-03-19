import React from 'react';

export const formDefaults = {
    page: 'sliders',
    setPage: () => {}
  };
  
const FormContext = React.createContext(  formDefaults.page );
export default  FormContext;