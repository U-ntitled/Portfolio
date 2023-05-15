import React from 'react'
import Card from './Element/Card'

const project = [{
  image: 'EniLab.png',
  description: ''
},{
  image: 'SeraoClub.svg',
  description: ''
},{
  image: 'portfolio.svg',
  description: ''
},{
  image: 'Connekta.svg',
  description: ''
}]
function Project() {
  return (
    <div className='bg-[#171135] flex flex-col space-y-3 items-center text-white'>
      <h2 className="uppercase font-bold text-3xl">Our Project</h2>
      <h6 className="text-[#D9D9D9] text-center" >Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</h6>
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2 project-card">
          {
            project.map((elem,key)=>(
              <Card key={key} capture={elem.image}/>
            ))
          }
      </div>
    </div>
  )
}

export default Project