import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import About from './pages/About'
// import Home from './pages/Home'
// import Contact from './pages/Contact';
import Rollno from './pages/Rollno';
function App() {

  return (
    // <BrowserRouter>
    //   <nav>
    //     <Link to="/Home">Home</Link>
    //     <Link to="/About">About</Link>
    //     <Link to="/Contact">Contact</Link>
    //   </nav>
    //   <Routes>
    //     <Route path="/Home" element={<Home/>}/>
    //     <Route path="/About" element={<About/>}/>
    //     <Route path="/Contact" element={<Contact/>}/>
    //   </Routes>
    // </BrowserRouter>


    <BrowserRouter>
      <nav>
        <Link to="/Rollno/1">Roll No 1</Link>
        <Link to="/Rollno/2">Roll No 2</Link>
      </nav>
      <Routes>
        <Route path="/Rollno/:rno" element={<Rollno/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
