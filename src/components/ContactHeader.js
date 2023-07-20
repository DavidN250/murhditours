import React from 'react'

function ContactHeader() {
  return (
    <div className='flex-row hidden bg-green-900 justify-between p-2 text-xl md:flex shadow-md'>
      <div className='flex flex-row gap-3 ml-4'>
        <img className='inline-block' width="30" height="30" src="https://img.icons8.com/offices/30/place-marker.png" alt="place-marker"/>
        <i className='fab fa-address text-yellow-600'><span className=' text-white text-lg'>Kigali City, Nyarugenge district, KN1, Centre Saint Paul Rwanda</span></i>
      </div>
      <div className=' flex flex-row gap-3 mr-10 text-yellow-600'>
        <i className='p-1 h-8 w-8   hidden md:block fab fa-facebook border  border-yellow-600 rounded-full cursor-pointer'></i>
        <i className='p-1 h-8 w-8   hidden md:block fab fa-linkedin border  border-yellow-600 rounded-full cursor-pointer'></i>
        <i className='p-1 h-8 w-8   hidden md:block fab fa-twitter border  border-yellow-600 rounded-full cursor-pointer'></i>
        <i className='p-1 h-8 w-8   hidden md:block fab fa-instagram border  border-yellow-600 rounded-full cursor-pointer'></i>
      </div>
    </div>
  )
}

export default ContactHeader
