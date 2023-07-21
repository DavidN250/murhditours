import { useState } from "react"

function Contact() {
  const [name, setName] = useState('') // useState to store  Name
  const [email, setEmail] = useState('') // useState to store Email address
  const [message, setMessage] = useState('') // useState to store Message address
  const [error,] = useState(false)
  return (
   <div className='flex flex-col md:flex-row justify-between gap-8 container mx-auto bg-white'>
            <div className='flex-1 p-5 '>
              <div className='p-5 rounded-md border flex flex-col gap-5 border-t-8 border-yellow-500 '>
                <div>
                  <form action="" className='flex flex-col gap-5'> 
                     <div className='flex gap-5 flex-col md:flex-row'>
                        <div className='flex flex-1 flex-col gap-1'>
                        <label htmlFor="name">Names <span className='text-red-700'>*</span></label>
                        <input className='h-10 rounded-md border px-3 focus:border-blue-950 focus:border' type="text" name="name" onChange={(e) => setName(e.target.value)} id="name" />
                          {error&&name.length<=0?
                           <label className='text-red-500 font-semibold'>Name can't be empty</label>:""}
                        </div>
                        <div className='flex flex-1 flex-col gap-1'>
                        <label htmlFor="email">Email <span className='text-red-700'>*</span></label>
                        <input className='h-10 rounded-md border px-3  focus:border-blue-950 focus:border' type="text" name="email" onChange={(e) => setEmail(e.target.value)} id="email" />
                          {error&&email.length<=0?
                          <label className='text-red-500 font-semibold'>Email can't be empty</label>:""}
                        </div>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <label htmlFor="">Message <span className='text-red-700'>*</span></label>
                        <textarea className='border rounded-md px-3 focus:border focus:border-yellow-600' name="message" onChange={(e) => setMessage(e.target.value)} id="" cols="30" rows="4" ></textarea>
                          {error&&message.length<=0?
                          <label className='text-red-500 font-semibold'>Message can't be Empty</label>:""}
                      </div>
                       <button type='submit' className='border text-black md:selection:w-[30%] rounded-md text-center text-lg font-bold uppercase p-2 hover:bg-yellow-600 hover:text-white '> Send a message</button>
                  </form>
                </div>
              </div>
            </div>
       </div>
  )
}

export default Contact
