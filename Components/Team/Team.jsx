import React from 'react'
import './style.module.css'

function Team() {
  const members = [
    {
      avatarUrl: '',
      fullName: 'RAKOTONANDRASANA Jean Pierre',
      domain:'Fullstack Developper',
      contacts: ['','',''],
      classes:'upLeft bg-[#F0F0F0] flex flex-col m-6 rounded-xl items-center justify-evenly'
    },
    {
      avatarUrl: '',
      fullName: 'RAKOTONANDRASANA Jean Pierre',
      domain:'Fullstack Developper',
      contacts: ['','',''],
      classes:'center bg-[#F0F0F0] flex flex-col m-6 rounded-xl items-center justify-evenly'
    },
    {
      avatarUrl: '',
      fullName: 'RAKOTONANDRASANA Jean Pierre',
      domain:'Fullstack Developper',
      contacts: ['','',''],
      classes:'upRight bg-[#F0F0F0] flex flex-col m-6 rounded-xl items-center justify-evenly'
    },
    {
      avatarUrl: '',
      fullName: 'RAKOTONANDRASANA Jean Pierre',
      domain:'Fullstack Developper',
      contacts: ['','',''],
      classes:'bLeft bg-[#F0F0F0] flex flex-col m-6 rounded-xl items-center justify-evenly'
    },
    {
      avatarUrl: '',
      fullName: 'RAKOTONANDRASANA Jean Pierre',
      domain:'Fullstack Developper',
      contacts: ['','',''],
      classes:'bRight bg-[#F0F0F0] flex flex-col m-6 rounded-xl items-center justify-evenly'
    }
  ]
  return (
    <div className='bg-[#0A0E26] h-[100vh] w-[100vw] flex flex-col general-content items-center'>
      <div className="h-full flex flex-col justify-between  items-center w-full">

        {/* Texts section */}
        <div className="h-[20%] flex flex-col justify-evenly titles">
          {/* Title of the Section */}
          <div className="text-center">
            <h2 className='font-semibold text-[2rem]'>MEET THE MEMBERS OF OUR TEAM</h2>
          </div>

          {/* Description below the title*/}
          <div className="text-center">
            <p>We are a team of five Developers working in a different domains. The domains shown below represent only each member's specificity</p>
          </div>
        </div>

        {/* Cards section */}
        <div className="h-[75%] members-cards">
          {
            members.map((elem,key)=>(
              <div key={key} className={elem.classes}>
                {/* Avatar */}
                <div className="avatar w-[8rem] h-[8rem] rounded-full bg-gray-600">

                </div>

                {/* Abouts */}
                  {/* Name */}
                  <div className="text-center flex justify-center max-w-[80%]">
                    <h2 className='text-[#0A0E26] font-bold fnames'>{elem.fullName}</h2>
                  </div>
                  {/* Funtion */}
                  <div className="">
                    <p className='text-[#BA38F2] font-bold domain'>{elem.domain}</p>
                  </div>
                {/* Contants Link */}
                <div className="flex flex-row w-full justify-center space-x-6 contacts">
                  <div className="icons w-[3rem] h-[3rem] bg-slate-500 rounded-full">

                  </div>
                  <div className="icons w-[3rem] h-[3rem] bg-slate-500 rounded-full">

                  </div>
                  <div className="icons w-[3rem] h-[3rem] bg-slate-500 rounded-full">

                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Team