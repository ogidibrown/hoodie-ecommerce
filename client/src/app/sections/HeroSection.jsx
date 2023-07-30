import Image from 'next/image'

const HeroSection = () => {
  return (
    <div>
       
            <Image src='/hero.png' width={1000} height={1000} alt='hero' className='w-full h-[964px]'/>
        
       
    </div>
  )
}

export default HeroSection