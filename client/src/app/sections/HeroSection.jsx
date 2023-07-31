'use client'
import Image from 'next/image'
import Carousel from '../components/Carousel'




const Slides = [
    "/hero1.png",
    "/hero2.png",
    "/hero3.png",
    "/hero4.png"
]

const HeroSection = () => {
  return (
    <div className="">
        <Carousel autoSlide={true} autoSlideInterval={4000} >
            {Slides.map((s)=>(
                <Image src={s} width={900} height={900} alt="hero images" className=' h-[400px] md:min-h-screen md:min-w-full  w-full ' />
            ))}
            
        </Carousel>
    </div>
  )
}

export default HeroSection