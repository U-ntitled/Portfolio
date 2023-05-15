import React from 'react'
import './style.module.css'

function Footer() {
  return (
    <div className='bg-[#171135] flex flex-col space-y-3 text-white'>
      <div className="flex justify-between items-center flex-wrap footer-title space-y-3 w-full">
          <img src='LOGO.svg' alt='logo' className='footer-logo'/>
        <div className="flex space-x-3 items-center">
           <img src='reso.png' alt='social media icon'/>
           <img src='reso.png' alt='social media icon'/>
           <img src='reso.png' alt='social media icon'/>
           <img src='reso.png' alt='social media icon'/>
        </div>
      </div>
      <div className="flex justify-center items-center w-full ">
        <div className="flex justify-between items-start w-[85%] flex-wrap footer space-y-5">
          <div className="flex flex-col space-y-2  ">
            <h6 className='uppercase font-bold text-xl'>overview</h6>
            <a className='a opacity-70' href='#about'>About us</a>
            <a className='a opacity-70' href='#service'>Our services</a>
            <a className='a opacity-70' href='#project'>Our projects</a>
            <a className='a opacity-70' href='#team'>Our team</a>
          </div>
          <div className="flex flex-col space-y-2">
            <h6 className='uppercase font-bold text-xl'>Our Services</h6>
            <a className='opacity-70' href='#about'>UI/UX Design</a>
            <a className='opacity-70' href='#service'>Web Development</a>
            <a className='opacity-70' href='#project'>Mobile Development</a>
          </div>
          <div className="flex flex-col space-y-4 md:w-[40%] w-[100%]">
              <h2 className='h2 font-bold leading-tight'>LET’ S MAKE YOUR <span className='text-[#37BB8A]'>VISION</span> INTO <span className='text-[#37BB8A]'>REALITY</span></h2>
              <button className='bg-[#C525EA] flex justify-center items-center text-[#fff] py-2 w-[90%] btn '>SHARE US YOUR PROJECT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer