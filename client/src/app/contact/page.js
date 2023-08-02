import React from 'react'
import Image from 'next/image'
import AboutImg from 'public/about.png';
import Stars from 'public/stars.png';

const contact = () => {
  return (
    <div className='mx-[20px] md:mx-[40px] mb-[30px]'>
        <div>
            <h1 className='md:text-[38px] flex justify-center mb-[30px] font-bold'>Contact Us</h1>
        </div>
        <div className='flex'>
            <div className='flex justify-center flex-1'>
                    <div className='flex flex-col m-3 rounded-[4px] border-[#0F8649] border-2 h-[330px] md:h-[460px]'>
                            <div className='bg-[#E9E9E9] '>
                                <Image src={AboutImg} alt='about image' width={300} height={300} className='object-cover'  />
                            </div>
                            <div className='flex flex-col h-[200px] p-3 justify-evenly '>
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
            <div className='flex justify-center flex-1'>
                Lorem, ipsum dolor sit amet consectetur
                 adipisicing elitjfygkhlkjkkkkkkkkkkkkkkkkkk
                 jjjjjjjjjjjjjjvjhfhjjhfjgmnhhhvhvjmbj,n,
                 hgcvhbmbjjhvnbmnbjnbnnvbmbmnv bv cnbkgncgf
                 hccghgjk,hjhcbxbbvnbgnbchhmbjb g

            </div>
        </div>
    </div>
  )
}

export default contact