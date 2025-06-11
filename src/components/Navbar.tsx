import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 sticky top-0 z-10">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link to="/" className="hover:text-yellow-400 transition duration-300">Home</Link>
        </li>
        <li>
          <Link to="/footprint" className="hover:text-yellow-400 transition duration-300">Footprint Program</Link>
        </li>
        <li>
          <Link to="/crypto" className="hover:text-yellow-400 transition duration-300">Crypto Market Mastery</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 