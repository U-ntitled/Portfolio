import React from 'react'
import Card from './Element/Card'

const project = [{
  image: 'EniLab.png',
  description: '',
  direction:true,
  delay: 0.2
},{
  image: 'SeraoClub.svg',
  description: '',
  direction:false,
  delay: 0.4
},{
  image: 'portfolio.svg',
  description: '',
  direction:true,
  delay: 0.6
},{
  image: 'Connekta.svg',
  description: '',
  direction:false,
  delay:  0.8
}]
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