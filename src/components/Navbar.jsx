import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-purple-500 p-2 text-white text-2xl flex justify-around'>
      <NavLink to={"/"} style={({isActive})=>(isActive?{color:"rgb(255,255,0)"}:{undefined})}>Audio</NavLink>
      <NavLink to={"/video"} style={({isActive})=>(isActive?{color:"rgb(255,255,0)"}:{undefined})}>Video</NavLink>
    </div>
  )
}

export default Navbar
