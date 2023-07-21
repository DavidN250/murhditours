import React from 'react'
import  {packages} from "../constants"
import { motion } from 'framer-motion'
function Packages() {
  return (
    <div className='container mx-auto mt-5 p-5 md:grid grid-cols-3 gap-4 my-3 flex flex-col'>
    {packages.map((pack,index)=>(
        <motion.div 
          initial={{y:50}}
          transition={{duration:2,type:'tween'}}
          whileInView={{y:0}} 
          whileHover={{scale:1.2,zIndex:1}}
          key={index} className='border shadow-sm border-yellow-500 text-center flex flex-col gap-3 justify-between hover:bg-gradient-to-r hover:from-green-800 hover:to-green-500 hover:cursor-pointer'>
        <h1 className='text-2xl font-bold my-4'>{pack.title} </h1>
        <h1 className='text-4xl font-bold text-yellow-600'>{pack.price}/ <span className='text-black'>{pack.duration}</span></h1>
        <p className='p-4 text-xl'>{pack.description}</p>
         <button className='uppercase text-lg font-bold p-3 bg-yellow-600 text-white border-1 border-green-500'>Learn more</button>
      </motion.div>
    ))}
    </div>
  )
}

export default Packages
