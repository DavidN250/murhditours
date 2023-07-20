import React from 'react'
import {services} from '../constants'
import { motion } from 'framer-motion'
const transition = {type:'spring',duration:3}

function Services() {
  return (
    <>
    <div id='services' className='p-5 mt-10 container mx-auto md:grid grid-cols-2'>
      
      {services.map((service,index)=>(
        <motion.div 
         initial={{left:'238px'}}
          whileInView={{left:'9px'}}
          transition={{...transition,type:'tween'}}
        key={index}
        className={`min-h-full items-center p-5 ${index === 3 ? "bg-yellow-50":null} items-center shadow-md border-l-8 border-b-8 border-r-8 border-t-8 border-green-600 border-t-yellow-600 border-r-yellow-600`}>
        <img className='ml-[40%] p-2 border border-green-600 rounded-full bg-white' width="64" height="64" src={service.icon} alt="external-hotel-hotel-services-and-city-elements-flatart-icons-lineal-color-flatarticons"/>
        <h1 className="text-3xl text-center font-bold py-2">{service.title}</h1>
        <p className="description text-lg py-3"> 
          {service.description}
        </p>
      </motion.div>
      ))}
    </div>
    </>
  )
}

export default Services
