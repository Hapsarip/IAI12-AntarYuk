import React, { useState } from 'react'
import LoginPage from '../pages/Login';

export default function Nav() {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"MAKE ORDER",link:"/MakeOrder"},
        {name:"HISTORY",link:"/History"},
      ];
    return (
      <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
        text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
          <ion-icon name="logo-ionic"></ion-icon>
          </span>
          AntarYuk
        </div>
        
  
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in`}>
            {
                Links.map((link)=>(
                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                    <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                </li>
                ))
            }
            <button className='bg-red-600 text-white font-[Poppins] py-2 px-6 rounded-full md:ml-8 hover:bg-indigo-400 
                duration-500'
                href='/Login'>
                Login
            </button>
        </ul>
        </div>
      </div>
    
  )
}
