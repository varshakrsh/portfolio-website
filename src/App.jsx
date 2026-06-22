// root component for the website, sets up routing and layout
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar        from './components/navigationbar'
import Footer        from './components/Footer'
import Home          from './pages/Home'
import Projects      from './pages/Projects'
import About         from './pages/About'
import ProjectDetail from './pages/ProjectDeets'

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column' }}>
        <Navbar />
        <div style={{ flex:1 }}>
          <Routes>
            <Route path='/'               element={<Home />} />
            <Route path='/about'          element={<About />} />
            <Route path='/projects'       element={<Projects />} />
            <Route path='/projects/:slug' element={<ProjectDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}