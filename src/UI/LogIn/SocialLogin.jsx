import React from 'react';
import googleLogo from '../../assets/img/google-logo.png'; // Import the Google logo image

const SocialLogin = () => {
  return (
    <div className="social-login">
      <button className="social-button">
        <img src={googleLogo} alt="Google" className="social-icon" />
        Google
      </button>
      <button className="social-button">
        <img src="apple.svg" alt="Apple" className="social-icon" />
        Apple
      </button>
    </div>
  );
};

export default SocialLogin;