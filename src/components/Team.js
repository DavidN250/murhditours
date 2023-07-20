import React from 'react'
import CEO from '../assets/team/ceoo.jpg'
import SMA from '../assets/team/team2.jpg'
import OPM from '../assets/team/team3.jpg'
import PR from '../assets/team/team4.jpg'
import { motion } from 'framer-motion'
function Team() {
  return (
    <div className='p-5 container mx-auto justify-evenly flex md:grid grid-cols-4 gap-10 flex-col md:gap-2 mt-24'>
      <motion.div 
        initial={{y:50}}
        transition={{duration:3,type:'tween'}}
        whileInView={{y:0}}
        whileInHover={{shadow:10}}
      className='flex-1'>
            <div className='p-2 text-center shadow-md hover:shadow-lg hover:cursor-pointer'>
                <img className='object-cover h-48 w-48 mx-auto p-2 border-2 border-yellow-500 md:-mt-20' src={CEO} alt="" />
                <h1 className='mx-2 mt-2 text-lg uppercase font-bold '>Mr. Dieumerci</h1>
                <h1 className='mx-2 text-md uppercase font-bold text-gray-400 '>CEO & Founder</h1>
                 <p></p>
            </div>
      </motion.div>
      <motion.div 
        initial={{y:50}}
        transition={{duration:3,type:'tween'}}
        whileInView={{y:0}}
        whileInHover={{shadow:10}}
      className='flex-1 h-14'>
            <div className='p-2 text-center shadow-md hover:shadow-lg hover:cursor-pointer'>
                <img className='object-cover h-48 w-48 mx-auto p-2 border-2 border-yellow-500 md:-mt-20' src={SMA} alt="" />
                <h1 className='mx-2 mt-2 text-lg uppercase font-bold '>Ms. Lillian</h1>
                <h1 className='mx-2 text-md uppercase font-bold text-gray-400 '>Sales and marketing</h1>
                 <p></p>
            </div>
      </motion.div>
      <motion.div 
        initial={{y:50}}
        transition={{duration:3,type:'tween'}}
        whileInView={{y:0}}
        whileInHover={{shadow:10}}
      className='flex-1'>
            <div className='p-2 text-center shadow-md hover:shadow-lg hover:cursor-pointer'>
                <img className='object-cover h-48 w-48 mx-auto p-2 border-2 border-yellow-500 md:-mt-20' src={OPM} alt="" />
                <h1 className='mx-2 mt-2 text-lg uppercase font-bold '>Mr. Emmanuel</h1>
                <h1 className='mx-2 text-md uppercase font-bold text-gray-400 '>Operation Manager</h1>
                 <p></p>
            </div>
      </motion.div>
      <motion.div 
        initial={{y:50}}
        transition={{duration:3,type:'tween'}}
        whileInView={{y:0}}
        whileInHover={{shadow:10}}
      className='flex-1'>
            <div className='p-2 text-center shadow-md hover:shadow-lg hover:cursor-pointer'>
                <img className='object-cover h-48 w-48 mx-auto p-2 border-2 border-yellow-500 md:-mt-20' src={PR} alt="" />
                <h1 className='mx-2 mt-2 text-lg uppercase font-bold '>Ms. Aline</h1>
                <h1 className='mx-2 text-md uppercase font-bold text-gray-400 '>Public Relations</h1>
                 <p></p>
            </div>
      </motion.div>
    </div>
  )
}

export default Team
