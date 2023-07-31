import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-opacity-50" style={{ backgroundImage: "url('/hero.png')" }}>
      <div className="flex justify-center items-center h-full">
        <div className="text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Hello, Next.js with Tailwind CSS!</h1>
          <p className="text-lg">This is an image background example using Tailwind CSS.</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection