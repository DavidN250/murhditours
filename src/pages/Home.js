import React from 'react'
import { Hero,About,Testimonial,Contact,Footer,DetailedServices,Packages} from '../components'
import Sectionbreak from '../components/Sectionbreak'
import Partners from '../components/Partners'
import Gallery from '../components/Gallery'
import Locations from '../components/Locations'
import Team from '../components/Team'
import Destination from '../components/Destination'

function Home() {
  return (
    <div>
     <Hero/>
     {/* <Stats/> */}
     <About/>
     <Sectionbreak title='Our Team' subtitle='Meet the team behind all of our incomparable services'/> 
     <Team/>
     <Sectionbreak title='Destinations' subtitle='There are autonomous regions with diverse geography and cultures that will make you enjoy all the moments'/> 
     <Destination/>
     <Sectionbreak title='Our Services' subtitle='10 Years of Experience in Tours and Safaris'/> 
     <DetailedServices/>
     <Sectionbreak title='our Packages' subtitle=''/> 
     <Packages/>
     <Sectionbreak title='Gallery' subtitle=''/> 
     <Gallery/>
     <Sectionbreak title='Tourists Feedback' subtitle='Meet some of our satisfied clients and see why they are so happy with us'/> 
     <Testimonial/>
     <Sectionbreak title='Contact us' subtitle='Fill all required fileds in the form and send us the message directly'/> 
     <Locations/>
     <Contact/>
     <Sectionbreak title='Partners' subtitle=''/> 
     <Partners/>
      <Footer/>
    </div>
  )
}

export default Home