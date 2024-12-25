import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FileUploader from './components/FileUploader';
import AnalysisDisplay from './components/AnalysisDisplay';
import DashboardDisplay from './components/DashboardDisplay';
import LandingPage from './components/LandingPage';
import PatientLogin from './components/PatientLogin';
import DoctorSignIn from './components/DoctorSignIn';
import DoctorDashboard from './components/DoctorDashboard';

const App = () => {
    const [analysis, setAnalysis] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
    const [userName, setUserName] = useState(''); // Store logged-in user name
    const [loginError, setLoginError] = useState(''); // Store login errors

    // Handle successful analysis
    const handleAnalysisComplete = (data) => {
        setAnalysis(data);
        localStorage.setItem('medicalAnalysis', JSON.stringify(data));
    };

    // Patient Login Credentials
const patientCredentials = [
    {
        email: 'patient1@example.com',
        password: 'patient123',
        userName: 'John Doe',
    },
    {
        email: 'patient2@example.com',
        password: 'patient456',
        userName: 'Jane Smith',
    },
];

// Doctor Login Credentials
const doctorCredentials = [
    {
        doctorName: 'Dr. John Doe',
        employeeId: 'D12345',
        medicalRegNo: 'MED987654',
        departmentName: 'Cardiology',
    },
    {
        doctorName: 'Dr. Emily Stone',
        employeeId: 'D67890',
        medicalRegNo: 'MED123456',
        departmentName: 'Neurology',
    },
];


    // Handle Patient Login
    const handlePatientLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
    
        // Find the patient in the credentials
        const patient = patientCredentials.find(
            (p) => p.email === email && p.password === password
        );
    
        if (patient) {
            setIsLoggedIn(true);
            setUserName(patient.userName); // Dynamically set the username
            setLoginError('');
            window.location.href = '/file-uploader'; // Redirect to File Uploader
        } else {
            setLoginError('Invalid email or password. Please try again.');
        }
    };
    

    // Handle Doctor Login
    const handleDoctorLogin = (e) => {
        e.preventDefault();
        const doctorName = e.target.doctorName.value;
        const employeeId = e.target.employeeId.value;
        const medicalRegNo = e.target.medicalRegNo.value;
        const departmentName = e.target.departmentName.value;
    
        // Find the doctor in the credentials
        const doctor = doctorCredentials.find(
            (d) =>
                d.doctorName === doctorName &&
                d.employeeId === employeeId &&
                d.medicalRegNo === medicalRegNo &&
                d.departmentName === departmentName
        );
    
        if (doctor) {
            setIsLoggedIn(true);
            setUserName(doctor.doctorName); // Dynamically set the username
            setLoginError('');
            window.location.href = '/doctor-dashboard'; // Redirect to Doctor Dashboard
        } else {
            setLoginError('Invalid credentials. Please try again.');
        }
    };
    

    // Logout functionality
    const handleLogout = () => {
        setIsLoggedIn(false);
        setAnalysis(null);
        setUserName('');
        window.location.href = '/'; // Redirect to Landing Page
    };

    return (
        <Router>
            <Routes>
                {/* Landing Page */}
                <Route path="/" element={<LandingPage />} />

                {/* Patient Login */}
                <Route
                    path="/patient-login"
                    element={
                        <PatientLogin onLogin={handlePatientLogin} loginError={loginError} />
                    }
                />

{/* File Uploader */}
<Route
    path="/file-uploader"
    element={
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <header
                style={{
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    padding: '10px 0',
                    textAlign: 'center',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h1>Welcome to SHERM, {userName || 'User'}</h1> {/* Default to 'Guest' if userName is empty */}
                <button
                    onClick={handleLogout}
                    style={{
                        backgroundColor: '#fff',
                        color: '#007BFF',
                        border: '1px solid #007BFF',
                        padding: '5px 10px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        position: 'absolute',
                        right: '20px',
                        top: '10px',
                    }}
                >
                    Logout
                </button>
            </header>
            <FileUploader 
                onAnalysisComplete={handleAnalysisComplete} 
                userName={userName} 
            />
            {analysis && (
                <button
                    style={{
                        backgroundColor: '#28A745',
                        color: '#fff',
                        padding: '10px 20px',
                        margin: '20px auto',
                        display: 'block',
                        borderRadius: '5px',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                    onClick={() => (window.location.href = '/dashboard')}
                >
                    View Dashboard
                </button>
            )}
            <AnalysisDisplay analysis={analysis} />
            <footer
                style={{
                    backgroundColor: '#f8f9fa',
                    color: '#212529',
                    textAlign: 'center',
                    padding: '10px 0',
                    marginTop: '20px',
                }}
            >
                © 2024 Medical Diagnosis App. All rights reserved.
            </footer>
        </div>
    }
/>


                {/* Dynamic Dashboard */}
                <Route path="/dashboard" element={<DashboardDisplay />} />

                {/* Doctor Login */}
                <Route
                    path="/doctor-login"
                    element={
                        <DoctorSignIn onLogin={handleDoctorLogin} loginError={loginError} />
                    }
                />

                {/* Doctor Dashboard */}
                <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
