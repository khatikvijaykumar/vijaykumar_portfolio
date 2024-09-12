import React from 'react'
import './Homcs.css'

const Home = () => {
  return (
    <>
       <div className='Hstart m-[5px] mt-[80px] flex flex-row  text-sky-900 '>
          <div className=' mainbox p-[100px] '>
               <h1 className='Hvj  font-bold font-serif '>Vijay kumar</h1>
               <p className='Htxt mt-[5px] text-[20px] font-serif'>Front-end | Back-end | Full stack | <br />
                Android | ML | Design <br />
                </p>
                <p className='Htxt mt-[25px] text-[20px] font-serif'>
                I'm a full stack developer dedicated to creating seamless and efficient digital experiences. 
                Explore my projects and see how I blend front-end creativity with back-end functionality.     
                </p>
                <p className='Htxt mt-[25px] text-[20px] font-serif'>
                Looking to build something amazing together? Get in touch to discuss your project, ask questions, or just connect.
                </p>
                <div className='Htxt mt-[25px]'>
                  <button className='p-[5px] m-[5px] text-center border rounded text-white bg-sky-700  hover:text-black hover:bg-gray-50'>LinkedIn</button>
                  <button className='p-[5px] m-[5px] text-center border rounded text-white bg-black  hover:text-black hover:bg-gray-50'>Github</button>
                </div>
          </div>
          <div className=' mainbox  ' >
            <img className='img' src="homepageimage.jpg" alt="img" />
          </div>
        </div> 
    </>
  )
}

export default Home
