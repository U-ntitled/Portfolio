'use client'
import React from 'react'
import './style.module.css'
import {motion,easeInOut} from 'framer-motion'

function Footer() {
  return (
    <div className='bg-[#171135] flex flex-col space-y-3 text-white space-section'>
      <div className="flex justify-between items-center flex-wrap footer-title space-y-3 w-full">
          <motion.img 
          initial={{x: -100 ,opacity:0}}
          transition={{duration: 0.5 ,easeInOut}}
          whileInView={{x:0,opacity:1}}
          viewport={false}
          src='LOGO.svg' alt='logo' className='footer-logo'/>
        <motion.div 
          initial={{x: 100 ,opacity:0}}
          transition={{duration: 0.5 ,easeInOut}}
          whileInView={{x:0,opacity:1}}
          viewport={false}
        className="flex space-x-3 items-center">
           <img src='reso.png' alt='social media icon'/>
           <img src='reso.png' alt='social media icon'/>
           <img src='reso.png' alt='social media icon'/>
           <img src='reso.png' alt='social media icon'/>
        </motion.div>
      </div>
      <div className="flex justify-center items-center w-full ">
        <div className="flex justify-between items-start w-[85%] flex-wrap footer space-y-3 tg:space-y-0">
          <motion.div 
            initial={{x: -100 ,opacity:0}}
            transition={{duration: 0.5 ,easeInOut}}
            whileInView={{x:0,opacity:1}}
            viewport={false}
          className="flex flex-col space-y-2  ">
            <h6 className='uppercase font-bold text-xl'>overview</h6>
            <a className='a opacity-70' href='#about'>About us</a>
            <a className='a opacity-70' href='#service'>Our services</a>
            <a className='a opacity-70' href='#project'>Our projects</a>
            <a className='a opacity-70' href='#team'>Our team</a>
          </motion.div>
          <motion.div 
            initial={{y: 100 ,opacity:0}}
            transition={{duration: 0.5 ,easeInOut}}
            whileInView={{y:0,opacity:1}}
            viewport={false}
          className="flex flex-col space-y-2">
            <h6 className='uppercase font-bold text-xl'>Our Services</h6>
            <a className='opacity-70' href='#about'>UI/UX Design</a>
            <a className='opacity-70' href='#service'>Web Development</a>
            <a className='opacity-70' href='#project'>Mobile Development</a>
          </motion.div>
          <motion.div 
            initial={{x: 100 ,opacity:0}}
            transition={{duration: 0.5 ,easeInOut}}
            whileInView={{x:0,opacity:1}}
            viewport={false}
          className="flex flex-col space-y-4 md:w-[40%] w-[100%]">
              <h2 className='h3 font-bold leading-tight'>LET’ S MAKE YOUR <span className='text-[#37BB8A]'>VISION</span> INTO <span className='text-[#37BB8A]'>REALITY</span></h2>
              <button className='bg-[#C525EA] flex justify-center items-center text-[#fff] py-2 w-[90%] btn '>SHARE US YOUR PROJECT</button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Footer