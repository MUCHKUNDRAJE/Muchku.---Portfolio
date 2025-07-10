import React from 'react'
import ProjectShow from '../../components/resuable/project.-show'
import Notedata from '../../database/noteJSdata'

function Page2() {
  return (

 <div className=' min-h-screen w-full bg-[#111318] overflow-hidden -mt-40 py-10 px-3 md:px-10'>  
    
        {Notedata.map((val ,index)=>(
          <ProjectShow key={index} data ={val} index={index} />
      ))}

    </div>
  )
}

export default Page2