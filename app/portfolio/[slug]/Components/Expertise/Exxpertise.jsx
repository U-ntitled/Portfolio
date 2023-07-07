import Image from 'next/image'
import React from 'react'
import './style.css';

const cart=[1,2,3,4]
function Exxpertise() {
  return (
    <div className=' w-full   expertise h-screen'>
      <div className="flex flex-col  w-full   h-screen epertise-bg py-[20vh]">
      <h2 className='uppercase expertise-title '>expertise</h2>
      <div className="flex justify-between w-full" >
        <div className="flex flex-col w- ">
          <h2 className='text-transparent font-bold bg-clip-text bg-gradient-to-br from-[#25DEEA] to-[#37BB8A]'>
            WANT TO BRING IDEA INTO REALITY ? 
          </h2>
          <div className="">
              <p>
                I am open to any opportunity that comes my way. Whether it's an internship, a
                freelance project, or a full-time position.I am ready to take on exciting projects
                that push boundaries and foster innovation
              </p>
              <button className='bg-[#25DEEA]'>
                Hire me
              </button>
          </div>
        </div>
            <div className="">
                {
                  cart.map(elem=>(
                    <div className=" bg-[#0A0E26] " key={elem}>
                      <div className="flex flex-col">
                        <Image src='' alt=''/>
                        <h5 className='text-transparent font-bold bg-clip-text bg-gradient-to-br from-[#d0aa5b] to-[#1fa1b8]'>WEB DEVELOPER</h5>
                        <p className=''>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eaque, 
                          velit, nobis quas quisquam, voluptas ratione ipsa totam dolorum iusto veritatis ipsam? Accusantium explicabo,
                          accusamus ab asperiores voluptatem cum. Aspernatur!
                         </p>
                      </div>
                    </div>
                  ))
                }
            </div>
      </div>
      </div>
    </div>
  )
}

export default Exxpertise
