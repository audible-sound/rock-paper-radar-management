import { useNavigate, useLocation } from 'react-router-dom';
import userStore from '../../stores/userStore';
import { useEffect } from 'react'

const UserProtectedRoute = ({ children }) => {
  const checkLogin = userStore(state => state.checkLogin);
  const isLogin = userStore(state => state.isLogin);
  const navigate = useNavigate();
  const location = useLocation();
  let { pathname } = location;
  if (pathname[pathname.length - 1] === '/') {
    pathname = pathname.slice(0, -1);
  }
  useEffect(() => {
    checkLogin();
    const authPath = ['', '/', '/user', '/user/signin', '/user/signup'];
    if (authPath.includes(pathname)) {
      if (isLogin === true) {
        navigate('/user/profile', 'replace');
      }
    } else {
      if (isLogin === false) {
        navigate('/', 'replace');
      }
    }
  }, []);
  return children;
};

export default UserProtectedRoute;