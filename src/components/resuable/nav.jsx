import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
       <div className=' pixel h-10 bg- fixed  w-full flex items-center justify-between text-white px-20 py-2 text-lg z-100 mt-3 '>
           <div>Muchku.</div>

           <div className='flex items-center justify-center gap-10'>
           <Link to="/">
           <h1>Home</h1>
           </Link> 
            <h1>Contact</h1>
               <Link to="/projects">
           <h1>Projects</h1>
           </Link> 
            <a href="https://github.com/MUCHKUNDRAJE">
             <i class="ri-github-fill text-2xl"></i> 
           </a>
           </div>

    </div>
  )
}

export default Nav