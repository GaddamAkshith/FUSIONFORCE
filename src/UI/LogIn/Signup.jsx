import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/login.css'; // Assuming the same CSS file is used
import { addUser } from '../../mockDatabase'; // Updated path

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Add user to the mock database
        addUser({ name, email, password });
        navigate('/login');
    };

    return (
        <div className="login-container">
            <h2 className="form-title">Sign Up</h2>
            <form className="login-form" onSubmit={handleSignup}>
                <div className="input-wrapper">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="input-field"
                    />
                    <i className="ri-user-line"></i>
                </div>
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
                <div className="input-wrapper">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="input-field"
                    />
                    <i className="ri-lock-line"></i>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" className="login-button">Sign Up</button>
            </form>
            <div className="signup-link">
                <p>Already have an account? <a href="/login">Login Here</a></p>
            </div>
        </div>
    );
};

export default Signup;