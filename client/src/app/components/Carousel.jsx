'use client'
import React, { useEffect, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

export default function Carousel  ({children:Slides, autoSlide = false, autoSlideInterval= 2000}) {

    const [curr, setCur] = useState(0)

    const prev = ()=>{
        setCur((curr) => (curr === 0 ? Slides.length -1 : curr - 1))
    }
    const next = ()=>{
        setCur((curr) => (curr === Slides.length -1 ? 0 : curr + 1))
    }

    useEffect(()=>{
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return ()=> clearInterval(slideInterval)
        
    },[])


  return (
    <div className=' w-full bg-cover overflow-hidden relative'>
        <div className=' flex transition-transform bg-cover bg-center ease-out duration-500' style={{transform:`translateX(-${curr*100}%)`}}>{Slides}</div>
        <div className='absolute  inset-0 flex items-center justify-between md:mb-10 text-white'>
            <button onClick={prev} className='bg-black flex items-center rounded-full shadow mb-5 ml-3 cursor-pointer '>
              <BsChevronLeft size={40} />
            </button>
            <div className='flex flex-col items-center md:min-h-screen md:mt-10 gap-10 md:gap-2 justify-evenly'>
                <div className="flex justify-center items-center ">
                    <h1 className=" text-[20px] md:text-[60px] font-semibold text-white text-center  md:leading-[90px]  uppercase">
                        "Let's explore a treasure <br/> 
                        trove of <span className='text-[#0F8649]'>uniquely designed</span> <br/>
                        hoodies."
                        </h1> 
                </div>
                <div className='flex justify-center items-center mt-4 md:mb-[70px]'>
                        <button className='text-white text-[20px]  md:text-[33px] w-[180px] h-[40px]  md:w-[280px] md:h-[60px] font-bold text-center bg-black'>SHOP NOW</button>
                </div>
            </div>
            <button onClick={next} className='bg-black flex items-center rounded-full shadow mb-5 mr-3 cursor-pointer '>
              <BsChevronRight size={40} />
            </button>
            
        </div>
    </div>
  )
}
