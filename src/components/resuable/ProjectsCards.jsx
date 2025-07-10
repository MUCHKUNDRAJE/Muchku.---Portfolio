import React from 'react'
import ProjectData from '../../database/Projectdata'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'


function ProjectsCards({data}) {
  return (
    <div>
       <div className="clip-custom-shape scale-70 md:scale-100  h-96 w-[33rem] p overflow-hidden relative" >
                <img className="w-full h-full object-cover rounded-2xl " src={data.img} alt="" />
                <div className="  sans2 h-full w-full bg-black opacity-0 rounded-2xl  absolute top-0 text-black hover:opacity-80 hidden md:flex flex-col items-center transition-opacity ease  justify-center  ">

                  <h1 className="text-white pixel text-5xl md:text-4xl " >{data.name}</h1>
                  <p className="text-white w-96 text-center md:text-md text-lg" > {data.para}</p>
                  <Link>
                    <Button className='bg-white text-zinc-20 mt-2'> see Details</Button>
                 </Link>
                </div>
              </div>
                <div>
                    <div className=" h-fit  w-90 ml-20 -mt-6  md:hidden flex items-center justify-center flex-col">

                  <h1 className="text-white pixel text-5xl md:text-4xl text-center " >{data.name}</h1>
                  <p className="text-white w-full text-center md:text-md text-lg leading-6" > {data.para}</p>
                  <Link to={data.Link}>
                    <Button className='bg-white text-zinc-20 mt-2 text-black'> see Details</Button>
                 </Link>
                </div>

                </div>
    </div>
  )
}

export default ProjectsCards