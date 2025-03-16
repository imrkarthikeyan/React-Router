import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact';
function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
