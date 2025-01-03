import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/login.css'; // Updated path
import { findUser } from '../../mockDatabase'; // Updated path
import { AuthContext } from '../../component/AuthContextProvider'; // Import the AuthContext

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const user = findUser(email, password);
    if (user) {
      setUser(user);
      navigate('/'); // Redirect to home page on successful login
    } else {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="form-title">Login</h2>
      <div className="social-login">
        <button className="social-button" onClick={() => { }}>
          <img src="https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?t=st=1735874189~exp=1735877789~hmac=bc83480df80e0284f82445a9b6438fae3e91b8b0217766c26fdd3a16775eb72c&w=740" alt="Google" className="social-icon" />
          Login with Google
        </button>
        <button className="social-button" onClick={() => { }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="social-icon" />
          Login with Apple
        </button>
      </div>
      <div className="separator">
        <span>or</span>
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="input-wrapper">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
          <i className="ri-mail-line"></i>
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
          <i className="ri-lock-line"></i>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="signup-link">
        <p>Don't have an account? <a href="/signup">Sign Up Here</a></p>
      </div>
    </div>
  );
};

export default Login;