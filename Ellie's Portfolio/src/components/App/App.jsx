import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Header from "../Header/Header"
import Main from "../pages/main"
import ProjectList from "../pages/projectList"
import Project from "../pages/project"
import Footer from "../Footer/Footer"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className='Header'>
        <Header />
      </div>
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/projects" element={<ProjectList />}/>
          <Route path="/projects/:id" element={<Project />}/>
        </Routes>
      </main>
      <div className='Footer'>
        <Footer />
      </div>
    </div>
  )
}

export default App
