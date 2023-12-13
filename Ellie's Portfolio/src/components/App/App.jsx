import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Header from "../Header/Header"
import About from "../pages/About"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"
import Footer from "../Footer/Footer"
import Error from "../pages/Error"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App background-container'>
      <nav className='header'>
        <Header />
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </main>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default App
