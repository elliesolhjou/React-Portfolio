import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Header from "../Header/Header"
import Main from "../pages/Main"
import ProjectList from "../pages/ProjectList"
import Project from "../pages/Project"
import Skills from "../pages/Skills"
import Contact from "../pages/Contact"
import Footer from "../Footer/Footer"
import Error from "../pages/Error"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <nav className='Header'>
        <Header />
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/projects" element={<ProjectList />}/>
          <Route path="/projects/:id" element={<Project />}/>
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </main>
      <div className='Footer'>
        <Footer />
      </div>
    </div>
  )
}

export default App
