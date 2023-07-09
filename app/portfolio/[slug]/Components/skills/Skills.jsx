import React from 'react'
import "./style.skills.css"

function Skills() {
  return (
    <div className=' w-full expertise '>
      <div className="w-full skills-b pt-[10vh] pb-[13vh] px-10 ">
      <h2 className='uppercase expertise-title '>MY SKILLS</h2>
      <div className='w-[15vw] h-[0.7vh] mt-[3vh] back-style' id='souligne'></div>
      <div className="flex space-x-10 w-full" >
        <div className="flex flex-col space-y-10 w-[40%] skills-sub-title">
          <h4 className='font-Exo2 text-[#ffffff] lspace'>
            TECHNOLOGIES
          </h4>
          <h4 className='font-Exo2 text-[#ffffff] lspace'>
             FRAMEWORK
          </h4>
          <h4 className='font-Exo2 text-[#ffffff] lspace'>
             TOOLS
          </h4>
          
        </div> 
            
      </div>
      </div>
    </div>
  )
}

export default Skills
