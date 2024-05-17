import React, { useContext, useEffect, useState } from 'react'
import logo from './../assets/Images/logo1.png'
import { IoIosSearch } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import { ThemeContext } from '../Context/ThemeContext';

function Header() {
    const [toogle,setToogle]= useState(true)
    const {theme,setTheme} = useContext(ThemeContext)

    useEffect(() => {
        console.log("Theme", theme)
    })
  return (
    <div className='flex items-center p-3'>
        <img src={logo} height={60} width={60}/>
        <div className='flex bg-slate-200 p-2 w-full 
        mx-5 rounded-full items-center'>
            <IoIosSearch/>
            <input type='text' placeholder='Search Game' className='bg-transparent outline-none px-2 text-black'/>
        </div>
        <div>
            {theme=='light'?<IoMoon onClick={() => {setTheme('dark'), localStorage.setItem('theme','dark')}} className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'/>:
            <FaSun onClick={() => {setTheme("light"), localStorage.setItem('theme','light')}} className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'/>}
        </div>
    </div>
  )
}

export default Header