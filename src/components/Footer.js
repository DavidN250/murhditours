import { motion } from 'framer-motion'
import logoPNG from '../assets/logo-png.png'
import '../css/main.css'

function Footer() {
  return (
    <>
    <motion.div
      initial={{y:200}}
      transition={{duration:3,type:'tween'}}
        whileInView={{y:0}}
    className='bg-blue-950 text-white '>
    <div id='about' className='px-5 py-6 mt-10 flex gap-10 flex-col border-t-2  md:flex-row'>
      <div className='flex-1 flex flex-col gap-2 text-md font-semibold md:pl-36'>
        <h1 className='text-lg font-bold text-yellow-600'>Quick links</h1>
        <hr className='w-10 h-1' />
        <a className='hover:text-yellow-600'  href="/">Home</a>
        <a className='hover:text-yellow-600'  href="/about">About</a>
        <a className='hover:text-yellow-600'  href="/services">Services</a>
        {/* <a  href="/team">Team</a> */}
        <a className='hover:text-yellow-600'   href="/contact">Contact</a>
      </div>
      <div className='flex-1 flex flex-col gap-2 text-md font-semibold '>
        <h1 className='text-lg font-bold text-yellow-600'>Contact info</h1>
        <hr className='w-10 h-1 bg-blue-950' />
        <div className='flex gap-2'>
          <i className='fas fa-phone mt-2 text-yellow-600'></i>
          <span>+250 734592496</span>
        </div>
        <div className='flex gap-2'>
          <i className='fas fa-envelope mt-2 text-yellow-600'></i>
          <span>info@murhditours.com</span>
        </div>
        <div className='flex gap-2 '>
          <i className='fas fa-envelope mt-2 text-yellow-600'></i>
          <span>murhditravel@gmail.com</span>
        </div>
       
      </div>
      <div className='flex-1 flex flex-col gap-2 text-md font-semibold'>
        <h1 className='text-lg font-bold text-yellow-600'>Make a reservation</h1>
        <hr className='w-10 h-1 bg-blue-950' />
        <div className='flex gap-2'>
          <span className='font-normal'>Our Support and Sales team is available 24 /7 to answer your queries</span>
        </div>
        <div className='flex gap-2'>
          <button className='border px-5 w-40 uppercase bg-yellow-600 text-center py-1 rounded-md hover:bg-white hover:text-black'><i className='fas fa-phone mt-2 ml-3'></i> Call us </button>
        </div>
        <div className='flex gap-2'>
          <button className='border px-5 w-40 uppercase bg-green-700 py-1 rounded-md hover:bg-white hover:text-black'><i className='fas fa-comments mt-2 ml-3'></i> Whatsap </button>
        </div>
       
      </div>
    </div>
    <div className='bg-blue-950 p-4 container mx-auto border-t border-t-gray-500 text-gray-400 flex flex-row justify-between'>
      <img src={logoPNG} alt="" className='mr-3 w-36'/>
      <div className="copyright justify-center flex flex-col">
         <span className='hidden md:block font-bold md:tex-lg text-md'>Copyright &copy;  Murhdi Tours</span>
      </div>
      <div className="copyright justify-center flex flex-col">
         <span className='hidden md:block  md:tex-lg text-md'>Proudly Powered by <a className='text-yellow-600' href="https://planktonx.com/">Plankton</a></span>
      </div>
    </div>
    </motion.div>
    </>
  )
}

export default Footer
