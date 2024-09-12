import React from 'react'
import './Proj.css'
const Project = () => {
  return (
    <>
       <div className=' pt-[200px] pb-[100px] text-sky-900 '>
         <div className='Pchange Pbox flex justify-evenly'>
            <div className='rounded-[5px] shadow shadow-lg'>
               <img className=' h-[250px] w-[350px]' src="../images/laravelchatapp.png" alt="projectImage" />
            </div>
            <div className=''>
                 <h1 className='Ptitle font-bold text-[40px]'>Laravel using Project</h1>
                 <p>One-to-One chat web Application</p>
                 <p>Developed a One-to-One chat application using Laravel and WebSocket real-time communication. <br />
                    <b>Key Features:</b> User Authentication, enabled real-time one-to-one chat and Active status.
                 </p>
 
            </div>
         </div>
         <div className='Pchangez Pbox flex justify-evenly'>
             <div className='remove pt-[50px] '>
                 <h1 className='Ptitle font-bold text-[40px]'>Android Studio using Project</h1>
                 <p className='font-bold'>Authication and chat Whatsapp clone App</p>
                  <p> Developed a WhatsApp clone application focusing <br /> on user authentication and real-time chat                
                      functionality using Android Studio. <br />
                     <b>Technologies used:</b>  Java, Firebase Authentication and Android Studio. <br />
                     <b>Key Features: </b> Enabled secure user login and registration, <br /> created a user-friendly chat interface   
                      with real-time updates. 
                 </p>
             </div>
             <div className='addP rounded-[5px] shadow shadow-lg'>
                <img className=' w-[230px] h-[350px] p-1' src="../images/whoapp.png" alt="projectImage" />
             </div>
         </div>
       </div>
    </>
  )
}

export default Project
