'use client'
import React from 'react'
import { motion } from 'framer-motion'
import  styles  from './style.module.css'
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
function Hero() {
  return (
    <div className='w-full min-h-screen bg-bgprimary  font-Exo2'>
           <span id='hero'/>
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
                      <a href='#project'>Our Projects</a>
                    </motion.li>
                </motion.ul>
                <motion.div  
                    initial={{opacity:0, x:50}}
                    animate= {{ opacity:1 , x:0}}
                    transition={{ duration:0.9 }}

                    className='hidden  lg:block md:flex-[1/2]'>
                    <a href='#contact' className='inline-block py-3 px-5 text-[20px] font-semibold  rounded-md   bg-btnprimary mt-2  cursor-pointer'>CONTACT US</a>
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
                  <span className='absolute bottom-2 right-2 -z-2'>
                  <Image 
                           src='blendToUp.svg' 
                           width={300}
                           height={250}
                           alt='graphique element' 
                      />
                  </span>
           </div>
           <div className=' w-[95%] h-[75vh]  flex justify-between   m-auto md:w-[80%] lg:w-[85%] mb-8'>
                 <div className=' flex-1 flex mt-20 justify-center z-10'>
                    <div className=' w-full  p-4 lg:w-[85%]'>
                        <motion.h1 
                          initial={{opacity:0, x:-70}}
                          animate= {{ opacity:1 , x:0}}
                          transition={{ duration:0.9 , delay:0.4}} 
                          className=' w-[15ch] text-[36px]  sm md:text-[64px]  leading-tight font-bold  md:py-5 text-white capitalize'>
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
                      <a href='#contact' className=' inline-block mb-5 '>
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
                     
                  
                      <div className='icons-wrapper flex justify-start mt-5 mb-5'>
                           <div className='inline-block'>
                                <span className=' w-[45px] h-[45px] flex items-center justify-center rounded-full bg-white   p-[6px] text-[#3b5998] hover:bg-[#3b5998] hover:text-white cursor-pointer transition-all ease-in-out duration-300 '>
                                      <FontAwesomeIcon 
                                         icon={faFacebookF}
                                         size='xl'
                                   
                                      />
                                </span>
                           </div>
                           <div className='inline-block ml-5'>
                                <span className='  w-[45px] h-[45px] flex items-center  justify-center rounded-full bg-white text-[#00acee]  p-[12px]  hover:bg-[#00acee] hover:text-white  cursor-pointer transition-all ease-in-out duration-300 '>
                                      <FontAwesomeIcon 
                                         icon={faTwitter}
                                         size="2x"
                                   
                                      />
                                </span>
                           </div>
                           <div className='inline-block ml-5'>
                                <span className=' w-[45px] h-[45px] flex items-center justify-center rounded-full bg-white   p-[6px] text-[#0072b1] hover:bg-[#0072b1] hover:text-white cursor-pointer transition-all ease-in-out duration-300 '>
                                      <FontAwesomeIcon 
                                         icon={faLinkedinIn}
                                         size='xl'
                                   
                                      />
                                </span>
                           </div>
                           <div className='inline-block  ml-5'>
                                <span className='  w-[45px] h-[45px] text-[24px] flex items-center justify-center rounded-full bg-black p-[6px] text-white hover:bg-white hover:text-black  cursor-pointer transition-all ease-in-out duration-300 '>
                                      <FontAwesomeIcon 
                                         icon={faGithub}
                                         size="2x"
                                   
                                      />
                                </span>
                           </div>
                      </div>
                    </div>
                 </div>
                 <motion.div 
                          initial={{opacity:0, x:70}}
                          animate= {{ opacity:1 , x:0}}
                          transition={{ duration:0.6 , delay:0.4}}  
                          className=' hidden flex-1  lg:flex justify-center z-1'>
                      <img src='hero.svg' className='w-[600px] z-10'/>
                 </motion.div>
           </div>
           <div className='  absolute bottom-[-16] w-full  md:w-[60%]  md:left-[20%] z-30  '>
                <div className=' flex justify-around   bg-white py-5 px-3  rounded-xl'>
                         <motion.div 
                               initial={{opacity:0, x:-70}}
                               whileInView= {{ opacity:1 , x:0}}
                               transition={{ duration:0.9 , delay:0.4}} 
                            
                              className='flex-1 flex flex-col items-center'>
                              <span className='bg-[#37bb8b6e] p-3 rounded-xl'>
                                   <Image 
                                       src='/experience1.png' 
                                       alt='experience icon'
                                       width={35}
                                       height={35}
                                    />
                              </span>
                              <h3 className='flex flex-col justify-center  text-[18px] items-center md:text-[32px] font-bold text-[#B73BF0] '>
                                  2+
                                  <span className='text-[#0000009c] font-normal text-[14px] md:text-[24px]'>Year of experience</span>
                              </h3>
                         </motion.div>
                         <motion.div 
                               initial={{opacity:0, x:-70}}
                               whileInView= {{ opacity:1 , x:0}}
                               transition={{ duration:0.6 , delay:0.4}} 
                             
                             className='flex-1 flex flex-col items-center'>
                             <span className='bg-[#37bb8b6e] p-3 rounded-xl'>
                                   <Image 
                                   src='/project.png' 
                                       alt='project icon'
                                       width={35}
                                       height={35}
                              />
                              </span>
                              <h3 className='flex flex-col justify-center  text-[18px] items-center md:text-[32px] font-bold text-[#B73BF0] '>
                                  15+
                                  <span className='text-[#0000009c] font-normal text-[14px] md:text-[24px]'>Projects Done</span>
                              </h3>
                         </motion.div>
                         <motion.div 
                               initial={{opacity:0, x:-70}}
                               whileInView= {{ opacity:1 , x:0}}
                               transition={{ duration:0.6 , delay:0.4}} 
                              className='flex-1 flex flex-col items-center'>
                              <span className='bg-[#37bb8b6e] p-3 rounded-xl'>
                                   <Image 
                                       src='/trophy.png' 
                                       alt='trophy icon'
                                       width={35}
                                       height={35}
                              />
                              </span>
                              <h3 className='flex flex-col justify-center  text-[18px] items-center md:text-[32px] font-bold text-[#B73BF0] '>
                                  2
                                  <span className='text-[#0000009c] font-normal text-[14px] md:text-[24px]'>Awards</span>
                              </h3>
                         </motion.div>
                        
                </div>
               
           </div>
           
    </div>
  )
}

export default Hero