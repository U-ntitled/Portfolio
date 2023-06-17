import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faHouse,
    faQuestion,
    faBriefcase,
    faDiagramProject,
    faPeopleGroup
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faHouse,
    faQuestion,
    faBriefcase,
    faDiagramProject,
    faPeopleGroup
)
const NavBarMobile = ({isOpen , ToggleOpen}) => {

  return (
    <div className='fixed bg-bgprimary w-full h-[100vh] overflow-x-hidden z-50 text-white scrollbar-track-violet-400'>
        <motion.div  
                    initial={{opacity:0, x:-50}}
                    animate= {{ opacity:1 , x:0}}
                    transition={{ duration:0.9 }}
                    className=' absolute top-0 w-[45%]   p-2'
                >
                     {/* <img  src='LOGO.svg' alt='our logo' style={{width:220, height:100}}/> */}
                     <Image 
                         src='LOGO.svg'
                         width={250}
                         height={250}
                         alt='Logo of untitled'
                     />
        </motion.div>
        <div 
             onClick={() => ToggleOpen(!isOpen)}
             className='absolute top-5  right-2 flex flex-col  justify-center md:hidden' id='menu-burger'>             
             <div className='w-9 h-[6px] bg-white rounded-lg   rotate-45 '></div>
             <div className='w-9 h-[6px] bg-white rounded-lg rotate-[-45deg]  '></div>
        </div>     
        <motion.ul 
              
                    className='absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-30%] text-[1rem]  gap-3 md:flex flex-col space-y-3 justify-center items-center md:text-[1.2] lg:gap-7 lg:text-[1.3rem]' >
                    <motion.li 
                         initial={{opacity:0 , scale:0}}
                         animate= {{ opacity:1 , scale:1}}
                         transition={{ duration:0.7 }}
                         className='relative '
                         onClick={()=> ToggleOpen(!isOpen)}
                    >
                        <a href='#hero' className='active flex  items-center '>
                            <FontAwesomeIcon icon={faHouse} /><span className='ml-3'>Home</span>
                        </a>
                    </motion.li>
                    <motion.li 
                         initial={{opacity:0 , scale:0}}
                         animate= {{ opacity:1 , scale:1}}
                         transition={{ duration:0.6 , delay:0.1 }}
                         className='relative'
                         onClick={()=> ToggleOpen(!isOpen)}
                    >
                      <a href='#about ' className='flex items-center'>
                      <FontAwesomeIcon icon={faQuestion} />
                      <span className='ml-4'>About Us`</span>
                      </a>
                    </motion.li>
                    <motion.li 
                         initial={{opacity:0 , scale:0}}
                         animate= {{ opacity:1 , scale:1}}
                         transition={{ duration:0.5 , delay:0.2 }}
                         className='relative'
                    >
                         
                    <a href='#service'>
                         <FontAwesomeIcon icon={faBriefcase} />
                         <span className='ml-2'>Our services</span>
                    </a>
                    </motion.li>

                    <motion.li 
                         initial={{opacity:0 , scale:0}}
                         animate= {{ opacity:1 , scale:1}}
                         transition={{ duration:0.4 , delay:0.05 }}
                         className='relative'
                         onClick={()=> ToggleOpen(!isOpen)}
                    >
                      <a href='#project'>
                         <FontAwesomeIcon icon={faDiagramProject} />
                         <span className='ml-2'>Our Projects</span>
                      </a>
                    </motion.li>
                    <motion.li 
                         initial={{opacity:0 , scale:0}}
                         animate= {{ opacity:1 , scale:1}}
                         transition={{ duration:0.4 , delay:0.05 }}
                         className='relative'
                         onClick={()=> ToggleOpen(!isOpen)}
                    >
                      <a href='#team'>
                      <FontAwesomeIcon icon={faPeopleGroup} />
                         <span className='ml-2'>Our Teams</span>
                      </a>
                    </motion.li>
                    <motion.li 
                         initial={{opacity:0 , scale:0}}
                         animate= {{ opacity:1 , scale:1}}
                         transition={{ duration:0.4 , delay:0.05 }}
                         className='relative hidden'
                    >
                      <a href='#footer'>footer</a>
                    </motion.li>
                </motion.ul>
    </div>
  )
}

export default NavBarMobile