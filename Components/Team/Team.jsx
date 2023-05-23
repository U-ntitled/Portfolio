'use client'
import React from 'react'
import './style.team.css'
import {motion} from 'framer-motion'
import {teams as members} from '../../data/teams'

function Team() {
  return (
    <div className='bg-[#0A0E26] flex flex-col general-content items-center font-Exo2 space-section'>
      <span id='team'/>
      <div className="h-full flex flex-col justify-between  items-center w-full space-y-14">

        {/* Texts section */}
        <div className="h-[18%] flex flex-col justify-evenly titles">
          {/* Title of the Section */}
          <div className="text-center">
            <h2 className='h2 text-[2rem] text-[#D9D9D9]'>MEET THE MEMBERS OF OUR TEAM</h2>
          </div>

          {/* Description below the title*/}
          <div className="text-center text-[#D9D9D9]">
            <p>We are a team of five Developers working in a different domains. The domains shown below represent only each member's specificity</p>
          </div>
        </div>

        {/* Cards section */}
        <div className="h-[82%] members-cards">
          {
            members.map((elem,key)=>(
              <motion.div 
              initial={{x: elem.direction ? -100 : 100,opacity:0}}
              transition={{duration: 0.5 }}
              whileInView={{x:0,opacity:1}}
              key={key} className={elem.classes}>
                {/* Avatar */}
                <div className="avatar w-[8.5rem] h-[8.5rem] rounded-full bg-gray-600">

                </div>

                {/* Abouts */}
                  {/* Name */}
                  <div className="text-center flex justify-center max-w-[75%] fnames-container">
                    <h2 className='text-[#0A0E26] font-bold fnames'>{elem.fullName}</h2>
                  </div>
                  {/* Funtion */}
                  <div className="max-w-[75%] text-center domain-container">
                    <p className='text-[#BA38F2] font-bold domain'>{elem.domain}</p>
                  </div>
                {/* Contants Link */}
                <div className="flex flex-row w-full justify-center space-x-6 contacts">
                  <div className="icons w-[2.5rem] h-[2.5rem] bg-slate-500 rounded-full">

                  </div>
                  <div className="icons w-[2.5rem] h-[2.5rem] bg-slate-500 rounded-full">

                  </div>
                  <div className="icons w-[2.5rem] h-[2.5rem] bg-slate-500 rounded-full">

                  </div>
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Team