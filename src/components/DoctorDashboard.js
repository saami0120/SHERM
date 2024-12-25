import React from 'react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DoctorDashboard = () => {
    const appointmentsData = {
        labels: ['Open Appointments', 'Completed Appointments'],
        datasets: [
            {
                data: [35, 65],
                backgroundColor: ['#36A2EB', '#4BC0C0'],
                hoverBackgroundColor: ['#36A2EB', '#4BC0C0'],
            },
        ],
    };

    const bedData = {
        labels: ['Available Beds', 'Occupied Beds'],
        datasets: [
            {
                data: [120, 80],
                backgroundColor: ['#FF6384', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#FFCE56'],
            },
        ],
    };

    const roundsData = {
        labels: ['General Rounds', 'Special Rounds', 'Surgeries'],
        datasets: [
            {
                label: 'Schedules',
                data: [15, 10, 5],
                backgroundColor: ['#FF9F40', '#36A2EB', '#FF6384'],
            },
        ],
    };

    return (
        <div
            style={{
                fontFamily: 'Arial, sans-serif',
                padding: '20px',
                backgroundColor: '#f9f9f9',
                minHeight: '100vh',
            }}
        >
            <header
                style={{
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    padding: '10px',
                    textAlign: 'center',
                    marginBottom: '20px',
                }}
            >
                <h1>Doctor's Dashboard</h1>
            </header>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                    marginBottom: '20px',
                }}
            >
                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                    <h2 style={{ textAlign: 'center', color: '#3D52A0' }}>Appointments</h2>
                    <Pie data={appointmentsData} />
                </div>

                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                    <h2 style={{ textAlign: 'center', color: '#3D52A0' }}>Bed Availability</h2>
                    <Pie data={bedData} />
                </div>

                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                    <h2 style={{ textAlign: 'center', color: '#3D52A0' }}>Schedules</h2>
                    <Bar
                        data={roundsData}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'top',
                                },
                                title: {
                                    display: true,
                                    text: 'Doctor Schedules Overview',
                                },
                            },
                        }}
                    />
                </div>
            </div>

            <div
                style={{
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h2 style={{ textAlign: 'center', color: '#3D52A0', marginBottom: '20px' }}>Monthly Schedule</h2>
                <Calendar />
            </div>
        </div>
    );
};

export default DoctorDashboard;
