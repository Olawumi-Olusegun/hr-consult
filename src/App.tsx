// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Footer from "./components/_shared/Footer"
import Navbar from "./components/_shared/Navbar"
import About from "./components/landing/About"
import Hero from "./components/landing/Hero"
import Services from "./components/landing/Services"

function App() {

  return (
    <>
      <div className="h-dvh">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Footer />
      </div>
    </>
  )
}

export default App
