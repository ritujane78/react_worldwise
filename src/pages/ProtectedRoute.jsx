import { useEffect } from "react";
import { useAuth } from "../contexts/AuthenticationContext"
import { useNavigate } from "react-router-dom";

function ProtectedRoute({children}) {
    const {isAuthenticated } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if(!isAuthenticated) navigate("/")
    }, [isAuthenticated]);
  return (
    <div>
        {isAuthenticated? children: null}
    </div>
  )
}

export default ProtectedRoute
