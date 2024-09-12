import React from 'react'

const Header = () => {
  return (
    <>
      <div className="fixed border-t top-[0px]   w-full h-[60px] shadow-md shadow-gray-300  bg-white opacity-100 ">
        <div className=" Hlogo w-[70px]  ">
             <img className='p-1' src="vjlogo.png" alt="" />
        </div>  
        <div className=" flex mt-[-30px] w-[350px] justify-evenly float-right">
  
          <div className=" border-none   hover:shadow-gray-900 rounded-[2px]">
              
              <button className="font-mono  hover:opacity-100 hover:border-b-[2px] hover:border-sky-300   w-full h-full text-black ">
              <a className={({isActive})=>
                 `hover:opacity-100
                 ${isActive ? " font-extrabold opacity-100 ":"opacity-40"}`
             } 
              to={'/'}>Home</a>
              
              </button>
          </div>
          <div className=" border-none   hover:shadow-gray-900 rounded-[2px]">
              <button className="font-mono  hover:opacity-100 hover:border-b-[2px] hover:border-sky-300   w-full h-full text-black ">
              <a className={({isActive})=>
                 `hover:opacity-100
                 ${isActive ? " font-extrabold opacity-100 ":"opacity-40"}`
             } 
              to={'skill'}>Skill</a>
              </button>
          </div>
          <div className=" border-none   hover:shadow-gray-900 rounded-[2px]">
              <button className="font-mono group  hover:border-b-[2px] hover:border-sky-300   w-full h-full text-black ">
              <a className={({isActive})=>
                 `group-hover:opacity-100
                 ${isActive ? " font-extrabold opacity-100 ":"opacity-40 "}`
             } 
              to={'project'}>Project</a>
              </button>
          </div>
          <div className=" border-none  hover:shadow-gray-900 rounded-[2px]">
              <button className="font-mono  hover:opacity-100 hover:border-b-[2px] hover:border-sky-300   w-full h-full text-black ">
              <a className={({isActive})=>
                 `hover:opacity-100
                 ${isActive ? " font-extrabold opacity-100 ":"opacity-40"}`
             } 
              to={'service'}>Service</a>
              </button>
          </div>
          
          
                  
        </div> 
          
     </div>
    </>
  )
}

export default Header
