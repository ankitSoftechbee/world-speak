import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    const token = localStorage.getItem('access_token')
      // const token=true

    if (!token) {
        return <Navigate to="/user/login" replace />; // Redirect to login if no token
    }

    return children; // Render the protected component if the token exists
};

export default ProtectedRoutes;