import React from 'react'
import './style.service.css'

function Service() {
  return (
    <div className='bg-[#0A0E26] h-[100vh] text-[#D9D9D9] py-[15vh] space-section responsive-space snap-center'>
      <span id='service'/>
      <h1 className='font-semibold text-[2rem] text-center font-Exo2'>OUR SERVICES</h1>
      <p className='text-center text-[15px] service-text font-Exo2'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi enim voluptatibus labore ullam repellat aliquid! <br />
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <div className="flex flex-row justify-around mt-[12vh] rows-service font-Exo2">
        <div className='ml-[2em] text-center justify-around'>
          <div className='w-[50%] h-[23vh] pt-[2.7vh] rounded-2xl text-center bg-[#c525ea1a] img-rows'>
            <img src="web-design 1.svg" alt="" className='my-[0] mx-auto' />
          </div>
          <h3 className=' font-bold text-center text-[#41B192] my-[1.5vh]'>
              UI/UX DESIGN
          </h3>
          <p className='text-center text-[15px] service-text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, provident. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Lorem, ipsum dolor.
          </p>
        </div>

        <div className='ml-[2em] text-center justify-around'>
          <div className='w-[50%] h-[23vh] pt-[2.7vh] rounded-2xl text-center bg-[#c525ea1a] img-rows'>
            <img src="web-design 1.svg" alt="" className='my-[0] mx-auto' />
          </div>
          <h3 className=' font-bold text-center text-[#41B192] my-[1.5vh]'>
              Web Developpement
          </h3>
          <p className='text-center text-[15px] service-text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, provident. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Lorem, ipsum dolor.
          </p>
        </div>

        <div className='ml-[2em] text-center justify-around'>
          <div className='w-[50%] h-[23vh] pt-[2.7vh] rounded-2xl text-center bg-[#c525ea1a] img-rows'>
            <img src="web-design 1.svg" alt="" className='my-[0] mx-auto' />
          </div>
          <h3 className=' font-bold text-center text-[#41B192] my-[1.5vh]'>
              Mobile Developpement
          </h3>
          <p className='text-center text-[15px] service-text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, provident. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Lorem, ipsum dolor.
          </p>
        </div>


      </div>
    </div>
  )
}

export default Service