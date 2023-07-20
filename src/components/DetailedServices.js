import React from 'react'
import {details} from '../constants'
import { motion } from 'framer-motion'
const transition = {type:'spring',duration:3}

function DetailedServices() {
  return (
    <>
    <div id='services' className='p-5 mt-10 container mx-auto md:grid grid-cols-3 gap-10 items-center flex flex-col'>
      
      {details.map((service,index)=>(
        <motion.div
         initial={{y:200}}
         whileInView={{y:0}}
         transition={{transition,type:'tween'}}
         key={index}
         className={`min-h-full items-center p-5 shadow-md border-t-4 rounded-md border-yellow-400 hover:bg-yellow-50 hover:cursor-pointer`}>
        <img className='ml-[40%] rounded-full border border-yellow-500 p-3 md:-mt-[15%] -mt-[20%] bg-white' width="64" height="64" src={service.icon} alt="external-hotel-hotel-services-and-city-elements-flatart-icons-lineal-color-flatarticons"/>
        <h1 className="text-2xl text-center font-bold py-2">{service.title}</h1>
        <p className="description text-lg py-3"> 
          {service.description}
        </p>
      </motion.div>
      ))}
    </div>
    </>
  )
}

export default DetailedServices
