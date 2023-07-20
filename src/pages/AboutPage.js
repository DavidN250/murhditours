import React from 'react'
import { About,Testimonial,Contact,Footer } from '../components'
import Sectionbreak from '../components/Sectionbreak'
import FrequentlyAQ from '../components/FrequentlyAQ'

function AboutPage() {
  return (
    <div>
      <About/>
      <Sectionbreak title='Testimonials' subtitle='See what people said about us'/>
      <Testimonial/>
      {/* <Sectionbreak title='FAQs' subtitle='Refer to these questions and answers to know more about us'/>
      <FrequentlyAQ/> */}
      <Sectionbreak title='Contact us' subtitle='Our team is always there to hear from you'/>
      <Contact/>
      <Sectionbreak/>
      <Footer/>
    </div>
  )
}

export default AboutPage
