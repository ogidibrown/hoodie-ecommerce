'use client';
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { IoLogoGoogle } from 'react-icons/io';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import LoadingSpinner from '../../../shared/uiElement/LoadingSpinner';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:4000/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message || 'Something went wrong');
      }
      setIsLoading(false);
      console.log(responseData);
      //auth.login
    } catch (error) {
      console.log(error);
      setIsLoading(false);

      setError(error.message || 'Something went wrong,please try again');
    }
    setIsLoading(false);
  };
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Your email is required'),
      password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });
  const errorhandler = () => {
    setError(null);
  };
  return (
    <>
      <section className="w-full h-[100vh] flex flex-col justify-center items-center md:px-0 px-5 bg-gray-100">
        {isLoading && <LoadingSpinner asOverlay />}
        <div className="shadow-[0px_8px_16px_#D0D2D5] bg-white py-8 px-10 rounded-xl">
          <h2 className="text-black text-center mb-8 md:text-2xl text-xl font-medium title-font">
            Welcome to <span className="text-[#0F8649]">Ogidi Brown</span>
          </h2>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, handleBlur, handleChange, values }) => (
              <Form>
                <button
                  type="button"
                  className="w-full text-white bg-blue-600 mb-6 border-0 py-3 px-8 focus:outline-none rounded lg:text-lg text-base"
                  onClick={() => signIn('google')}
                >
                  <IoLogoGoogle
                    size={30}
                    className="absolute mx-auto pr-2 my-auto"
                  />
                  Login with Google
                </button>
                <div className="flex">
                  <hr className="relative top-3 w-[20%]" />
                  <span className="mx-auto">or continue with email</span>
                  <hr className="relative top-3 w-[20%]" />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-10 text-lg text-black"
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
                  <label
                    htmlFor="email"
                    className="leading-10 text-lg text-black"
                  >
                    Password
                  </label>
                  <Field
                    type={showPassword ? 'text' : 'password'}
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
                      <BsEye size={20} />
                    ) : (
                      <BsEyeSlash size={20} />
                    )}
                  </div>
                  {errors.password && touched.password ? (
                    <div className="text-xs text-[red] mt-2">
                      {errors.password}
                    </div>
                  ) : null}
                  <Link href="/" className="text-sm text-blue-600">
                    Forgot your password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full mb-3 text-white bg-[#0F8649] border-0 py-2 px-8 focus:outline-none hover:bg-[#085c30] rounded text-lg"
                >
                  Login
                </button>
                <p className="text-center text-xs text-black mb-4">
                  By continuing, you agree to Ogidi Brown's{' '}
                  <Link href="/" className="text-blue-600">
                    Terms and Conditions
                  </Link>{' '}
                  and{' '}
                  <Link href="/" className="text-blue-600">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <p className="text-center text-xs text-black">
                  Don't have an account?{' '}
                  <Link
                    href="/dashboard/register"
                    className="text-center text-xs text-blue-600"
                  >
                    Register
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
};

export default Login;
