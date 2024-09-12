import React from 'react'
import './Fb.css'
const Backend = () => {
  return (
    <>
      <div className='Fbstart m-[5px]  flex flex-row  text-sky-900 '>
      <div className='boxmain  ' >
                   <div className=' mt-[60px] rounded shadow-md w-[250px] h-[350px]'>
                        <img src="backphoto.avif" className='mt-[50px]' alt="" />
                   </div>
                   <div className='m-[10px] flex flex-row'>
                   <p className='Fbtxt font-bold'>Whatsapp | Chat App |</p>
                   <button className='border text-[12px] font-bold rounded-[50%] h-[30px] w-[30px] p-1 ml-1'>15+</button>
                   </div>
          </div>
          <div className='boxmain w-[60%] pt-[80px]  '>
               <h1 className='Fbtitle text-[40px] font-bold '>Back-end</h1>
               <p className='Fbtxt mt-[5px] text-[20px] '>
                       C | Java | Python | Node.js | express.js | MongoDB <br />
                       PHP | Laravel | SQL | MySQL | Android studio
                </p>
                <p className='Fbtxt mt-[25px] font-bold text-[20px] '>
                    -Authentication/Authorization <br />
                    -Restful Api handling <br />
                    -Filters and Validation<br />
                    -Cookies/Session <br />
                    -MVC
                </p>
               
          </div>
          
        </div>
    </>
  )
}

export default Backend
