'use client'
import Sidebar from './components/sidebar/sidebar'
import HeroSection from './sections/HeroSection'
import NewProducts from './sections/NewProducts'
import Nike from './sections/Nike'
import Lious from './sections/Lious'



export default function Home() {
  return (
    <div className=''>
      <Sidebar />
      <HeroSection/>
      <NewProducts/>
      <Nike />
      <Lious/>
    </div>
  )
}