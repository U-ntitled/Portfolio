import React from 'react'

function Card({capture}) {
  return (
    <div  className='bg-[#140D0D] h-[392px] w-[430px] relative flex flex-col items-center rounded-xl project-cart'>
        <img src={capture}  className='p-3 h-[304px]' alt='enilab capture'/>
        <div className="flex justify-between items-center px-5 bg-[#282323] absolute bottom-0 w-full h-[84px]  rounded-br-xl rounded-bl-xl">
            <img src='info.png' alt='info' />
            <img src='Group.png' alt='link' />
        </div>
    </div>
  )
}

export default Card
