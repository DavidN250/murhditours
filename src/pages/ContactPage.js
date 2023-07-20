import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
import {Contact,Footer } from '../components'
import Sectionbreak from '../components/Sectionbreak'
import Locations from '../components/Locations';

// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

 


export const ContactPage = ()=> {
  const [name, setName] = useState('') // useState to store  Name
  const [email, setEmail] = useState('') // useState to store Email address
  const [message, setMessage] = useState('') // useState to store Message address
  const [error, setError] = useState(false)
  return (
    <div className='mt-10'>
      <Locations/>
      <Contact/>
      <Sectionbreak/>
      <Footer/>
    </div>
  )
}

export default ContactPage