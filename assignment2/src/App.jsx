import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav  from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import About from './pages/About'
import Education from './pages/Education'
import Project from './pages/Project'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import NotFound from './pages/NotFound'
function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }
  
  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className={`app ${theme}-theme`}>
      <BrowserRouter>
        <Nav theme={theme} toggleTheme={toggleTheme}/>
        <main className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} /> 
            <Route path="/education" element={<Education/>} /> 
            <Route path="/projects" element={<Project/>} />
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
