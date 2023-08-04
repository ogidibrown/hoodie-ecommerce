'use client'
import React, { useState } from 'react'
import {signIn} from 'next-auth/react'
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs"
import { IoLogoGoogle } from "react-icons/io"
import Link from 'next/link'
import Image from 'next/image'
import Cart from "../../../../../public/cart.png"

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email")
      .required("Your email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      )
      .required("Password is required")
  })

  return (
    <div>
      <section className="text-gray-400 bg-[#0F8649] body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 className=" text-center mb-10 title-font font-medium text-3xl text-white">Ogidi Brown Online Shopping Mall</h1>
        <Image src={Cart} width={400} height={200} alt="cart" className="mx-auto"/> 
    </div>
    <div className="lg:w-2/6 md:w-1/2 bg-white rounded-xl p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-black text-center mb-8 text-2xl font-medium title-font">Welcome to <span className="text-[#0F8649]">Ogidi Brown</span></h2>
      <Formik
       initialValues={{
        email: "",
        password: "",
       }}
       validationSchema={loginSchema}
       onSubmit={values => {
        console.log(values)
       }}
      >
        {({ errors, touched}) => (
          <Form>
             <button type="button" 
              className="w-full text-white bg-blue-600 mb-6 border-0 py-2 px-8 focus:outline-none rounded text-lg"
              onClick={()=>signIn("google")}
              >
               <IoLogoGoogle size={30} className="absolute"/> 
               Login with Google
              </button>
              <div className="flex">
                <hr className="relative top-3 w-[5rem]"/>
                <span className="mx-auto">or continue with email</span>
                <hr className="relative top-3 w-[5rem]"/>
              </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-10 text-lg text-black"
              >
              Email
              </label>
              <Field 
               type="text" 
               id="full-name" 
               name="email" 
               placeholder="Enter your email here" 
               className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-[#0F8649] rounded border border-gray-600 focus:border-[#0F8649] text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.email && touched.email ? (
                <div className="text-xs text-[red] mt-1">
                  {errors.email}
                </div>
              ) : null}
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-10 text-lg text-black"
              >
              Password
              </label>
              <Field 
               type={showPassword ? "text" : "password"}
               id="password" 
               name="password" 
               placeholder="Enter your password here" 
               className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-[#0F8649] rounded border border-gray-600 focus:border-[#0F8649] text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
               <div
              className="absolute top-11 right-0 px-3 py-2 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <BsEyeFill size={20} />
              ) : (
                <BsEyeSlashFill size={20} />
              )}
            </div>
              {errors.password && touched.password ? (
                <div className="text-xs text-[red] mt-1">
                  {errors.password}
                </div>
              ) : null}
              <Link href="/" className="text-xs text-blue-600">Forgot your password?</Link>
            </div>
            <button 
             type="submit" 
             className="w-full mb-3 text-white bg-[#0F8649] border-0 py-2 px-8 focus:outline-none hover:bg-[#085c30] rounded text-lg"
            >
              Login
            </button>
              <p className="text-center text-xs text-black mb-4">By continuing, you agree to Ogidi Brown's <Link href="/" className="text-blue-700">Terms and Conditions</Link> and <Link href="/" className="text-blue-700">Privacy Notice</Link>.</p>
              <p className="text-center text-xs text-black">Don't have an account? <Link href="/" className="text-center text-xs text-blue-700">Register</Link></p>
          </Form>
        )}
      </Formik>
    </div>
  </div>
</section>
    </div>
  )
}

export default Login