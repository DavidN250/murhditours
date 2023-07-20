import React from 'react'
import '../css/main.css'
import { motion } from 'framer-motion'


function Hero() {
  return (
    <>
      <div id="hero" className="flex flex-col h-screen w-full place-content-center justify-center pt-20 md:pt-10 gap-6 bg-hero-pattern bg-cover">
        <motion.div
        initial={{y:-200}}
        transition={{duration:3,type:'tween'}}
         whileInView={{y:0}}
        >
          <h1 className='text-center text-2xl md:text-5xl font-bold text-white'>EXPLORE CENTRAL AFRICA’S <br /> BEST KEPT SECRET MARVELS</h1>
          <h1 className='text-center text-lg font-bold uppercase text-gray-400'>Your tour guide for Rwanda, DRC, and Burundi</h1>
       </motion.div>
        <motion.div className=' place-content-center mx-auto'
        initial={{x:-200}}
        transition={{duration:3,type:'tween'}}
        whileInView={{x:0}}
        whileHover={{scale:1.2}}
        >
          <button className='p-2 px-4 rounded-full font-semibold bg-yellow-600 text-white uppercase text-2xl'>Discover now</button>
        </motion.div>
      </div>
    </>
  )
}

export default Hero
