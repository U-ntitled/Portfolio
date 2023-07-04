import React from 'react'
import './style.service.css'
import Image from 'next/image'

function Service() {
  return (
    <div className=" bg-bgprimary font-Exo2  space-section snap-center">
      <span id='service'></span>
      <div className="flex flex-col justify-start  mb-10">
          <h2 className='h2 font-bold text-[#f2f2f2]'>OUR <span className='text-[#B73BF0]'> SERVICES</span></h2>
      </div>
      <div className='flex '>
        {/* <div className='w-[]'>
              <h2>WANT TO BRING YOUR IDEA INTO REALITY?</h2>
              <h3>Discover the services that we offer</h3>
          </div> */}
        <div className="flex-1 flex flex-wrap justify-center lgm:justify-start xxl:flex-nowrap   gap-5">
          <div className=" flex flex-col items-start  max-w-[500px] min-w-[350px] min-h-[350px]  pt-10 justify-start  py-5 px-[24px] bg-[#171135] rounded-2xl hover:opacity-80 transition-all duration-300 cursor-pointer ">  
              <span className="bg-[#c525ea1a]">
                <Image 
                    src='/web.svg' 
                    alt='web' 
                    width={100}
                    height={100}
                />
              </span>
              <h3 className='h3 font-bold text-[#B73BF0] mb-3'>UI/UX Design</h3>
              <p className='text-[1rem] text-[#f2f2f2]  '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo numquam ipsam commodi iure illo culpa quod itaque magnam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo numquam ipsam commodi iure illo culpa quod itaque magnam.</p>
          </div>
          <div className=" flex flex-col items-start  max-w-[500px] min-w-[350px]  pt-10 justify-start  py-5 px-[24px] bg-[#171135] rounded-2xl hover:opacity-80 transition-all duration-300 cursor-pointer ">  
              <span className="bg-[#c525ea1a]">
                <Image 
                    src='/web.svg' 
                    alt='web' 
                    width={100}
                    height={100}
                />
              </span>
              <h3 className='h3 font-bold text-[#B73BF0] mb-3'>Web Development</h3>
              <p className='text-[1rem] text-[#f2f2f2]  '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo numquam ipsam commodi iure illo culpa quod itaque magnam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo numquam ipsam commodi iure illo culpa quod itaque magnam.</p>
          </div>
          <div className=" flex flex-col items-start  max-w-[500px] min-h-[350px] pt-10 justify-start  py-5 px-[24px] bg-[#171135] rounded-2xl hover:opacity-80 transition-all duration-300 cursor-pointer ">  
              <span className="bg-[#c525ea1a]">
                <Image 
                    src='/web.svg' 
                    alt='web' 
                    width={100}
                    height={100}
                />
              </span>
              <h3 className='h3 font-bold text-[#B73BF0] mb-3'>Mobile Development</h3>
              <p className='text-[1rem] text-[#f2f2f2]  '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo numquam ipsam commodi iure illo culpa quod itaque magnam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo numquam ipsam commodi iure illo culpa quod itaque magnam.</p>
          </div>
          
          
      </div>
      </div>
      
    </div>
  )
}

export default Service