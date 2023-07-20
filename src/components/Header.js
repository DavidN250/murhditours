import React, {useState } from 'react'
import { Link } from 'react-router-dom';
import logoPNG from '../assets/logo-png.png'
import '../css/main.css'

function Header() {
  const [showIcon, setShowIcon] = useState(true)
  const [hidden, setHidden] = useState(false)
  const [classHidden, setClassHidden] = useState('hidden')

  function fShowMenu() {
    setShowIcon(!showIcon) 
    setHidden(!hidden)

    if (hidden) {
      setClassHidden('hidden')
    }else{
      setClassHidden('')
    }
  }



  return (
    <>
      <nav className='w-full mx-auto flex flex-row sticky top-0 z-1 bg-white shadow-md md:justify-between px-3 h-20'>
        <div className='mx-7 my-4'>
           <a href="/"><img src={logoPNG} alt="Logo" className='w-sm h-15 md:w-md h-12' /></a> 
        </div>
        <div className="hidden md:block mr-10">
          <ul className='flex gap-4 mt-6 text-md font-semibold cursor-pointer uppercase'>
            <Link to='/' className='hover:text-yellow-600 hover:scale-110'>Home</Link>
            <Link to='/about' className='hover:text-yellow-600 hover:scale-110'>About us</Link>
            <Link to='/services' className='hover:text-yellow-600 hover:scale-110'>Services</Link>
            <Link to='/team' className='hover:text-yellow-600 hover:scale-110'>Team</Link>
            <Link to='/gallery' className='hover:text-yellow-600 hover:scale-110'>Gallery</Link>
            <Link to='/contacts' className='hover:text-yellow-600 hover:scale-110'>Contact</Link>
          </ul>
        </div>
        <div className='md:hidden flex-1 my-4 text-right' onClick={fShowMenu} >
         {showIcon ? <i className="fa fa-bars text-2xl cursor-pointer"></i> : <i className="fa fa-times text-2xl"></i>}   
        </div>
      </nav>

       {/* Manu on small screens */}
         
        <div className={`md:hidden w-36 fixed mt-1 ${classHidden} border p-5 right-1 absolute bg-white`}>
          <ul className='flex flex-col gap-2 text-lg font-semibold divide-y-2'>
          <div className='flex gap-3'>
            <i className='fa fa-home mt-1'></i>
            <Link to='/' className='hover:text-blue-900'>Home</Link>
          </div>
          <div className='flex gap-3'>
            <i className='fa fa-info mt-1 ml-2'></i>
            <Link to='/about' className='hover:text-blue-900'>About</Link>
          </div>
          <div className='flex gap-3'>
            <i className='fa fa-laptop mt-1'></i>
             <Link to='/services' className='hover:text-blue-900'>Services</Link>
          </div>
          <div className='flex gap-3'>
            <i className='fa fa-envelope mt-1'></i>
            <Link to='/contacts' className='hover:text-blue-900'>Contact</Link>
          </div>
           
            {/* <Link to='/team' className='hover:text-blue-900'>Team</Link> */}
            
          </ul>
        </div>
    </>
  )
}

export default Header
