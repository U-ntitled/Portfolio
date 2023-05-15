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
    <div className='bg-[#171135] flex flex-col  items-center text-white space-y-10'>
      <h2 className="font-bold h2">Our Project</h2>
      <p className="text-[#D9D9D9] text-center w-[70%] opacity-95" >Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
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