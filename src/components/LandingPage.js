import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                fontFamily: 'Arial, sans-serif',
                backgroundColor: '#f2f6fc',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
            }}
        >
            {/* Header Section */}
            <header
                style={{
                    textAlign: 'center',
                    marginBottom: '30px',
                }}
            >
                <h1
                    style={{
                        fontSize: '2.5rem',
                        color: '#007BFF',
                        marginBottom: '10px',
                        fontWeight: 'bold',
                    }}
                >
                    Welcome to SHERM
                </h1>
                <p
                    style={{
                        fontSize: '1rem',
                        color: '#555',
                        lineHeight: '1.6',
                        maxWidth: '600px',
                        margin: '0 auto',
                    }}
                >
                    SHERM is a revolutionary Electronic Health Record Management System. It offers efficient data collection,
                    enhanced diagnosis, and seamless doctor-patient interaction. Our goal is to combat non-communicable
                    diseases through machine learning and advanced technology, improving healthcare for everyone.
                </p>
            </header>

            {/* Info Cards */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    marginBottom: '40px',
                    flexWrap: 'wrap',
                }}
            >
                <div
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        padding: '20px',
                        maxWidth: '300px',
                        textAlign: 'center',
                    }}
                >
                    <h3
                        style={{
                            color: '#007BFF',
                            fontSize: '1.2rem',
                            marginBottom: '10px',
                        }}
                    >
                        Advanced Analytics
                    </h3>
                    <p
                        style={{
                            fontSize: '0.9rem',
                            color: '#555',
                        }}
                    >
                        Leverage data-driven insights for accurate diagnosis and better treatment plans.
                    </p>
                </div>
                <div
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        padding: '20px',
                        maxWidth: '300px',
                        textAlign: 'center',
                    }}
                >
                    <h3
                        style={{
                            color: '#007BFF',
                            fontSize: '1.2rem',
                            marginBottom: '10px',
                        }}
                    >
                        Secure Records
                    </h3>
                    <p
                        style={{
                            fontSize: '0.9rem',
                            color: '#555',
                        }}
                    >
                        Ensure patient confidentiality and secure storage of health records.
                    </p>
                </div>
                <div
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        padding: '20px',
                        maxWidth: '300px',
                        textAlign: 'center',
                    }}
                >
                    <h3
                        style={{
                            color: '#007BFF',
                            fontSize: '1.2rem',
                            marginBottom: '10px',
                        }}
                    >
                        For Everyone
                    </h3>
                    <p
                        style={{
                            fontSize: '0.9rem',
                            color: '#555',
                        }}
                    >
                        Inclusive design catering to differentially-abled individuals and diverse user needs.
                    </p>
                </div>
            </div>

            {/* Login Buttons */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '40px',
                }}
            >
                <div
                    style={{
                        textAlign: 'center',
                    }}
                >
                    <button
                        onClick={() => navigate('/patient-login')}
                        style={{
                            backgroundColor: '#007BFF',
                            color: '#fff',
                            padding: '15px 30px',
                            fontSize: '1.1rem',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            border: 'none',
                            marginBottom: '10px',
                        }}
                    >
                        Patient Login
                    </button>
                    <p style={{ fontSize: '0.9rem', color: '#555' }}>
                        Access personalized healthcare and diagnostics.
                    </p>
                </div>
                <div
                    style={{
                        textAlign: 'center',
                    }}
                >
                    <button
                        onClick={() => navigate('/doctor-login')}
                        style={{
                            backgroundColor: '#28A745',
                            color: '#fff',
                            padding: '15px 30px',
                            fontSize: '1.1rem',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            border: 'none',
                            marginBottom: '10px',
                        }}
                    >
                        Doctor Login
                    </button>
                    <p style={{ fontSize: '0.9rem', color: '#555' }}>
                        Manage patient records and view analytics.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
