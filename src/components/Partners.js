import React from 'react'
import RDB from '../assets/RDB_logo.png'
import VR from '../assets/download.png'
import RCF from '../assets/Visit_Rwanda_Logo.png'

function Partners() {
  return (
    <div className='container mx-auto p-5 mt-10 md:grid grid-cols-3 gap-4 flex flex-col'>
    <div className='md:border-b-2 border-yellow-500 p-3 rounded-lg justify-center'><img className='w-[400px] h-[50px]' src={RDB} alt="" /></div>
    <div className='md:border-t-2 border-yellow-500 p-3 rounded-lg justify-center'><img className='w-[400px] h-[80px]  p-3 rounded-md'  src={RCF} alt="" /></div>
    {/* <div className='border-b-2 border-yellow-500 p-3 rounded-lg justify-center'><img className='w-[400px] h-[80px]  rounded-md'  src={VR} alt="" /></div> */}
    </div>
  )
}

export default Partners
