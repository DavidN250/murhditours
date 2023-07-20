import React, { useState } from 'react'
import  {packages} from "../constants"

function FrequentlyAQ() {
    const [accordion,setAccordion] = useState(2)

    function toggleAccordion(index){
        if (index === accordion) {
            setAccordion(-1)
            return
        }
        setAccordion(index)
    }
  return (
    <div className='container mx-auto flex  flex-col md:flex-row'>
      <div className='flex-1 flex flex-col container mx-auto px-7'>
      {packages.map((faq,index)=>{
        return (
        <div key={index} onClick={()=>toggleAccordion(index)} className='flex flex-col border p-2 px-4 border-l-2 border-l-blue-950 mt-2 shadow-sm bg-slate-100'>
            <div className='flex flex-row justify-between border-b-white'>
                <h1 className='text-xl font-semibold'>{faq.question} <br /></h1>
                {accordion === index ? 
                <i className='fa fa-minus p-3 border cursor-pointer h-10 rounded-full'></i> :
                <i className='fa fa-plus p-3 border cursor-pointer h-10 rounded-full'></i> }     
            </div>
            <p className={`mt-3 p-3 text-lg border-t ${accordion===index? "":"hidden"} border-t-white`}>{faq.answer}</p>
        </div>
      )
      })}
      </div>
    </div>
  )
}

export default FrequentlyAQ
