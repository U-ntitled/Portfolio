import React from 'react'


function Hero() {
  return (
    <div className='w-full h-[100vh] bg-bgprimary  font-Exo2'>
           <nav className='flex items-center  h-[8vh]  font-semibold mx-2 md:mx-16 text-white overflow-hidden'>
                <div className='w-[50%] lg:flex-1 p-2'>
                     <img  src='LOGO.svg' alt='our logo' style={{width:220, height:100}}/>
                </div>
                <ul className='hidden text-[16px]  md:flex-1 gap-3 md:flex  md:text-[18px] lg:gap-7 lg:text-[20px]' >
                    <li>
                      <a href='#'>Home</a>
                    </li>
                    <li>
                      <a href='#about'>About Us</a>
                    </li>
                    <li>
                      <a href='#service'>Our services</a>
                    </li>
                    <li>
                      <a href='project'>Our Projects</a>
                    </li>
                </ul>
                <div  className='hidden  lg:block md:flex-[1/2]'>
                    <a href='#contact' className='inline-block py-2 px-3 bg-btnprimary mt-2  cursor-pointer'>CONTACT US</a>
                </div>
           </nav>
           <div>
                  <span className='absolute left-[40%] z-0'>
                      <img src='blendToDown.svg' alt='graphique element' />
                  </span>
                  <span className='absolute bottom-0 right-0'>
                      <img src='blendToUp.svg'  alt='graphique element' />
                  </span>
           </div>
           <div className=' w-[95%] h-[75vh]  flex justify-between  m-auto md:w-[80%] lg:w-[85%]'>
                 <div className=' flex-1 flex justify-center z-10'>
                    <div className=' w-full mt-24 p-4 lg:w-[85%]'>
                        <h1 className=' w-[15ch] text-[36px] md:text-[64px]  leading-tight font-bold  md:py-5 text-white capitalize'>
                          We build <span className='bg-btnprimary'>innovative</span> Software Solutions</h1>
                      <div>
                         
                          <p className=' w-full md:w-[55ch] py-5 mb-4 text-[#f2f2f2ab]'>
                              <div className='w-[28px] h-1 bg-btnprimary mb-3'></div>
                              We are a team of software engineer student passionate about new technology ,
                              We aims to solve problems and brings innovative solutions
                              
                          </p>
                         

                      </div>
                       
                      <h3 className=' flex  items-center gap-3 text-[24px] text-white font-medium '>
                          Let's connect 
                          <span className=' ml-2 border-[3px] rounded-full w-24 h-10 relative'>
                               <span className='bg-white w-3 h-3 rounded-full absolute top-[35%]  left-[40%]  animate-linear '></span>
                          </span>
                         
                      </h3>
                      <div className='py-10'>
                            <ul className='flex  '>
                                 <li><a className='p-3  bg-slate-500 rounded-full '>Gi</a></li>
                                 <li><a className='p-3 ml-2 bg-slate-500 rounded-full '>Ln</a></li>
                                 <li><a className='p-3 ml-2 bg-slate-500 rounded-full '>Tn</a></li>
                            </ul>
                      </div>
                    </div>
                 </div>
                 <div className=' hidden flex-1  lg:flex justify-center'>
                      <img src='hero.svg' style={{width:600,height:700}}/>
                 </div>
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