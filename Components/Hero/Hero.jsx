'use client'
import React from 'react'
import { motion } from 'framer-motion'
import  styles  from './style.module.css'

import Image from 'next/image';
function Hero() {
  return (
    <div className='w-full h-[100vh] bg-bgprimary  font-Exo2'>
           <nav className='flex items-center  h-[8vh]  font-semibold mx-2 md:mx-16 text-white overflow-hidden'>
                <motion.div  
                    initial={{opacity:0, x:-50}}
                    animate= {{ opacity:1 , x:0}}
                    transition={{ duration:0.9 }}
                      className='w-[50%] lg:flex-1 p-2'
                >
                     {/* <img  src='LOGO.svg' alt='our logo' style={{width:220, height:100}}/> */}
                     <Image 
                         src='LOGO.svg'
                         width={220}
                         height={100}
                         alt='Logo of untitled'
                     />
                </motion.div>
                <motion.ul 
                    className='hidden text-[16px]  md:flex-1 gap-3 md:flex  md:text-[18px] lg:gap-7 lg:text-[20px]' >
                    <motion.li 
                         initial={{opacity:0 , scale:0}}
                         animate= {{ opacity:1 , scale:1}}
                         transition={{ duration:0.7 }}

                    >
                      <a href='#'>Home</a>
                    </motion.li>
                    <motion.li 
                         initial={{opacity:0 , scale:0}}
                         animate= {{ opacity:1 , scale:1}}
                         transition={{ duration:0.6 , delay:0.1 }}

                    >
                      <a href='#about'>About Us</a>
                    </motion.li>
                    <motion.li 
                         initial={{opacity:0 , scale:0}}
                         animate= {{ opacity:1 , scale:1}}
                         transition={{ duration:0.5 , delay:0.2 }}

                    >
                      <a href='#service'>Our services</a>
                    </motion.li>
                    <motion.li 
                         initial={{opacity:0 , scale:0}}
                         animate= {{ opacity:1 , scale:1}}
                         transition={{ duration:0.4 , delay:0.05 }}

                    >
                      <a href='project'>Our Projects</a>
                    </motion.li>
                </motion.ul>
                <motion.div  
                    initial={{opacity:0, x:50}}
                    animate= {{ opacity:1 , x:0}}
                    transition={{ duration:0.9 }}

                    className='hidden  lg:block md:flex-[1/2]'>
                    <a href='#contact' className='inline-block py-3 px-5 text-[20px] font-semibold  bg-btnprimary mt-2  cursor-pointer'>CONTACT US</a>
                </motion.div>
           </nav>
           <div>
                  <span className='absolute left-[40%] z-0'>
                      <Image 
                           src='blendToDown.svg' 
                           width={300}
                           height={250}
                           alt='graphique element' 
                      />
                  </span>
                  <span className='absolute bottom-2 right-2'>
                  <Image 
                           src='blendToUp.svg' 
                           width={350}
                           height={300}
                           alt='graphique element' 
                      />
                  </span>
           </div>
           <div className=' w-[95%] h-[75vh]  flex justify-between   m-auto md:w-[80%] lg:w-[85%]'>
                 <div className=' flex-1 flex mt-20 justify-center z-10'>
                    <div className=' w-full  p-4 lg:w-[85%]'>
                        <motion.h1 
                          initial={{opacity:0, x:-70}}
                          animate= {{ opacity:1 , x:0}}
                          transition={{ duration:0.9 , delay:0.4}} 
                          className=' w-[15ch] text-[36px] md:text-[64px]  leading-tight font-bold  md:py-5 text-white capitalize'>
                              We build <span className='bg-btnprimary'>innovative</span> Software Solutions
                        </motion.h1>
                      <div>
                         
                      <motion.div 
                          initial={{opacity:0, x:-70}}
                          animate= {{ opacity:1 , x:0}}
                          transition={{ duration:0.9 , delay:0.6}} 
                               className=' w-full md:w-[55ch] py-5 mb-4 text-[#f2f2f2ab]'>
                              <div className='w-[28px] h-1 bg-btnprimary mb-3'></div>
                              <p>
                                    We are a team of software engineer student passionate about new technology ,
                                    We aims to solve problems and brings innovative solutions
                              </p>
                      </motion.div>
                         

                      </div>
                      <a href='#contact'>
                       <motion.h3 
                          initial={{opacity:0, x:-70}}
                          animate= {{ opacity:1 , x:0}}
                          transition={{ duration:0.9 , delay:0.8}} 
                           className=' flex  items-center gap-3 text-[24px] text-white font-medium '>
                            Let's connect 
                            <span className=' ml-2 border-[3px] rounded-full w-24 h-10 relative'>
                                <span className={`${styles.animate} bg-white w-3 h-3 rounded-full  absolute top-[35%] `}></span>
                            </span>
                        </motion.h3>
                      </a> 
                     
                      <div className='py-10'>
                            <ul className='flex  '>
                                 <li><a className='p-3  bg-slate-500 rounded-full '>Gi</a></li>
                                 <li><a className='p-3 ml-2 bg-slate-500 rounded-full '>Ln</a></li>
                                 <li><a className='p-3 ml-2 bg-slate-500 rounded-full '>Tn</a></li>
                            </ul>
                      </div>
                    </div>
                 </div>
                 <motion.div 
                          initial={{opacity:0, x:70}}
                          animate= {{ opacity:1 , x:0}}
                          transition={{ duration:0.9 , delay:0.4}}  className=' hidden flex-1  lg:flex justify-center '>
                      <img src='hero.svg' className='w-[600px]'/>
                 </motion.div>
           </div>
           <div className=''>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
           </div>
           
    </div>
  )
}

export default Hero