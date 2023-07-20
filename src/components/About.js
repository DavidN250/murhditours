import React from 'react'
import about from '../assets/about.jpg'
import '../css/main.css'
import Sectionbreak from './Sectionbreak'
import { motion } from 'framer-motion'

function About() {
  return (
    <div id='about' className='px-5 pt-11 flex gap-6 container mx-auto flex-col md:flex-row'>
      <motion.div 
       initial={{x:-200,opacity:0.2}}
       transition={{duration:3,type:'spring'}}
       whileInView={{opacity:1,x:0}}
       whileHover={{scale:1.05,cursor:'pointer'}}
       className="flex-1 content-center justify-center pb-3 items-center flex md:mt-0 mt-7">
        <img className='mt-10 md:mt-0 w-full h-full' src={about} alt=""/>
      </motion.div>
      <div className="flex-1 flex flex-col gap-6">
       <div>
        <Sectionbreak title='About us' subtitle='We help to make your Tour Enjoyable and Memorable'/>
        </div>
        <p className='text-xl mt-1 md:text-justify text-left md:mr-10'>
         Murhditours Ltd is a reginal tour company operating in Rwanda, Congo (DRC), and Burundi. We offer a variety of tour packages carefully designed to meet different objectives and budgets: From the great attractions of the region such as gorilla trekking and wildlife in Akagera National Park, to cultural tours, exploring the artisanal side of African, including food delights, to coffee harvesting, and art of the nation.
        </p>
          <p  whileInView={{opacity:1,x:0}}
          className='text-xl mt-3 border-l-8 border-yellow-500 pl-4 text-start md:text-justify md:mr-10'>
          We, at Murhditours ltd, embrace a win win philosophy: serving the best interest of our customers, our local population, and the conservation of nature. Our approach focuses on sustainability, making the experience most exhilarating and professional.
        </p>
      </div>
    </div>
  )
}

export default About
