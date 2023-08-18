'use client'
import React, { useState } from 'react'
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs"
import { IoLogoGoogle } from "react-icons/io"
import Link from 'next/link'
import Image from 'next/image'
import Cart from "../../../../../public/cart.png"
import { signIn } from 'next-auth/react'


const Register = () => {

  const [showPassword, setShowPassword] = useState(false)

  const registerSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email")
      .required("Your email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      )
      .required("Password is required"),
    cpassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords must match")
      .required("Confirm Password is required")
  })

  return (
    
     <section className="w-ful m-5 flex justify-center items-center self-center h-full text-gray-400  ">
  <div className=" flex justify-center items-center self-center w-[500px] rounded-xl h-[630px] bg-white">
    
    <div className=" bg-gray-200 rounded-xl  w-[400px] p-8 m-10 ">
      <h2 className="text-black text-center mb-8 md:text-2xl text-xl font-medium title-font">Welcome to <span className="text-[#0F8649]">Ogidi Brown</span></h2>
      <Formik
       initialValues={{
        email: "",
        password: "",
        cpassword: "",
       }}
       validationSchema={registerSchema}
       onSubmit={async (values) => {
        try {
          await signIn("credentials", {
            redirect: false,
            email: values.email,
            password: values.password,
            cpassword: values.cpassword,
          })
        } catch (error) {
          console.log("Register failer:", error)
        }
       }}
      >
        {({ errors, touched, handleBlur, handleChange, values}) => (
          <Form>
             <button type="button" 
              className="w-full text-white bg-blue-600 mb-6 border-0 py-2 px-8 focus:outline-none rounded lg:text-lg text-base"
              onClick={()=>signIn("google")}
              >
               <IoLogoGoogle size={30} className="absolute mx-auto"/> 
               Sign Up with Google
              </button>
              <div className="flex">
                <hr className="relative text-white top-3 w-[20%]"/>
                <span className="mx-auto">or continue with email</span>
                <hr className="relative text-white top-3 w-[20%]"/>
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
               values={values.email}
               onBlur={handleBlur}
               onChange={handleChange}
               placeholder="Enter your email here" 
               className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-[#0F8649] rounded border border-gray-600 focus:border-[#0F8649] text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.email && touched.email ? (
                <div className="text-xs text-[red] mt-2">
                  {errors.email}
                </div>
              ) : null}
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-10 text-lg text-black"
              >
              Password
              </label>
              <Field 
               type={showPassword ? "text" : "password"}
               id="password" 
               name="password" 
               values={values.password}
               onBlur={handleBlur}
               onChange={handleChange}
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
                <div className="text-xs text-[red] mt-2">
                  {errors.password}
                </div>
              ) : null}
              
            </div>
            <button 
             type="submit" 
             className="w-full mb-3 text-white bg-[#0F8649] border-0 py-2 px-8 focus:outline-none hover:bg-[#085c30] rounded text-lg"
            >
              Register
            </button>
              <p className="text-center text-xs text-black mb-4">
              By continuing, you agree to Ogidi Brown's
              {" "}
              <Link href="/" className="text-blue-700">
              Terms and Conditions</Link> 
              {" "}
              and 
              {" "}
              <Link href="/" className="text-blue-700">
               Privacy Policy
              </Link>.</p>
              <p className="text-center text-xs text-black">
               Already have an account? 
               {" "}
               <Link href="/dashboard/login" className="text-center text-xs text-blue-700">
                Login Here
               </Link></p>
          </Form>
        )}
      </Formik>
    </div>
  </div>
</section>
    
  )
}

export default Register;