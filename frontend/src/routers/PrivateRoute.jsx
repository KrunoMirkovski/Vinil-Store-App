import { useAuth } from "../context/AuthContext"
import { Navigate } from "react-router-dom"
// PrivateRoute component to protect routes from unauthenticated access
const PrivateRoute = ({children}) => {
    const {currentUser, loading} = useAuth();// Get user and loading state
    if(loading) {
        return <div>Loading..</div>
    }
    // If authenticated, render the children component
    if(currentUser) {
        return children;
    }
  return (
    // If not authenticated, redirect to login page
    <Navigate to="/login" replace/>
  )
}

export default PrivateRoute