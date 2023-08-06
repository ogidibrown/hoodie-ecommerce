'use client'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const AuthProvider = ({ Component, pageProps }) => {
  return (
    
        <SessionProvider session={pageProps.session}>
            {/* {children} */}
            <Component {...pageProps} />
        </SessionProvider>
    
  )
}

export default AuthProvider