import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PatientLogin = () => {
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const credentials = {
            email: 'patient1@example.com',
            password: 'patient123',
        };

        if (email === credentials.email && password === credentials.password) {
            setLoginError('');
            navigate('/file-uploader'); // Redirect to FileUploader on successful login
        } else {
            setLoginError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div
            style={{
                fontFamily: 'Arial, sans-serif',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f2f6fc',
            }}
        >
            <h1 style={{ color: '#007BFF', marginBottom: '20px' }}>Patient Login</h1>
            <form
                onSubmit={handleLogin}
                style={{
                    backgroundColor: '#fff',
                    padding: '30px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    width: '300px',
                }}
            >
                <div style={{ marginBottom: '15px' }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        style={{
                            width: '100%',
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            marginTop: '5px',
                        }}
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                        style={{
                            width: '100%',
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            marginTop: '5px',
                        }}
                    />
                </div>
                {loginError && (
                    <p style={{ color: 'red', textAlign: 'center' }}>{loginError}</p>
                )}
                <button
                    type="submit"
                    style={{
                        width: '100%',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        padding: '10px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default PatientLogin;
