'use client'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Sidebar from './components/sidebar/sidebar'
import HeroSection from './sections/HeroSection'
import NewProducts from './sections/NewProducts'
import Nike from './sections/Nike'
import Lious from './sections/Lious'
import Essential from './sections/Essential'





export default function Home() {
  return (
    <div className=''>
      <Navbar/>
      <Sidebar />
      <HeroSection/>
      <NewProducts/>
      <Nike />
      <Lious/>
      <Essential />
      <Footer/>
    </div>
  )
}