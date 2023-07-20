import React, { useState } from 'react'
import  {testimonials } from "../constants"
import Sectionbreak from '../components/Sectionbreak'
import { motion } from 'framer-motion'

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <>
    <div id='testimonials' className='px-5 mt-10 container mx-auto md:grid grid-cols-3 gap-2 flex flex-col'>   
      {testimonials.map((testimonial,index)=>(
        <div key={index}>
        <motion.div 
            initial={{x:100}}
            transition={{duration:3,type:'tween'}}
            whileInView={{x:0}} 
         className={`bg-yellow-50 p-4 pl-6 border-2 border-yellow-500 flex flex-col h-auto shadow-md rounded-lg`}>
              <div className='h-auto'>
                <p className='text-lg md:my-4 pb-12'>{testimonial.testimonial}</p>
              </div>
              <div className='flex-row gap-6 justify-center mb-4 hidden md:flex'>
                <i className='fab fa-twitter cursor-pointer'></i>
                <i className='fab fa-facebook cursor-pointer'></i>
                <i className='fab fa-linkedin cursor-pointer'></i>
              </div>
              <motion.div
               initial={{x:-100}}
               transition={{duration:3,type:'tween'}}
               whileInView={{x:0}} 
               className='flex justify-center -mb-14'>
                <img className='rounded-full  w-20 h-20 border-4 border-yellow-500' src={testimonial.image} alt="" />
              </motion.div>
              
          </motion.div>
          <motion.div
           initial={{x:-100}}
           transition={{duration:3,type:'tween'}}
           whileInView={{x:0}} 
           className='flex flex-col text-center justify-center mt-10'>
            <span>{testimonial.name} </span>
            <span className='md:text-lg font-bold text-center'>{testimonial.designation} from {testimonial.company}  </span>
          </motion.div>
          
        </div>
      ))}
    </div>
    </>
  )
}

export default Testimonial
