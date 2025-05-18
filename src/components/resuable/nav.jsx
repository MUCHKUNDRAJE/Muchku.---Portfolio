import React from 'react'

function Nav() {
  return (
       <div className=' pixel h-10 bg- fixed  w-full flex items-center justify-between text-white px-20 py-2 text-lg z-100 mt-3 '>
           <div>Muchku.</div>

           <div className='flex items-center justify-center gap-10'>
            <h1>Home</h1>
            <h1>Contact</h1>
            <h1>Project</h1>
            <a href="https://github.com/MUCHKUNDRAJE">
             <i class="ri-github-fill text-2xl"></i> 
           </a>
           </div>

    </div>
  )
}

export default Nav