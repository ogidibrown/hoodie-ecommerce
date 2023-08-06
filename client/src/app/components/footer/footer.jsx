import React from 'react'
import Twitter from '../../../../public/twitter.png'
import Insta from '../../../../public/insta.png'
import FB from '../../../../public/fb.png'
import Playstore from '../../../../public/playstore.png'
import Apple from '../../../../public/apple.png'
import Link from 'next/link'
import Image from 'next/image'



const Footer = () => {
  return (
    <div className='bg-[#502357] flex flex-col h-[700px]  w-full justify-evenly  '>
      <div className=' mx-[35px] flex flex-col justify-center md:justify-start p-2'>
        <h1 className='text-[35px] text-[#0F8649]'>Ogidi <span className='text-[#fff]'>Brown</span></h1> 
        <hr className=' border-b-4 text-white w-[200px]'/>
      </div>
      <div className=' grid grid-cols-2 grid-rows-4 md:flex place-items-center md:items-start gap-4 md:justify-evenly text-[#fff]'>
          <div className='flex flex-col md:gap-[18px] '>
            <span>About <span className='text-[#0F8649] text-[18px] font-semibold'>Brown</span></span>
            <span>Home</span>
            <span>Hotel</span>
            <span>Airports</span>
            <span>Regions</span>
            <span>Countries</span>
          </div>
          <div className='flex flex-col md:gap-[18px] '>
            <span>Unique places to be</span>
            <span>Reviews</span>
            <span>Travel communities</span>
            <span>Vacations</span>
            <span>Seasonal and Holidays</span>
            <span>Guest Houses</span>
          </div>
          <div className='flex flex-col md:gap-[18px] '>
            <span>Home</span>
            <span>Apartments</span>
            <span>Resorts</span>
            <span>Villas</span>
            <span>Hostels</span>
            <span>Guest Houses</span>
          </div>
          
          <div className='flex flex-col md:gap-[18px]'>
            <span>Carrential</span>
            <span>Flight Founder</span>
            <span>Restaurant reservations</span>
            <span>Travel agent</span>
          </div>
      </div>
      <div className='flex gap-[10px] justify-center '>
          <div className='flex gap-[18px]'>
          <Link href="/" className='flex items-center' ><Image src={Twitter} width={28} height={28} alt='social media' className='flex items-center pt-1' /></Link>
          <Link href="/" className='flex items-center' ><Image src={Insta} width={28} height={28} alt='social media' className='flex items-center pt-1' /></Link>
          <Link href="/" className='flex items-center' ><Image src={FB} width={28} height={28} alt='social media' className='flex items-center pt-1' /></Link>

          </div>
          <div className='flex text-white border-2 border-[#fff] h-[37px] w-[107px] rounded-[7px] cursor-pointer'>
              <div className='flex items-center p-1'>
               <Image src={Apple} width={20} height={20} alt='social media' className='' />
              </div>
              <div className='flex flex-col justify-center' >
                  <span className='text-[8px]'>Download on the</span>
                  <span className='text-[11px] font-semibold'>App Store</span>
              </div>           
          </div>
          <div className='flex text-white border-2 border-[#fff] h-[37px] w-[107px] rounded-[7px] cursor-pointer'>
              <div className='flex items-center p-1'>
                <Image src={Playstore} width={25} height={25} alt='social media' className='' />
              </div>
              <div className='flex flex-col justify-center' >
                  <span className='text-[8px]'>Download on the</span>
                  <span className='text-[11px] font-semibold'>Google Play</span>
              </div>           
          </div>
      </div>
    </div>
  )
}

export default Footer