import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Testimonials from './pages/Testimonials'

function App() {

  return (
    <>
      <div className = "flex flex-col min-h-screen">
        <NavBar />
        <div className = "flex-1">
          <Routes>
            <Route path="/" element = {<Home />}/>
            <Route path="/about" element = {<About />}/>
            <Route path="/projects" element = {<Projects />}/>
            <Route path="/services" element = {<Services />}/>
            <Route path="/contact" element = {<Contact />}/>
            <Route path="/testimonials" element= {<Testimonials />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
