import { useNavigate } from "react-router-dom";

function Login(){
    let navigate=useNavigate();
    function handleLogin(){
        navigate('/dashboard');
    }
    return <button onClick={handleLogin}>Login</button>
}

export default Login