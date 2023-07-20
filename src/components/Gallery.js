import React from 'react'
import img1 from '../assets/destinations/DSC_8079-scaled.jpg'
import img2 from '../assets/destinations/FB_IMG_1676875144037.jpg'
import img3 from '../assets/destinations/IMG-20230205-WA0007.jpg'
import img4 from '../assets/destinations/IMG-20230215-WA0014.jpg'
import img5 from '../assets/destinations/IMG-3477.jpg'
import img6 from '../assets/destinations/IMG-3478-scaled.jpg'
import { motion } from 'framer-motion'

function Gallery() {
  return (
    <div className='container mx-auto md:grid grid-cols-3'>
    <motion.div 
     initial={{opacity:0.3,y:50}}
     whileInView={{opacity:0.7,y:0}}
     whileHover={{opacity:1,cursor:'pointer',scale:1.3,zIndex:1}}
    className='h-[300px]'>
        <img className='w-full h-full object-cover hover:poin' src={img1} alt="" />
    </motion.div>
    <motion.div 
     initial={{opacity:0.3,y:50}}
     whileInView={{opacity:0.7,y:0}}
     whileHover={{opacity:1,cursor:'pointer',scale:1.3,zIndex:1}}
    className='h-[300px]'>
        <img className='w-full h-full object-cover hover:poin' src={img2} alt="" />
    </motion.div>
    <motion.div 
     initial={{opacity:0.3,y:50}}
     whileInView={{opacity:0.7,y:0}}
     whileHover={{opacity:1,cursor:'pointer',scale:1.3,zIndex:1}}
    className='h-[300px]'>
        <img className='w-full h-full object-cover hover:poin' src={img3} alt="" />
    </motion.div>
    <motion.div 
     initial={{opacity:0.3,y:50}}
     whileInView={{opacity:0.7,y:0}}
     whileHover={{opacity:1,cursor:'pointer',scale:1.3,zIndex:1}}
    className='h-[300px]'>
        <img className='w-full h-full object-cover hover:poin' src={img4} alt="" />
    </motion.div>
    <motion.div 
     initial={{opacity:0.3,y:50}}
     whileInView={{opacity:0.7,y:0}}
     whileHover={{opacity:1,cursor:'pointer',scale:1.3,zIndex:1}}
    className='h-[300px]'>
        <img className='w-full h-full object-cover hover:poin' src={img5} alt="" />
    </motion.div>
    <motion.div 
     initial={{opacity:0.3,y:50}}
     whileInView={{opacity:0.7,y:0}}
     whileHover={{opacity:1,cursor:'pointer',scale:1.3,zIndex:1}}
    className='h-[300px]'>
        <img className='w-full h-full object-cover hover:poin' src={img6} alt="" />
    </motion.div>
    </div>
  )
}

export default Gallery
