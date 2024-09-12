import React from 'react'

const Footer = () => {
  return (
    <>
       <div className='border bg-sky-900  pt-[11px] h-[50px]'>
        <p className='pl-[10px] text-white' >Contact me | Services | Hire me</p>
        <div className='float-right w-[180px] mt-[-25px] flex justify-evenly'>
            <a  href='https://github.com/khatikvijaykumar'>
              <img className='border rounded shadow w-[30px] h-[30px]' src="../images/github.png" alt="github" />
            </a>
            <a  href='https://www.linkedin.com/in/vijay-kumar-b2178427b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
              <img className='border rounded shadow w-[30px] h-[30px]' src="../images/linkedin.png" alt="linkedin" />
            </a>
            <a >
              <img className='border rounded shadow w-[30px] h-[30px]' src="../images/email.png" alt="email" />
            </a>
        </div>
        
       </div>
    </>
  )
}

export default Footer
