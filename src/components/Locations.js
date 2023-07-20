import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Locations() {
  const [name, setName] = useState('') // useState to store  Name
  const [email, setEmail] = useState('') // useState to store Email address
  const [message, setMessage] = useState('') // useState to store Message address
  const [error, setError] = useState(false)
  return (
    <div className='container mx-auto border bg-yellow-600 flex flex-col justify-between p-5'>
       <div className='flex flex-col md:flex-row'>
        <div>
             <motion.div
              initial={{y:100}}
              transition={{duration:2,type:'tween'}}
              whileInView={{y:0}}
              className='flex gap-3 shadow-md p-10 flex-col md:flex-row items-center text-center md:text-left'>
                <div className='flex flex-col gap-4'> 
                <div>
                <img className='inline-block -mt-3'  width="48" height="48" src="https://img.icons8.com/emoji/48/rwanda-emoji.png" alt="rwanda-flag"/>
                  <span className='text-2xl ml-2 font-bold uppercase text-white'>Rwanda</span><br />
                </div>
                  <span className='text-lg ml-2 cursor-pointer font-semibold'>Kigali City, Nyarugenge district, KN1, 4384, Centre Saint Paul Rwanda</span>
                </div>
              </motion.div>
        </div>
        <div>
             <motion.div 
              initial={{y:100}}
              transition={{duration:2,type:'tween'}}
              whileInView={{y:0}}
              className='flex gap-3 shadow-md p-10 flex-col items-center text-center md:text-left'>
                <div className='flex flex-col gap-4'> 
                <div>
                <img className='inline-block -mt-3'  width="48" height="48" src="https://img.icons8.com/emoji/48/burundi-emoji.png" alt="burundi-flag"/>
                  <span className='text-2xl ml-2 font-bold uppercase text-white'>Burundi</span><br />
                </div>
                  <span className='text-lg ml-2 cursor-pointer font-semibold'>This tours will take you to visit all the attractive places around cities in Burundi</span>
                </div>
              </motion.div>
        </div>
        <div>
             <motion.div 
             initial={{y:100}}
              transition={{duration:2,type:'tween'}}
              whileInView={{y:0}}
             className='flex gap-3 shadow-md p-10 flex-col md:flex-row items-center text-center md:text-left'>
                <div className='flex flex-col gap-4'> 
                <div>
                <img className='inline-block -mt-3' width="48" height="48" src="https://img.icons8.com/emoji/48/congo-kinshasa-emoji.png" alt="congo-kinshasa-emoji"/>
                  <span className='text-2xl ml-2 font-bold uppercase text-white inline-block'>DRC</span><br />
                </div>
                  <span className='text-lg ml-2 cursor-pointer font-semibold'>You will track Gorillas trek, Chimpanzees, Goma, Nyiragongo, Lake Kivu and other primates.</span>
                </div>
              </motion.div>
        </div>
        </div>
    </div>
  )
}

export default Locations
