'use client'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSidebarStatus, setSidebarOff } from '../../GlobalRedux/sidebarSlice'
import Link from 'next/link'
import {IoMdArrowBack} from 'react-icons/io'


const sidebar = () => {

const dispatch = useDispatch()
const isSidebarOn = useSelector(getSidebarStatus)

  return (
    <aside className={`${isSidebarOn ? 'left-0':'-left-full'} w-full bg-white fixed top-0 h-full
    shadow-2xl md:w-[35vw] xl:max-w-[55vh] transition-all duration-300 z-20 px-6 text-[#111]
    lg:px-[35px]}`}>
        <div className='cursor-pointer w-8 h-8 flex justify-center
        items-center' onClick={()=>dispatch(setSidebarOff())}>
            <IoMdArrowBack className='text-2xl '/>
        </div>
        <div>
            <div>All Categories</div>
            <ul>
                <li>
                    <Link href =''>
                        category here
                    </Link>
                </li>
            </ul>
        </div>
    </aside>

  )
}

export default sidebar