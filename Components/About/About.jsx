import React from 'react'
import './style.module.css'


function About() {
  return (
    <div className='bg-[#171135] flex flex-row justify-around h-[100vh]'>
      <div className='w-[36%] mt-[10%] text-[#D9D9D9] pl-[5vw]'>
        <h1 className='uppercase font-bold text-3xl '>
          WHO ARE US ?
        </h1>

        <h3 className='mt-[7vh] font-bold text-xl ml-[-3vw]' ><span className='font-bold text-xl text-[#41B192] ml-[-1vw] mr-[1vw]'>------</span>We are a <span className='text-[#C525EA]'>TEAM</span></h3>
        <p className='mt-[5vh] text-[12px] font-bold'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cum cumque deserunt atque quam laborum. <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quasi laudantium excepturi. <br />
          Lorem ipsum dolor sit amet. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur ex veritatis id? Delectus, ut. <br />
        </p>

        <button className='mt-[7vh] bg-[#C525EA] px-[1vw] py-[2px]'>
          Check Our Services
        </button>
      </div>
      <div className='w-[36%] mt-[10%]'>
        <div className='bg-[#FFFFFF] h-[70%] w-[25vw] ml-[5vw]'>
            
        </div>
      </div>

    
    </div>
  )
}

export default About