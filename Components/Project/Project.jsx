import React from 'react'
import Card from './Element/Card'
import {projet as project} from '../../data/projet'

function Project() {
  return (
    <div className='bg-[#171135] flex flex-col  items-center text-white  gap-y-3 space-section font-Exo2'>
       <span id='project'/>
      <h2 className="font-bold h2">Our Project</h2>
      <p className="text-[#D9D9D9] text-center w-[100%] sx:[80%] opacity-95 pb-4" > Explore our portfolio and discover the diversity and quality of our past projects . Each of these projects represents our expertise and skillset in various domains</p>
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2 project-card ">
          {
            project.map((elem,key)=>(
              <Card key={key} capture={elem.image} direction={elem.direction} delay={elem.delay}/>
            ))
          }
      </div>
    </div>
  )
}

export default Project