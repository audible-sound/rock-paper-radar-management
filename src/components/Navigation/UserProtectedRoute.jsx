import { useNavigate, useLocation } from 'react-router-dom';
import userStore from '../../stores/userStore';
import { useEffect, useState } from 'react'

const UserProtectedRoute = ({ children }) => {
  const checkLogin = userStore(state => state.checkLogin);
  const isLogin = userStore(state => state.isLogin);
  const navigate = useNavigate();
  checkLogin();
  const location = useLocation();
  let { pathname } = location;
  if (pathname[pathname.length - 1] === '/') {
    pathname = pathname.slice(0, -1);
  }
  const [pathnameState] = useState(pathname);
  useEffect(() => {
    const authPath = ['/', '/user', '/user/signin'];
    if (authPath.includes(pathnameState)) {
      if (isLogin) {
        navigate('/user/profile', 'replace');
      }
    } else {
      if (isLogin === false) {
        navigate('/', 'replace')
        console.log("something wrong");
      }
    }
    }, [pathnameState, isLogin]);
  return children;
};

export default UserProtectedRoute;