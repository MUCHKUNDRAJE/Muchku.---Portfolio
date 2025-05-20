import React from 'react'
import ProjectData from '../../database/Projectdata'
import { Button } from '../ui/button'

function ProjectsCards({data}) {
  return (
    <div>
       <div className="h-96 w-[33rem] bg-blue-300 rounded-2xl overflow-hidden relative">
                <img className="w-full h-full object-cover " src={data.img} alt="" />
                <div className="sans2 h-full w-full bg-black opacity-0  absolute top-0 text-black hover:opacity-80 flex flex-col items-center transition-opacity ease  justify-center  ">

                  <h1 className="text-white pixel text-4xl" >{data.name}</h1>
                  <p className="text-white w-96 text-center" > {data.para}</p>
                    <Button className='bg-white text-zinc-20 mt-2'> see Details  </Button>
                </div>
              </div>
    </div>
  )
}

export default ProjectsCards