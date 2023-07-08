import Image from 'next/image'
// import React, { useState } from 'react'
import './style.css';
// import dynamic from 'next/dynamic';

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
  // const [isShow,setIsShow] = useState(false)
//   let isShow= false
//   const HandleClickViewMore = (e)=>{
//       isShow = false
//   }
//   const InteractiveComponent = dynamic((elem) => 
//   <>
//     <Image className='view-more' onClick={HandleClickViewMore}  src={elem.image} alt={elem.title} width={50} height={50}/>
//     {
//       isShow && (
//         <button className='bg-[#25DEEA] text-white   rounded-xl btn-more '>
//           View project
//         </button>
//       )
//     }
//  </>
//   , {
//     ssr: false // Indique que le composant ne doit pas être rendu côté serveur
//   });

  return (
    <div className=' w-full   expertise '>
      <div className="w-full    epertise-bg  space-y-8  md:pt-[16vh] dll:pt-[30vh] max-xxs:pt-[33vh] pt-[40vh] md:pb-[28vh] dll:pb-[33vh] max-xxs:pb-[38vh] pb-[42vh] px-5 md:px-10 ">
      <h2 className='uppercase expertise-title max-xxs:pt-0 pt-[10vh]'>expertise</h2>
      <div className="flex md:space-x-10 w-full flex-col space-y-10 md:space-y-0 md:flex-row" >
        <div className="flex flex-col space-y-4  md:w-[40%]">
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
            <div className="md:w-[60%] grid  dll:grid-cols-2 grid-cols-1 gap-4">
                {
                  cart.map((elem,key)=>(  
                      (elem.fin) ? (
                      <div className=" bg-[#0A0E26] rounded-xl p-5 cart md:w-[350px] md:h-[300px] h-[250px] relative " key={key}>
                        {/* <InteractiveComponent elem={elem}/> */}
                        <Image className='view-more'   src={elem.image} alt={elem.title} width={50} height={50}/>
                        <button className='bg-[#25DEEA] text-white   rounded-xl btn-more '>
                          View project
                        </button>
                      </div>
                      ):(
                        <div className=" bg-[#0A0E26] rounded-xl p-5 cart  md:w-[350px] md:h-[300px] " key={key}>
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
