  import React ,{useState} from 'react'
  import { Link } from 'react-router-dom'

  function Nav({ onTriggerLoader , isTrue }) {
    const [slide, setslide] = useState(false);
    
    return ( 

      
        
        <div className=' pixel h-10 bg- fixed w-full flex items-center justify-between text-white px-10 md:px-20 py-2 text-lg z-100 mt-3 '>
            <div>Muchku.</div>
            <div className=' hidden md:flex items-center justify-center gap-10'>
            <Link to="/">
            <h1>Home</h1>
            </Link> 
            <Link to={"/Contact"} >
              <h1>Contact</h1>
            </Link>
                <Link to={ isTrue && '/projects' } onClick={onTriggerLoader}>
            <h1>Projects</h1>
            </Link> 
              <a href="https://github.com/MUCHKUNDRAJE">
              <i class="ri-github-fill text-2xl"></i> 
            </a>
            </div>
  
            <i onClick={()=>{setslide((prev)=> !prev )}} class="ri-menu-line text-2xl md:hidden "></i>

            <div className={`md:hidden h-72 w-full left-0 absolute bg-[#111318] py-1 transition-all duration-200  ${slide  ? "-top-10" : "-top-100"} `}>
                  <div className=' mt-10 flex-col flex items-center justify-center gap-0'>
                  
                  <div className='flex items-center justify-between px-10 w-full'>
                  <h1>Menu</h1>
                      <i onClick={()=>{setslide((prev)=> !prev )}} class="ri-close-fill text-2xl"></i>
                  </div>
            <Link onClick={()=>{setslide((prev)=> !prev )}} to="/" className=' w-full  p-2 flex items-center justify-center'>
            <h1>Home</h1>
            </Link   > 
            <hr />
            <Link to={"/Contact"} className=' cursor-pointer  w-full p-2 flex items-center justify-center'>
              <h1>Contact</h1>
            </Link>
            <hr />
            <Link
            className='w-full  p-2 flex items-center justify-center'
  to={isTrue && '/projects'}
  onClick={() => {
    setslide(prev => !prev);
    onTriggerLoader?.(); // use optional chaining to avoid crash if undefined
  }}
>
            <h1>Projects</h1>
            </Link> 
            <hr />
              <a href="https://github.com/MUCHKUNDRAJE">
              <i class="ri-github-fill text-2xl mt-20"></i> 
            </a>
            </div>

            </div>

            

      </div>
    )
  }

  export default Nav