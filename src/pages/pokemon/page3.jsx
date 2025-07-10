import React from 'react'
import PokemonData from '../../database/Pokemon-data'
import ProjectShow from '../../components/resuable/project.-show'

function Page3() {
  return (
    <div className='min-h-screen w-full bg-[#111318] py-20 px-2 md:px-10  overflow-hidden pb-30 '>
    <h1 className='text-5xl text-center pixel  text-white mb-10 '>Creation Overview</h1>
     <div className='-mt-20  '>
      {PokemonData.map((val ,index)=>(
          <ProjectShow key={index} data ={val} index={index} />
      ))}
     </div>
    </div>
  )
}

export default Page3