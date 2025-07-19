import React from 'react'
import Hero from './component/Hero'
import About from './component/About'
import Title from './component/title'
import Projects from './component/Projects'
import Testimonials from './component/Testimonials'
import Contact from './component/Contact'
import Footer from './component/Footer'

const App = () => {
  return (
     <div className='w-[100vw] overflow-hidden'>
       <Hero />
       <Title title='About' subtitle='OurBrand' description='Passionate About Properties, Dedicated' subdescription='to Your Vision' />
       <About />
       <Title title='Projects' subtitle='Completed' description='Crafting Spaces, Building Legacies—Explore' subdescription='Our Portfolio' />
       <Projects />
       <Title title='Customer' subtitle='Testimonials' description='Real Stories from Those Who Found Home' subdescription='with Us' />
       <Testimonials />
       <Title title='Contact' subtitle='With Us' description='Ready to Make a Move? Let’s Build Your' subdescription='Future Together' />
       <Contact />   
       <Footer />  
     </div>

  )
}

export default App
