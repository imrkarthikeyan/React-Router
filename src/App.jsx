import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import About from './pages/About'
// import Home from './pages/Home'
// import Contact from './pages/Contact';
// import Rollno from './pages/Rollno';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login'
import ProtectedRoute from './pages/ProtectedRoute';
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


    // <BrowserRouter>
    //   <nav>
    //     <Link to="/Rollno/1">Roll No 1</Link>
    //     <Link to="/Rollno/2">Roll No 2</Link>
    //   </nav>
    //   <Routes>
    //     <Route path="/Rollno/:rno" element={<Rollno/>}/>
    //   </Routes>
    // </BrowserRouter>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/login' element={<Login/>}/>
    //     <Route path='/dashboard/*' element={<Dashboard/>}/>
    //   </Routes>
    // </BrowserRouter>


    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<ProtectedRoute element={<Dashboard/>}/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
