'use client'
import React from 'react'
import './style.module.css'
import {motion,easeInOut} from 'framer-motion'
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter,
  faGithub,
  faFacebookF,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

library.add(
   faFacebookF,
   faLinkedinIn,
   faGithub,
   faTwitter
)

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div className='bg-[#171135] flex flex-col space-y-3 text-white space-section font-Exo2'>
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
        <div className='inline-block'>
          <a href='https://github.com/U-ntitled' target={'_blank'}>
            <span className=' w-[45px] h-[45px] flex items-center justify-center rounded-full bg-white   p-[6px] text-[#3b5998] hover:bg-[#3b5998] hover:text-white cursor-pointer transition-all ease-in-out duration-300 '>
                  <FontAwesomeIcon 
                     icon={faFacebookF}
                     size='xl'
                  />
            </span>
          </a>
        </div>
        <div className='inline-block ml-5'>
          <a href='https://github.com/U-ntitled' target={'_blank'}>
              <span className='  w-[45px] h-[45px] flex items-center  justify-center rounded-full bg-white text-[#00acee]  p-[12px]  hover:bg-[#00acee] hover:text-white  cursor-pointer transition-all ease-in-out duration-300 '>
                  <FontAwesomeIcon 
                     icon={faTwitter}
                     size="2x"
                  />
            </span>
          </a>
        </div>
        <div className='inline-block ml-5'>
          <a href='https://github.com/U-ntitled' target={'_blank'}>
            <span className=' w-[45px] h-[45px] flex items-center justify-center rounded-full bg-white   p-[6px] text-[#0072b1] hover:bg-[#0072b1] hover:text-white cursor-pointer transition-all ease-in-out duration-300 '>
                  <FontAwesomeIcon 
                     icon={faLinkedinIn}
                     size='xl'

                  />
            </span>
          </a>
        </div>
        <div className='inline-block  ml-5'>
          <a href='https://github.com/U-ntitled' target={'_blank'}>
            <span className='  w-[45px] h-[45px] text-[24px] flex items-center justify-center rounded-full bg-black p-[6px] text-white hover:bg-white hover:text-black  cursor-pointer transition-all ease-in-out duration-300 '>
                <FontAwesomeIcon 
                   icon={faGithub}
                   size="2x"
                />
            </span>
          </a>
        </div>
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
            <a className='a opacity-70 hover:text-[#B73BF0]' href='#about'>About us</a>
            <a className='a opacity-70 hover:text-[#B73BF0]' href='#service'>Our services</a>
            <a className='a opacity-70 hover:text-[#B73BF0]' href='#project'>Our projects</a>
            <a className='a opacity-70 hover:text-[#B73BF0]' href='#team'>Our team</a>
          </motion.div>
          <motion.div 
            initial={{y: 100 ,opacity:0}}
            transition={{duration: 0.5 ,easeInOut}}
            whileInView={{y:0,opacity:1}}
            viewport={false}
          className="flex flex-col space-y-2">
            <h6 className='uppercase font-bold text-xl'>Our Services</h6>
            <a className='opacity-70 hover:text-[#B73BF0]' href='#service'>UI/UX Design</a>
            <a className='opacity-70 hover:text-[#B73BF0]' href='#service'>Web Development</a>
            <a className='opacity-70 hover:text-[#B73BF0]' href='#service'>Mobile Development</a>
          </motion.div>
          <motion.div 
            initial={{x: 100 ,opacity:0}}
            transition={{duration: 0.5 ,easeInOut}}
            whileInView={{x:0,opacity:1}}
            viewport={false}
          className="flex flex-col space-y-4 md:w-[40%] w-[100%]">
              <h2 className='h3 font-bold leading-tight'>LET’ S MAKE YOUR <span className='text-[#37BB8A]'>VISION</span> INTO <span className='text-[#37BB8A]'>REALITY</span></h2>
              <button className='bg-[#C525EA] flex justify-center items-center text-[#fff] py-3 w-[90%] btn rounded-md'>SHARE US YOUR PROJECT</button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Footer