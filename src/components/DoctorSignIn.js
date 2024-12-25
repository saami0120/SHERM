import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const DoctorSignIn = () => {
    const [signInError, setSignInError] = useState(''); // Track sign-in errors
    const navigate = useNavigate(); // Initialize navigate

    const handleSignIn = (e) => {
        e.preventDefault();
        const doctorName = e.target.doctorName.value;
        const employeeId = e.target.employeeId.value;
        const medicalRegNo = e.target.medicalRegNo.value;
        const departmentName = e.target.departmentName.value;

        // Hardcoded credentials for simplicity
        const validCredentials = {
            doctorName: 'Dr. John Doe',
            employeeId: 'D12345',
            medicalRegNo: 'MED987654',
            departmentName: 'Cardiology',
        };

        if (
            doctorName === validCredentials.doctorName &&
            employeeId === validCredentials.employeeId &&
            medicalRegNo === validCredentials.medicalRegNo &&
            departmentName === validCredentials.departmentName
        ) {
            setSignInError('');
            alert('Sign-in successful! Redirecting to the doctor dashboard...');
            navigate('/doctor-dashboard'); // Redirect to doctor dashboard
        } else {
            setSignInError('Invalid credentials. Please try again.');
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
            <h1 style={{ color: '#007BFF', marginBottom: '20px' }}>Doctor Sign In</h1>
            <form
                onSubmit={handleSignIn}
                style={{
                    backgroundColor: '#fff',
                    padding: '30px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    width: '300px',
                }}
            >
                <div style={{ marginBottom: '15px' }}>
                    <label>Doctor Name:</label>
                    <input
                        type="text"
                        name="doctorName"
                        placeholder="Enter your name"
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
                <div style={{ marginBottom: '15px' }}>
                    <label>Employee ID:</label>
                    <input
                        type="text"
                        name="employeeId"
                        placeholder="Enter your employee ID"
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
                <div style={{ marginBottom: '15px' }}>
                    <label>Medical Registration No:</label>
                    <input
                        type="text"
                        name="medicalRegNo"
                        placeholder="Enter your registration number"
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
                    <label>Department Name:</label>
                    <input
                        type="text"
                        name="departmentName"
                        placeholder="Enter your department"
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
                {signInError && (
                    <p style={{ color: 'red', textAlign: 'center' }}>{signInError}</p>
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
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default DoctorSignIn;
