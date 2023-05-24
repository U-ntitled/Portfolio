'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
function NavBar() {
    const [isSticky, setISticky] = useState(false);
    const [y, setY] = useState(0)
  
    const handleNavigation = (e) => {
      setISticky(window.scrollY > 0 );
      setY(window.scrollY)
    };

    const sticky = isSticky ? ' bg-bgprimary shadow-sm  opacity-80' : ''
    useEffect(() => {
      window.addEventListener("scroll", (e) => handleNavigation(e));
    
      return () => { // return a cleanup function to unregister our function since its gonna run multiple times
        window.removeEventListener("scroll", (e) => handleNavigation(e));
      };
    }, [y]);
  return (
    <nav className={`${sticky} flex justify-between items-center w-full  md:h-[100px] font-semibold px-3 md:px-10 text-white  z-30 fixed transition-all duration-500`}>

                <motion.div  
                    initial={{opacity:0, x:-50}}
                    animate= {{ opacity:1 , x:0}}
                    transition={{ duration:0.9 }}
                    className='w-[45%]   p-2'
                >
                     {/* <img  src='LOGO.svg' alt='our logo' style={{width:220, height:100}}/> */}
                     <Image 
                         src='LOGO.svg'
                         width={250}
                         height={250}
                         alt='Logo of untitled'
                     />
                </motion.div>
                <motion.ul 
                    className=' hidden text-[1rem]  md:flex-1 gap-3 md:flex  md:text-[1.2] lg:gap-7 lg:text-[1.3rem]' >
                    <motion.li 
                         initial={{opacity:0 , scale:0}}
                         animate= {{ opacity:1 , scale:1}}
                         transition={{ duration:0.7 }}
                         className='relative'
                    >
                      <a href='#hero' className='active'>Home</a>
                    </motion.li>
                    <motion.li 
                         initial={{opacity:0 , scale:0}}
                         animate= {{ opacity:1 , scale:1}}
                         transition={{ duration:0.6 , delay:0.1 }}
                         className='relative'
                    >
                      <a href='#about'>About Us</a>
                    </motion.li>
                    <motion.li 
                         initial={{opacity:0 , scale:0}}
                         animate= {{ opacity:1 , scale:1}}
                         transition={{ duration:0.5 , delay:0.2 }}
                         className='relative'
                    >
                      <a href='#service'>Our services</a>
                    </motion.li>

                    <motion.li 
                         initial={{opacity:0 , scale:0}}
                         animate= {{ opacity:1 , scale:1}}
                         transition={{ duration:0.4 , delay:0.05 }}
                         className='relative'
                    >
                      <a href='#project'>Our Projects</a>
                    </motion.li>
                    <motion.li 
                         initial={{opacity:0 , scale:0}}
                         animate= {{ opacity:1 , scale:1}}
                         transition={{ duration:0.4 , delay:0.05 }}
                         className='relative'
                    >
                      <a href='#team'>Our Teams</a>
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
                <motion.div  
                    initial={{opacity:0, x:50}}
                    animate= {{ opacity:1 , x:0}}
                    transition={{ duration:0.9 }}

                    className='hidden  lg:block md:flex-[1/2]'>
                    <a href='#contact' className='inline-block py-3 px-5 text-[20px] font-semibold  rounded-md   bg-btnprimary mt-2  cursor-pointer'>CONTACT US</a>
                </motion.div>
                <div className='flex flex-col items-end  md:hidden' id='menu-burger'>
                     <div className='w-10 flex  h-[6px] bg-white rounded-lg left mb-2'></div>
                     <div className='w-8 h-[6px] bg-white rounded-lg  mb-2 middle'></div>
                     <div className='w-9 h-[6px] bg-white rounded-lg '></div>
                </div>
           </nav>
  )
}

export default NavBar