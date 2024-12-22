import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Portfolio from './Portfolio'
import Services from './Services'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'

export default function Home() {
    return (
        <>  
            <Navbar />
            <div >
                <Hero />
                <About />
                <Portfolio />
                <Services />
                <Testimonials />
                <Contact />
                <Footer />
            </div>
        </>
    )
}
