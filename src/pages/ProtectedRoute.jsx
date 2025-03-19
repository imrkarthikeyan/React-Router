import { Navigate } from "react-router-dom";

const isAuthenticated=false;
function ProtectedRoute({element}){
    return isAuthenticated ? element : <Navigate to="/login"/>;
}

export default ProtectedRoute