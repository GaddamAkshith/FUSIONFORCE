import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; // Import the CSS file for styling
import { AuthContext } from './AuthContextProvider'; // Import the AuthContext

const nav__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/programs",
    display: "Programs",
  },
  {
    path: "/membership",
    display: "Membership",
  },
  {
    path: "/track",
    display: "Track your fitness",
  },
];

const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list nav__list--left">
          {nav__links.map((link, index) => (
            <li key={index} className="nav__item">
              <Link to={link.path} className="nav__link">{link.display}</Link>
            </li>
          ))}
        </ul>
        <ul className="nav__list nav__list--right">
          {user ? (
            <>
              <li className="nav__item">
                <span className="nav__link">Welcome, {user.name}</span>
              </li>
              <li className="nav__item">
                <button onClick={handleLogout} className="nav__link">Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav__item">
                <Link to="/login" className="nav__link">Login</Link>
              </li>
              <li className="nav__item">
                <Link to="/signup" className="nav__link">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;