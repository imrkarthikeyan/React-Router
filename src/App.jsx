import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
