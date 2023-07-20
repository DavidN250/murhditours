import React from 'react'
import {Testimonial,Contact,Footer, DetailedServices } from '../components'
import Sectionbreak from '../components/Sectionbreak'
function ServicesPage() {
  return (
    <div>
      <DetailedServices/>
      <Sectionbreak title='Testimonials' subtitle='See what people said about us'/>
      <Testimonial/>
      <Sectionbreak title='Contact us' subtitle='Our team is always there to hear from you'/>
      <Contact/>
      <Sectionbreak/>
      <Footer/>
    </div>
  )
}

export default ServicesPage
