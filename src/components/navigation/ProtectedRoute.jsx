import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children, requiredRole }) => {
  const isLoggedIn = Cookies.get('token') !== undefined;
  const userRole = Cookies.get('role');

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  if (requiredRole && userRole !== requiredRole && requiredRole !== "none") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
