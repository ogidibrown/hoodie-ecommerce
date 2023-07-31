import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-opacity-50" style={{ backgroundImage: "url('/hero1.png')" }}>
        <div className='flex flex-col items-center min-h-screen  justify-evenly'>
            <div className="flex justify-center items-center h-full">
                <h1 className="text-[60px] font-semibold text-white text-center leading-[90px]  [text-shadow_10px_rgb(0_0_0_/_40%)] uppercase">
                    "Let's explore a treasure <br/> 
                    trove of <span className='text-[#0F8649]'>uniquely designed</span> <br/>
                    hoodies."
                    </h1> 
            </div>
            <div className='flex justify-center items-center mb-[70px]'>
                    <button className='text-white text-[33px]  w-[280px] h-[60px] font-bold text-center bg-black'>SHOP NOW</button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection