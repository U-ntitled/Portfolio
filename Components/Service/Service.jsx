import React from 'react'
import './style.service.css'
import Image from 'next/image'

function Service() {
  return (
    <div className=" bg-bgprimary font-Exo2  space-section snap-center">
      <span id='service'></span>
      <div className="flex flex-col justify-center items-center mb-4">
          <h2 className='h2 font-bold text-[#f2f2f2]'>OUR <span className='text-[#B73BF0]'>SERVICE</span></h2>
         
      </div>
      <div className='flex '>
        {/* <div className='w-[]'>
              <h2>WANT TO BRING YOUR IDEA INTO REALITY?</h2>
              <h3>Discover the services that we offer</h3>
          </div> */}
        <div className="flex-1 flex flex-wrap gap-5">
          <div className="flex-1 flex  flex-col  items-center justify-center bg-[#171135]  gap-3 py-10  md:py-16 rounded-lg ">  
              <span className="bg-[#c525ea1a]">
                <Image 
                    src='/web.svg' 
                    alt='web' 
                    width={150}
                    height={150}
                />
              </span>
              <h3 className='h3 font-bold '>UI/UX Design</h3>
              <p className='w-full px-5 md:w-[45ch] text-center text-[#f2f2f2be]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo numquam ipsam commodi iure illo culpa quod itaque magnam.</p>
          </div>
          <div className="flex-1 flex  flex-col  items-center justify-center bg-btnprimary opacity-95 gap-2 py-10  md:py-16 rounded-lg">  
              <span className="bg-[#c525ea1a]">
                <Image 
                    src='/web.svg' 
                    alt='web' 
                    width={150}
                    height={150}
                />
              </span>
              <h3 className='h3 font-bold' >Web Development</h3>
              <p className='w-full px-5 md:w-[45ch] text-center text-[#fff]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo numquam ipsam commodi iure illo culpa quod itaque magnam.</p>
          </div>
          <div className=" flex-1 flex flex-col  items-center justify-center bg-[#171135] gap-2 py-10 md:flex-1  md:py-16 rounded-lg">  
              <span className="bg-[#c525ea1a]">
                <Image 
                    src='/web.svg' 
                    alt='web' 
                    width={150}
                    height={150}
                />
              </span>
              <h3 className='h3 font-bold' >Mobile Development</h3>
              <p className='w-full px-5 md:w-[45ch] text-center text-[#f2f2f2be]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo numquam ipsam commodi iure illo culpa quod itaque magnam.</p>
          </div>
      </div>
      </div>
      
    </div>
  )
}

export default Service