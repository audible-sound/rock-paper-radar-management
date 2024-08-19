import { useNavigate, useLocation } from 'react-router-dom';
import staffStore from '../../stores/staffStore';
import { useEffect, useState } from 'react';
import LoadingSpinner from "../ui/LoadingSpinner";

const EmployeeProtectedRoute = ({ children }) => {
  const { checkLogin, isLogin } = staffStore(state => ({
    checkLogin: state.checkLogin,
    isLogin: state.isLogin
  }));
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true);
      await checkLogin();
      const trimmedPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
      const authPaths = ['', '/', '/admin', '/staff', '/admin/signin', '/admin/signup'];
      const publicPaths = ['/admin/profile-public', '/staff/profile-public'];

      if (authPaths.includes(trimmedPath)) {
        if (isLogin) {
          navigate('/admin/profile', { replace: true });
        }
      } else if (!publicPaths.includes(trimmedPath) && !isLogin) {
        navigate('/', { replace: true });
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [checkLogin, isLogin, navigate, pathname]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return children;
};

export default EmployeeProtectedRoute;