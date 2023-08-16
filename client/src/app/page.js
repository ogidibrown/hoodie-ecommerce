'use client'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Sidebar from './components/sidebar/sidebar'
import HeroSection from './sections/HeroSection'
import Products from './sections/Products'






export default function Home() {
  return (
    <div className=''>
      <Navbar/>
      <Sidebar />
      <HeroSection/>
      <Products/>
      
      <Footer/>
    </div>
  )
}