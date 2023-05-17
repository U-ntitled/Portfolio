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
    <div className='bg-[#171135] flex flex-col  items-center text-white  gap-y-3 space-section'>
      <h2 className="font-bold h2">Our Project</h2>
      <p className="text-[#D9D9D9] text-center w-[100%] sx:[80%] opacity-95 pb-4" >Our portfolio showcases a collection of projects that we have successfully completed. Each of these projects represents our expertise and skillset in various domains. Whether it's graphic design, web development, content creation, or any other area of specialization, we have collaborated to deliver outstanding results. Explore our portfolio and discover the diversity and quality of our past projects.</p>
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