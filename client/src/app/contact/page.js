'use client';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import React from 'react'
import Image from 'next/image'
import AboutImg from 'public/about.png';
import Stars from 'public/stars.png';
import { useFormik } from 'formik';


const initialValues = {
name:"",
email:"",
floor: "",
message:""
}

const onSubmit = values => {

}

const validate = values => {
    let errors = {}

    if(!values.name){
        errors.name = 'Name is required'
    }

    if(!values.email){
        errors.email = 'Name is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email ='Invalid email format'
    }

    
}

const contact = () => {

const formik =useFormik({
    initialValues,
    onSubmit,
    validate


})

   console.log(formik.values);

    return (
    <div>
        <Navbar/>

                <div className='mx-[20px] md:ml-[60px] md:mr-[40px] md:mb-[30px] md:h-[750px] h-[1030px]'>
                    <div>
                        <h1 className='md:text-[38px] flex justify-center mb-[30px] font-bold'>Contact Us</h1>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center items-center h-[900px] md:h-[650px] '>
                        <div className='flex md:flex-1 justify-center'>
                            <div className='flex flex-col m-3 rounded-[4px] border-[#0F8649]  border-2 h-[460px] md:h-[460px]'>
                                            <div className='bg-[#E9E9E9] '>
                                                <Image src={AboutImg} alt='about image' width={300} height={300} className='object-cover'  />
                                            </div>
                                            <div className='flex  flex-col h-[200px] p-3 justify-evenly '>
                                                <div>
                                                    <p className='text-[13px] md:text-base'>UNISEX hEAVY BLEND HOODIE |
                                                        <br />
                                                    GLIDAN 13000
                                                    </p>
                                                </div>
                                                <div className='flex flex-col md:flex-row md:gap-3 items-center'>
                                                    <Image src={Stars} alt='stars image' width={150} height={150} className='object-cover'  />
                                                    <p>299 reviews</p>
                                                </div>
                                                <div className=' md:pt-[20px] pt-[5px]'>
                                                    <h1 className='text-[13px] md:text-base font-bold' >Starting from $70.75</h1>
                                                </div>
                                                
                                            </div>
                            </div>
                        </div>
                        
                        <div className='flex md:flex-1  '>
                            <div className='flex bg-[#E9E9E9] rounded-[5px]  m-3 w-[360px] md:w-[400px] h-[430px] flex-col '>
                                <form onSubmit={formik.handleSubmit} action=" flex flex-col   ">
                                    <h1 className='font-bold ml-[35px] md:ml-[55px] mt-[25px]'>Get Started</h1>
                                    <div className='flex flex-col justify-center gap-3 text-[13px]'>
                                        <input type="text" id='name' name='name' placeholder='Enter Name' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} className='flex self-center h-[30px] w-[290px] border-2 border-[#E9E9E9] p-2' />
                                        {formik.errors.name ? <div>{formik.errors.name}</div>:null}

                                        <input type="email" id='email' name='email' placeholder='Enter Email' onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.email} className='flex self-center h-[30px] w-[290px] border-2 border-[#E9E9E9] p-2' />
                                        {formik.errors.email ? <div>{formik.errors.email}</div>:null}

                                        <input type="text" id='floor' name='floor' placeholder='floor/suite (optional)' onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.floor} className='flex self-center h-[30px] w-[290px]  p-2' />
                                        <textarea cols='10' rows='10'  name='message' placeholder='Enter your message here....' onChange={formik.handleChange} value={formik.values.message} className=' flex self-center w-[290px] h-[170px]'></textarea>
                                    </div>
                                    <div className='flex justify-center items-center mt-3 p-2'>    
                                        <button type='submit' className='flex justify-center items-center text-white text-[15px]  md:text-[20px] w-[160px] h-[40px]  md:w-[260px] md:h-[40px] font-bold text-center bg-[#0F8649] '>SUBMIT</button>
                                    </div>
                                </form>

                                
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
        <Footer/>
    </div>
    
  )
}

export default contact