import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NewAbout() {
  return (
     <div className='w-full bg-[#171135] font-Exo2 text-[#f2f2f2]  relative '>
         <span id='about'/>
          <span className='absolute z-0'>
               <Image
                    src='/blendABout.svg'
                    width={500}
                    height={500}
                    alt='blend image '
               />
          </span>
          <div className=' m-auto flex py-[15%] px-[5%] md:py-[8%] md:px-[10%] lg:space-section'>
                <div className='flex-1 z-10 '>
                    <h2 className=' h3  font-bold md:h2 mb-6'>W<span>H</span>O are us ?</h2>
                    
                    <h3 className='text-[1.2rem]  uppercase mb-6 text-[#3da780]'>
                        We are a <span className=''>team</span> of software engineer student, 
                    </h3>
                    <div className='mb-8'>
                        <div className='w-[28px] h-1 bg-btnprimary mb-3 '/>
                        <p className='w-full md:w-[60ch] text-[#f2f2f2d5]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis iste voluptatibus quis tenetur deserunt, eveniet sunt ab quo assumenda doloremque 
                            laborum quae corrupti ipsam reprehenderit mollitia iure delectus commodi debitis.
                        </p>
                    </div>
                   
                        
                        <a 
                             href='#contact' 
                             onScroll={false}
                             className='inline py-2 px-5 text-[18px]  text-[#B73BF0] font-light  rounded-md border  border-[#B73BF0] mt-2 hover:text-[#f2f2f2] hover:bg-[#b73bf0]   ease-in-out transition-all  cursor-pointer btn'>  
                             MORE ABOUT US
                        </a>
                 
                </div>
               
                <div className='hidden  lgl:flex-1  lgl:flex justify-end'>
                    <Image
                        src=''
                        width={350}
                        height={250}
                        alt='an image about untiled'
                    />
                </div>
          </div>
         
     </div>
  )
}

export default NewAbout