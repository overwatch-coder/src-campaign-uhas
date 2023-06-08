'use client'

import React, {createContext} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

export const AosContext = createContext(null);

const AosProvider = ({children}: {children : React.ReactNode}) => {
    AOS.init();
    const values = null
  return (
    <AosContext.Provider value={values}>
        {children}
    </AosContext.Provider>
  )
}

export default AosProvider