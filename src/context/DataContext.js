import React, { createContext, useContext, useState } from 'react';

const DateContext = createContext();

export const DataProvider = ({ children }) => {
   const [data, setData] = useState({})

   const setValues = (values) => {
      setData(prevData => ({
         ...prevData, ...values
      }))
   }

   return <DateContext.Provider value={{ data, setValues }}>{children}</DateContext.Provider>
}

export const useData = () => useContext(DateContext)