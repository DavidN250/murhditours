import React from 'react'
import  {destinations} from "../constants"
import { motion } from 'framer-motion'

function Destination() {
  return (
    <div className="container mx-auto p-5 flex md:flex-row justify-between h-auto">
   <div className="container mx-auto">
    <div className="flex flex-wrap -mx-4">

    {destinations.map((destination,index)=>(
      <div key={index} className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 h-auto">
        <a href='/' className={`c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden`}>
          <motion.div
           initial={{scale:1.2}}
           transition={{duration:3}}
           whileInView={{scale:1}} 
          className="relative pb-48 overflow-hidden">
            <img className="absolute z-[0] h-full w-full object-cover" src={destination.image} alt={destination.title} />
          </motion.div>
          <div className="p-4 h-72 flex flex-col justify-between">
            <span className={`inline-block px-2 py-1 font-semibold leading-none w-20 text-center ${destination.tag ==="Rwanda" ? 'bg-yellow-300 text-white': destination.tag ==="Burundi" ? 'bg-green-500 text-white': destination.tag ==="Congo" ? 'bg-red-600 text-white': null}  rounded-full font-semibold uppercase tracking-wide text-xs`}>{destination.tag}</span>
            <h2 className="mt-2 mb-2  font-bold">{destination.title}</h2>
            <p className="text-lg">{destination.description}</p>
            <div className="mt-3 flex items-center">
              <span className="text-sm font-semibold">Price: </span>&nbsp;<span className="font-bold text-xl">{destination.price}</span>&nbsp;<span className="text-sm font-semibold"></span>
            </div>
          </div>
          <div className="p-4 border-t border-b text-xs text-gray-700">
            <span className="flex items-center mb-1">
              <i className="far fa-clock fa-fw mr-2 text-gray-900" /> {destination.duration} days
            </span>
            <span className="flex items-center">
              <i className="far fa-address-card fa-fw text-gray-900 mr-2" /> Group
            </span>        
          </div>
          <div className="p-4 flex items-center text-sm text-gray-600">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/></svg>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/></svg>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/></svg>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/></svg>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/></svg>
          <span className="ml-2">{destination.reviews} Reviews</span>
          </div>
        </a>
      </div>
    ))}
    </div>
  </div>
</div>
  )
}

export default Destination
