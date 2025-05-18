import React from 'react'
import Card from './Card'
import Journeydata from '../../database/Journeydata';


function JourneyCard({direction ,index}) {
  return (
    <>
      {direction === 1 ? (
        <div className="flex">
        <Card imag={ Journeydata[index].imag} vedio={Journeydata[index].vedio} />
          <div className="pixel text-3xl w-[55rem] flex items-start justify-center flex-col p-10">
             <h1 className='flex gap-2 items-center justify-center'>{Journeydata[index].title}</h1>
            <p className="text-2xl">
                {Journeydata[index].para}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex">
          <div className="pixel text-3xl w-[55rem] flex items-start justify-center flex-col p-10">
           <h1 className='flex gap-2 items-center justify-center'>{Journeydata[index].title}</h1>
            <p className="text-2xl">
                {Journeydata[index].para}
            </p>
          </div>
          <Card imag={ Journeydata[index].imag} vedio={Journeydata[index].vedio} />
        </div>
      )}
    </>
  );
}

export default JourneyCard