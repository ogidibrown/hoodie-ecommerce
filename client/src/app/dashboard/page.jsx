'use client'
import { useState } from 'react';
import { data } from '../data/Data';
import Stars from '../../../public/stars.png';
import Image from 'next/image';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
// import { useSession } from 'next-auth/react';
// import { useEffect, useState } from 'react';

const DashboardPage = () => {

  const [hoodies, setHoodies] = useState(data);

   const filterType = (category) => {
    setHoodies(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  
  //   Filter by price
  const filterPrice = (price) => {
    setHoodies(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  // const { data: session } = useSession(); // Use NextAuth's useSession hook
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (session) {
  //     setLoading(false); // Set loading to false once user session is available
  //   }
  // }, [session]);

  return (
    
    // <div>
    //   {loading ? (
    //     <div>Loading...</div>
    //   ) : session ? (
      
  


  
   //   Filter Type Nike/Essentials/New Products/etc
 


  
    <div className='w-full h-full bg-[#fff] '>
      <Navbar />
      <div className='flex flex-col lg:flex-row p-2 justify-between'>
          {/*filter type*/}
          <div className='font-bold text-gray-700'>
            <p>Filter Hoodie Type</p>
            <div className='flex justify-between flex-wrap'>
                <button onClick={()=>setHoodies(data)} className='m-1 p-2  text-prange-600 border-2  rounded-[10px] border-green-600 hover:bg-[#B2E7AE] hover:text-white'>All</button>
                <button onClick={()=>filterType("new")} className='m-1 p-2 border-green-600  border-2 rounded-[10px] hover:bg-[#B2E7AE] hover:text-white'>New <span className='text-[#1C49E9]'>Products</span></button>
                <button onClick={()=>filterType("nike")} className='m-1 p-2 border-green-600  border-2 rounded-[10px] hover:bg-[#B2E7AE] hover:text-white'>Nike <span className='text-[#1C49E9]'>Hoodies</span></button>
                <button onClick={() => filterType("louis")} className='m-1 p-2 border-green-600  border-2 rounded-[10px] hover:bg-[#B2E7AE] hover:text-white'>Louis <span className='text-[#1C49E9]'>Vuitton</span></button>
                <button onClick={()=>filterType("essentials")} className='m-1 p-2 border-green-600  border-2 rounded-[10px] hover:bg-[#B2E7AE] hover:text-white'>Essentials</button>

            </div>
          </div>
          {/*filter price*/}
          <div>
            <p className='font-bold text-gray-700'>Filter Hoodie Price</p>
            <div className='flex justify-between max-w-[390px] w-full '>
                <button onClick={()=>filterPrice("$150")} className='m-1 p-2 border-green-600  border-2 rounded-[10px] hover:bg-[#B2E7AE] hover:text-white'>$150</button>
                <button onClick={()=>filterPrice("$170")} className='m-1 p-2 border-green-600  border-2 rounded-[10px] hover:bg-[#B2E7AE] hover:text-white'>$170</button>
                <button onClick={()=>filterPrice("$200")} className='m-1 p-2 border-green-600  border-2 rounded-[10px] hover:bg-[#B2E7AE] hover:text-white'>$200</button>
                <button onClick={()=>filterPrice("$250")} className='m-1 p-2 border-green-600  border-2 rounded-[10px] hover:bg-[#B2E7AE] hover:text-white'>$250</button>
            </div>
          </div>
      </div>
      
      {/*Display Hodies*/}
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 pt-4'>
        {hoodies.map((item, index) => (
          <div key={index} className='flex shadow-lg hover:scale-105 duration-300  flex-col m-3 rounded-md border-2 border-green-600 h-[400px] md:h-[500px]'>
            <div className='text-white bg-green-500 duration-300 absolute p-2'>Available</div>
            <div className='bg-gray-300 h-[350px] w-full flex justify-center items-center self-center'>
              <Image src={item.image} alt={item.name} width={300} height={300} className='object-cover md:w-[300px] md:p-5 md:h-[380px]'  />
            </div>
            <div className='flex  flex-col h-[200px] p-3 justify-evenly '>
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
                    <div className=' md:pt-[20px] flex justify-between pt-[5px]'>
                      <h1 className='text-[13px] md:text-base font-bold' >{ item.name}</h1>
                      <h1 className='text-[13px] md:text-base font-bold' >Price { item.price}</h1>
                    </div>
                                                
                  </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  




        
    //   ) : (
    //     <div>
    //       Not authorized. Redirecting...
    //     </div>
    //   )}
    // </div>
  );
};

export default DashboardPage;
