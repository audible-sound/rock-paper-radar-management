import { Link } from 'react-router-dom';

const LandingHeader = () => {
  return (
    <header className="w-full bg-white border-solid border-b-2 p-4 flex justify-between items-center">
      <span className="text-3xl font-bold text-blue-600">Rock Paper Radar</span>
      <Link to="/user/signin" className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
        Login
      </Link>
    </header>
  );
};

export default LandingHeader;