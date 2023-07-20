import React from 'react'
import { Hero,About,Testimonial,Contact,Footer,DetailedServices,Packages } from '../components'
import Gallery from '../components/Gallery'

function GalleryPage() {
  return (
    <div className='pt-10'>
    <Gallery/>
      <Footer/>
    </div>
  )
}

export default GalleryPage
