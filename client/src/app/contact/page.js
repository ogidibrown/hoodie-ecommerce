import React from 'react'
import Image from 'next/image'
import AboutImg from 'public/about.png';
import Stars from 'public/stars.png';

const contact = () => {
  return (
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
                <div className='flex bg-[#E9E9E9] rounded-[5px]  m-3 w-[300px] h-[400px]'>
                    <form action="">

                    </form>

                </div>
            </div>
            
        </div>
    </div>
  )
}

export default contact