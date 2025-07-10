import React from 'react'
import Card from './Card'
import Journeydata from '../../database/Journeydata';


function JourneyCard({direction ,index}) {
  return (
    <>
      {direction === 1 ? (
        <div key={index} className=" scale-95 md:scale-100 flex flex-col md:flex-row ">
        <Card imag={ Journeydata[index].imag} vedio={Journeydata[index].vedio} />
          <div className="pixel text-3xl md:w-[55rem] flex items-center md:items-start justify-center flex-col px-2 py-10 md:p-10">
             <h1 className='text-center md:text-start md:text-4xl'>{Journeydata[index].title}</h1>
            <p className=" text-lg md:text-2xl text-center md:text-start ">
                {Journeydata[index].para}
            </p>
          </div>
        </div>
      ) : (
        <div  key={index}  className=" scale-95 md:scale-100  flex flex-col-reverse md:flex-row">
          <div className="pixel text-3xl md:w-[55rem] flex items-center md:items-start justify-center flex-col px-2 py-10 md:p-10">
           <h1 className=' md:text-4xl text-center md:text-start'>{Journeydata[index].title}</h1>
            <p className="  text-lg md:text-2xl text-center md:text-start ">
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