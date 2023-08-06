'use client'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const AuthProvider = ({ children, Component, pageProps }) => {
  return (
    
        <SessionProvider>
            {children}
            {/* <Component {...pageProps} /> */}
        </SessionProvider>
    
  )
}

export default AuthProvider