'use client'
import React from 'react'
import {signIn} from 'next-auth/react'


const Login = () => {
  return (
    <div>
        <button onClick={()=>signIn("google")} >Login with google</button>
        
    </div>
  )
}

export default Login