import { useNavigate, useLocation } from 'react-router-dom';
import userStore from '../../stores/userStore';
import { useEffect } from 'react';

const UserProtectedRoute = ({ children }) => {
  const { checkLogin, isLogin } = userStore(state => ({
    checkLogin: state.checkLogin,
    isLogin: state.isLogin
  }));
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    checkLogin();
    const trimmedPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    const authPaths = ['', '/', '/user', '/user/signin', '/user/signup'];
    const publicPaths = ['/user/profile-public'];

    if (authPaths.includes(trimmedPath)) {
      if (isLogin) {
        navigate('/user/profile', { replace: true });
      }
    } else if (!publicPaths.includes(trimmedPath) && !isLogin) {
      navigate('/', { replace: true });
    }
  }, [checkLogin, isLogin, navigate, pathname]);

  return children;
};

export default UserProtectedRoute;