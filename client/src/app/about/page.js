import React from 'react'
import Image from 'next/image'
import AboutImg from 'public/about.png';
import Stars from 'public/stars.png';
import Link from 'next/link';


const About = () => {
  return (
    <div className='mx-[20px] mb-[30px]'>
        <div className='w-full relative h-[930px] md:h-[800px]'>
            <h1 className='md:text-[38px] flex justify-center mb-[30px] font-bold'>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tenetur maxime assumenda est mollitia labore possimus 
                quibusdam facere sed! Deserunt illum consectetur, optio 
                voluptas numquam ipsum non possimus rem tempore iure itaque 
                amet sunt. Ea laboriosam earum sit voluptates fuga similique 
                repudiandae placeat ipsam accusantium consectetur rem ullam, 
                velit delectus explicabo id odit consequuntur reprehenderit, 
                reiciendis quos vel officia. Voluptatem, temporibus expedita 
                quae qui iure officiis a accusantium, incidunt animi tempore 
                <br />
                <br />
                debitis magni eaque numquam rem, quasi excepturi voluptas dolor 
                doloremque enim doloribus corporis ad veritatis molestiae possimus? 
                Totam perspiciatis dicta debitis, voluptates, consequuntur commodi 
                praesentium possimus eum incidunt, magni similique!
            </p>
            <div className='grid grid-cols-2 place-items-center gap-1 md:grid-cols-3 '>
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
                <div className='flex-col m-3 rounded-[4px] border-[#0F8649] border-2 h-[330px] md:h-[460px] hidden md:flex'>
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
            <div className='absolute  left-[20px] bg-[#53c28bc4] p-[5px] text-white '>
                <h1>Digital Shopping</h1>
                <h2>Handcrafting award winning digital experience</h2>
            </div>
        </div>
        <div className='flex gap-4'>
            <div className='flex-1 text-justify  mt-[20px] gap-2'>
                <h1 className='font-bold text-2xl mb-2'>Who are We?</h1>
                <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat ratione nostrum sequi obcaecati iste enim in accusantium rerum ut,
                    quod, minus, accusamus officia harum! Explicabo provident ipsum iste ipsa repellat
                    <br/>
                    <br/>

                    ipsam iure adipisci itaque beatae porro provident eaque reprehenderit voluptas quam,
                    harum sit aspernatur pariatur quos sequi nostrum. Adipisci obcaecati natus delectus 
                </p>
            </div>
            <div className=' mt-[20px] flex-1 gap-2 text-justify .' >
            <h1 className='font-bold text-2xl mb-2'>What We Do</h1>
                <p className='mb-[20px]'>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat ratione nostrum sequi obcaecati iste enim in accusantium rerum ut,
                    quod, minus
                    <br/>
                    <br/> -Dynamic Shoppiing
                    <br/> -Fast and Handy 
                    <br/> -All kinds of Hodies
                                
                </p>
                <Link href='/contact' >  
                    <button className='w-[100px] h-[40px] bg-[#0F8649] text-white rounded-[3px]'>Contact Us</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default About