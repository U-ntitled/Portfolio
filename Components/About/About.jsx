import React from 'react'
import './style.module.css'


function About() {
  return (
    <div className='bg-[#171135] flex flex-row justify-between items-center  space-section'>
      <div className='w-[36%]  text-[#D9D9D9] pl-[5vw] space-y-4'>
        <h2 className='uppercase font-bold h2 '>
          WHO ARE US ?
        </h2>
        <h3 className=' font-bold text-xl ml-[-3vw]' ><span className='font-bold text-xl text-[#41B192] ml-[-1vw] mr-[1vw]'>------</span>We are a <span className='text-[#C525EA]'>TEAM</span></h3>
        <p className=' text-[12px] font-bold'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cum cumque deserunt atque quam laborum. <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quasi laudantium excepturi. <br />
        </p>

        <button className=' bg-[#C525EA] px-[1vw] py-[2px]'>
          Check Our Services
        </button>
      </div>
      <div className='w-[36%] '>
        <div className='bg-[#FFFFFF] h-[35vh] w-[25vw] '>
            
        </div>
      </div>

    
    </div>
  )
}

export default About