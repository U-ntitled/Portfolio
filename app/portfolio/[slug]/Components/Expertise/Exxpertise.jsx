import Image from 'next/image'
import React from 'react'
import './style.css';

const cart=[{
  title: "Web development",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eaque, velit, nobis quas quisquam, voluptas ratione ipsa totam dolorum iusto veritatis ipsam? Accusantium explicabo,accusamus ab asperiores voluptatem cum. Aspernatur!",
  image:"/web.png",
  fin: false
},
{
  title: "UI/UX Design",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eaque, velit, nobis quas quisquam, voluptas ratione ipsa totam dolorum iusto veritatis ipsam? Accusantium explicabo,accusamus ab asperiores voluptatem cum. Aspernatur!",
  image:"/design.png",
  fin: false
}
,
{
  title: "Mobil development",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eaque, velit, nobis quas quisquam, voluptas ratione ipsa totam dolorum iusto veritatis ipsam? Accusantium explicabo,accusamus ab asperiores voluptatem cum. Aspernatur!",
  image:"/mobile.png",
  fin: false
}
,
{
  title: "Voir plus",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eaque, velit, nobis quas quisquam, voluptas ratione ipsa totam dolorum iusto veritatis ipsam? Accusantium explicabo,accusamus ab asperiores voluptatem cum. Aspernatur!",
  image:"/plus.png",
  fin: true
}]
function Exxpertise() {
  return (
    <div className=' w-full   expertise '>
      <div className="w-full    epertise-bg md:flex md:items-center md:flex-col  space-y-8  pt-[20vh] pb-[23vh] px-10 ">
      <h2 className='uppercase expertise-title '>expertise</h2>
      <div className="flex space-x-10 w-full flex-col md:justify-between items-center justify-center" >
        <div className="flex flex-col space-y-4 md:w-[40%] w-full">
          <h2 className='expertise-sub-title'>
            WANT TO BRING IDEA INTO REALITY ? 
          </h2>
          <div className=" space-y-3">
              <p className='font-Exo2 text-white  text-base opacity-80'>
                I am open to any opportunity that comes my way. Whether it's an internship, a
                freelance project, or a full-time position.I am ready to take on exciting projects
                that push boundaries and foster innovation
              </p>
              <button className='bg-[#25DEEA] text-white px-14 py-3 rounded-xl '>
                Hire me
              </button>
          </div>
        </div> 
            <div className="md:w-[60%] w-full grid grid-cols-2 gap-4 md:mt-5">
                {
                  cart.map((elem,key)=>(
                      (elem.fin) ? (
                      <div className=" bg-[#0A0E26] rounded-xl p-5 cart w-[25vw] relative " key={key}>
                            <Image className='view-more' src={elem.image} alt={elem.title} width={50} height={50}/>
                      </div>
                      ):(
                        <div className=" bg-[#0A0E26] rounded-xl p-5 cart w-[25vw] " key={key}>
                        <div className="flex flex-col space-y-3">
                          <Image src={elem.image} width={50} height={50} alt={elem.title}/>
                          <h5 className='font-Exo2'> <span className='cart-title uppercase'>{elem.title}</span></h5>
                          <p className='text-[#D9D9D9] font-Exo2 text-sm opacity-75'>
                              {elem.description}
                           </p>
                        </div>
                      </div>
                      )
                  ))
                }
            </div>
      </div>
      </div>
    </div>
  )
}

export default Exxpertise
