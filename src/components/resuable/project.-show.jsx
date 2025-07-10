import React from 'react'


function ProjectShow({ index , data}) {
  return (

    <div className=' h-full w-full bg-[#111318] mt-3 md:mt-40 '>
      <div className={`flex gap-10 items-end ${index % 2 == 0 ? " flex-col  md:flex-row-reverse" : "flex-col md:flex-row"  } `}>
     <h1>
        </h1>
        
      <div className=' scale-125 md:scale-100 md:h-96 md:w-[50rem] mt-10  '>
        <img className='h-full w-full object-cover ' src={data.img} alt="" />
        </div> 
        <div className='text-white md:mt-0 mt-10'>
            <h1 className='pixel text-5xl md:text-7xl text-center md:text-start'>{data.name}</h1>
       
            <p className='sans2 text-center md:text-start  md:w-[30rem]'
            >
                {data.para}
                 
            </p>
    

        </div>
      </div>

    </div>
  )
}

export default ProjectShow