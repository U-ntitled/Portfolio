'use client'
import {motion,easeInOut} from 'framer-motion'
import React, { useEffect } from 'react'

function Card({capture,direction,delay,description}) {
  return (
    <motion.div  
    initial={{x: direction ? -100 : 100,opacity:0}}
    transition={{duration: 0.5 ,easeInOut,delay: delay}}
    whileInView={{x:0,opacity:1}}
    className='bg-[#140D0D] h-[392px] w-[430px] relative flex flex-col items-center rounded-xl project-cart'>
        <img src={capture}  className='p-3 h-[304px]' alt='enilab capture'/>
        <div className="flex justify-between items-center px-5 bg-[#282323] absolute bottom-0 w-full h-[84px] card-bottom  rounded-br-xl rounded-bl-xl">
            <img src='info.png' alt='info' className='cursor-pointer' />
            <h3 className='h3 uppercase font-bold'>{description}</h3>
            <img src='link1.svg' height={40} width={40}  alt='link' className='cursor-pointer' />
        </div>
    </motion.div>
  )
}

export default Card
