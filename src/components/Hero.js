import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import hero_image from '../assets/hero.png'
import image3 from '../assets/destinations/IMG-20230205-WA0007.jpg';
import '../css/main.css'
import { motion } from 'framer-motion'
import CarouselContainer from './CarouselContainer';
const transition = {type:'spring',duration:3}


function Hero() {
  return (
    <>
      <div id="hero" className="flex flex-col h-screen w-full place-content-center justify-center pt-20 md:pt-10 gap-6 bg-hero-pattern bg-cover">
        <motion.div
        initial={{y:-200}}
        transition={{duration:3,type:'tween'}}
         whileInView={{y:0}}
        >
          <h1 className='text-center text-5xl font-bold text-white'>EXPLORE CENTRAL AFRICA’S <br /> BEST KEPT SECRET MARVELS</h1>
          <h1 className='text-center text-2xl font-bold uppercase text-gray-400'>Your tour guide for Rwanda, DRC, and Burundi</h1>
       </motion.div>
        <motion.div className=' place-content-center mx-auto'
        initial={{x:-200}}
        transition={{duration:3,type:'tween'}}
        whileInView={{x:0}}
        whileHover={{scale:1.2}}
        >
          <button className='p-2 px-4 rounded-full font-bold bg-yellow-600 text-white uppercase text-2xl'>Discover now</button>
        </motion.div>
      </div>
    </>
  )
}

export default Hero
