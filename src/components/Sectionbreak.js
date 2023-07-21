import React from 'react'
import { motion } from 'framer-motion'
function Sectionbreak(props) {
  return (
    <>
      <div className='flex flex-col gap-3 items-center py-5 my-10'
       
      >
           <motion.h1 
           initial={{y:20,opacity:0.2}}
       transition={{duration:3,type:'spring'}}
       whileInView={{opacity:1,y:0}}
           className='uppercase text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-300'>{props.title}</motion.h1>
           <motion.p 
           initial={{y:20,opacity:0.2}}
       transition={{duration:3,type:'spring'}}
       whileInView={{opacity:1,y:0}}
           className='text-lg text-gray-400 text-center'>{props.subtitle}</motion.p>
      </div>
    </>
  )
}
export default Sectionbreak
