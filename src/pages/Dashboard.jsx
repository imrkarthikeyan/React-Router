 import { Link, Routes, Route } from 'react-router-dom';
 import Settings from "./Settings";

function Dashboard(){
    return(
        <div className="pg">
             <nav>
                <Link to="settings">Settings</Link>
            </nav>
            <Routes>
                <Route path="settings" element={<Settings/>}/>
            </Routes> 
        </div>
    )
}

export default Dashboard