import './App.css'
import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import bgImage from './assets/winter.jpg'
function App() {
  return (
    <div className="min-h-screen   flex items-center justify-center flex-col p-4 ">

      <img src="./src/assets/profile.jpg" alt="profile" className='h-36 aspect-square object-cover rounded-full m-7 border-l-2 border-blue-400 border-r-2 ' />
      
      <div className="max-w-sm w-full bg-[url('./src/assets/winter.jpg')] bg-cover rounded-xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Manish Kumar</h2>
          <p className="text-gray-800">Full Stack Developer</p>
        </div>
        
        <ul className="space-y-4 flex  flex-col   items-center">
          <li>
            <a 
              href="mailto:manishkumar.96017278@gmail.com"
              className="flex items-center min-w-40 max-w-56 justify-center p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300 text-gray-700 hover:text-gray-900"
            >
              <MdEmail className='mr-3 text-xl' />
            
              <span className="font-medium">Email</span>
            </a>
          </li>
          
          <li>
            <a 
              href="tel:+919601727836"
              className="flex items-center min-w-40 max-w-56 justify-center p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300 text-gray-700 hover:text-gray-900"
            >
              <FaPhoneAlt className="mr-3 text-xl" />
              <span className="font-medium">Phone</span>
            </a>
          </li>
          
          <li>
            <a 
              href="https://www.linkedin.com/in/manish-kumar-593326273"
              target='_blank'
              rel="noopener noreferrer"
              className="flex items-center min-w-40 max-w-56 justify-center p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white"
            >
              <FaLinkedin className="mr-3 text-xl" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </li>
          
          <li>
            <a 
              href="https://github.com/Manish-kumar-9601"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center  min-w-40 max-w-56  justify-center p-3 rounded-lg bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white"
            >
              <FaGithub className='mr-3 text-xl' />
              
              <span className="font-medium">GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
