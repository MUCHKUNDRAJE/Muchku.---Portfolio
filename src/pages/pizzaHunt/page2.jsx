import React from 'react'
import ProjectShow from '../../components/resuable/project.-show'
import pizzaHuntdata from '../../database/PizaaHuntdata'

function Page2() {
  return (

    <div className=' min-h-screen w-full bg-[#111318] pb-10 md:py-20 px-3 md:px-20 relative overflow-hidden '>
        <h1 className='md:text-8xl pixel text-white relative md:sticky md:top-0 left-20 md:left-0 h-36  flex items-end z-40 w-full bg-[#111318] text-6xl   '>User part</h1>
      <div className='flex gap-10 flex-col  md:flex-row items-end'>

      <div className='scale-125 md:scale-100 md:h-96 md:w-[50rem] mt-10 '>
        <img className='h-full w-full object-cover' src="/image/user.png" alt="" />
        </div> 
        <div className='text-white'>
            <h1 className='pixel text-5xl md:text-7xl text-center md:text-start mt-10 md:mt-0'>Order-page</h1>
          <p className='sans2 text-center md:text-start  md:w-[30rem]'>
             Welcome to the Order Page!  
             Here, you can easily order your favorite pizza and track your order status in the right column.  
              All artwork used in this interface has been personally designed by me using Canva, ensuring a unique and engaging user experience.
      </p>

        </div>
      </div>
       
      {pizzaHuntdata.map((val ,index)=>(
          <ProjectShow key={index} data ={val} index={index} />
      ))}

       

    </div>
  )
}

export default Page2