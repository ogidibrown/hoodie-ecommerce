'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '../../../../public/logo.png'
import {FaBars, FaShoppingCart} from 'react-icons/fa'
import {BsFillBagFill} from 'react-icons/bs'
import {ImSearch} from 'react-icons/im'
import { setSidebarOn } from '../../GlobalRedux/sidebarSlice'
import { useSelector,useDispatch } from 'react-redux'
import { BsPerson } from "react-icons/bs";




const Navbar = () => {

    const dispatch = useDispatch();
    

  return (
    <nav className='bg-[#fff] py-1 md:py-2 px-2 md:px-[100px] '>
        <div className='my-[10px]'>
            <div className='flex flex-col md:flex-row justify-center items-center md:flex md:justify-between'>

                <div className='flex '>
                    <ul className='flex gap-4 justify-center items-center text-sm'>
                        <li  className='flex text-[12px] md:text-[16px]'>
                            <Link href="/" >Seller center</Link>
                        </li>
                        <li className='flex text-[12px] md:text-[16px]'>
                            <Link href="/" >Download</Link>
                        </li>
                        <li className='flex text-[12px] md:text-[16px]'>
                            <span>About us</span>
                        </li>
                    </ul>
                </div>
                <div className=''>
                    <ul className='flex gap-4 justify-center items-center'>
                        <li className='flex text-[12px] md:text-[16px]'>
                            <Link href="/" >Contact Us</Link>
                        </li>
                        <li className='flex text-[12px] md:text-[16px]'>
                            <Link href="/" >Register</Link>
                        </li>
                        <li className='flex text-[12px] md:text-[16px]'>
                            <Link href="/" >Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-1 md:gap-2'>
                < FaBars  className='text-[#111] md:w-[25px] md:h-[25px] cursor-pointer ' onClick={()=>dispatch(setSidebarOn())}  />
               < BsFillBagFill className='text-[#111] md:w-[25px] md:h-[25px]' />
               <Link href="/" className='flex items-center' ><Image src={Logo} width={50} height={50} className='flex items-center pt-1' /></Link>

            </div>
            <div className='flex flex-col' >
                <div className=' bg-white flex  w-[150px] md:w-[810px] items-center border-4 border-[#0F8649] rounded-[3px] '>
                    <input type="text" placeholder='Search your prefered product here...' className='w-[110px] p-2 md:w-[800px] md:h-[40px]  h-[30px] border-none outline-none text-[10px] md:text-[15px] text-[#111] rounded-[5px]' />
                    <Link href='' className='md:w-[60px] w-[40px] h-[22px] mr-[4px] md:h-[30px] bg-[#0F8649]  rounded-[3px] flex items-center justify-center'>
                        <ImSearch className='text-[#fff]' />
                    </Link>
                </div>
            
            </div>
            <div className='flex  items-center'>
                <div className='flex items-center'>
                    <BsPerson className='text-[#111] w-7 h-7 md:w-[30px] md:h-[30px] ' />
                    <FaShoppingCart className='text-[#111] h-7 w-[30px] md:w-[30px] md:h-[30px] ' />
                </div>
                <div className='bg-[#111] rounded-[50%] w-4 h-4 absolute ml-[45px] mb-[22px] md:ml-[55px] md:mb-[25px] text-center text-[#fff] text-[11px] md:text-[12px]'>
                    0
                </div>
            </div>

        </div>
    </nav>
  )
}

export default Navbar