import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import {route}
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

function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <div class={`app ${theme}-theme`}>
      <BrowserRouter>
        <Nav theme={theme} toggleTheme={toggleTheme}/>
        <Header />
        <main class="page-container">
          <Routes>
            <Route path="/about" element={<About/>} /> 
            <Route path="/education" element={<Education/>} /> 
            <Route path="/projects" element={<Project/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
