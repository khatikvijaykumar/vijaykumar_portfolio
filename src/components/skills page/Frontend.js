import React from 'react'
import './Fb.css'
const Frontend = () => {
  return (
    <>
       <div className='Fbstart  m-[5px]  flex flex-row  text-sky-900 '>
          <div className='boxmain p-[50px]  pt-[50px] '>
               <h1 className='Fbtitle text-[40px] font-bold '>Front-end</h1>
               <p className='Fbtxt mt-[5px] text-[20px] '>
                       React.js | Next.js | Typescript | Sass   <br />
                       HTML | CSS | JS | Tailwind CSS | Bootstrap | Yup | formik | blade
                </p>
                <p className='Fbtxt mt-[25px] text-[20px] font-bold  '>
                -Single page application <br />
                -ui/ux design  <br />
                -3D animation  <br />
                -Responsiveness <br />
                -Api integration <br />
                -Filters and Validation  <br />
                </p>
               
          </div>
          <div className='boxmain ' >
                   <div className=' border mt-[60px] rounded shadow-md w-[250px] h-[350px]'>
                       <img src="../images/frontphoto.svg" className='mt-[100px]' alt="" />
                   </div>
                   <div className='m-[10px] flex flex-row'>
                    <p className='Fbtxt font-bold'>Amazon | Youtube |</p>
                    <button className='border text-[12px] font-bold rounded-[50%] h-[30px] w-[30px] p-1 ml-1'>15+</button>
                   </div>
          </div>
        </div>
    </>
  )
}

export default Frontend
