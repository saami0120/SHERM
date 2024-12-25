import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const DashboardDisplay = () => {
    const location = useLocation();
    const analysis = location.state?.analysis;
    const [chartsData, setChartsData] = useState([]);

    useEffect(() => {
        if (analysis) {
            const parsedData = parseAnalysisBySectionsWithRanges(analysis);
            setChartsData(parsedData);
        }
    }, [analysis]);

    const parseAnalysisBySectionsWithRanges = (text) => {
        const sections = text.split(/\*\*(.*?)\*\*/g); // Split by headings wrapped in **
        const data = [];

        sections.forEach((section, index) => {
            const heading = section.trim();
            const content = sections[index + 1]?.trim(); // The content following the heading

            if (heading && content) {
                if (heading.includes('Hematology')) {
                    data.push({
                        title: 'Hematology',
                        chartData: {
                            labels: ['Hemoglobin', 'RBC Count', 'Platelets'],
                            datasets: [
                                {
                                    label: 'Observed Values',
                                    data: [13.5, 4.8, 250000], // Example observed values
                                    backgroundColor: '#36A2EB',
                                },
                                {
                                    label: 'Normal Range (Max)',
                                    data: [16, 5.4, 450000], // Example max normal values
                                    backgroundColor: '#FFCE56',
                                },
                                {
                                    label: 'Normal Range (Min)',
                                    data: [12, 4.2, 150000], // Example min normal values
                                    backgroundColor: '#4BC0C0',
                                },
                            ],
                        },
                    });
                } else if (heading.includes('Biochemistry')) {
                    data.push({
                        title: 'Biochemistry',
                        chartData: {
                            labels: ['Glucose', 'Calcium', 'Iron'],
                            datasets: [
                                {
                                    label: 'Observed Values',
                                    data: [85, 8.2, 120], // Example observed values
                                    backgroundColor: '#FF6384',
                                },
                                {
                                    label: 'Normal Range (Max)',
                                    data: [105, 10.2, 150], // Example max normal values
                                    backgroundColor: '#FFCE56',
                                },
                                {
                                    label: 'Normal Range (Min)',
                                    data: [70, 8.4, 50], // Example min normal values
                                    backgroundColor: '#4BC0C0',
                                },
                            ],
                        },
                    });
                }
            }
        });

        return data;
    };

    if (!analysis) {
        return (
            <p
                style={{
                    textAlign: 'center',
                    marginTop: '20px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#6c757d',
                }}
            >
                No data available to generate the dashboard.
            </p>
        );
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                backgroundColor: '#f2f6fc',
                minHeight: '100vh',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <h1
                style={{
                    marginBottom: '20px',
                    color: '#007BFF',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}
            >
                Medical Dashboard
            </h1>
            {chartsData.map((chart, index) => (
                <div
                    key={index}
                    style={{
                        marginBottom: '30px',
                        width: '80%',
                        maxWidth: '800px',
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        padding: '20px',
                    }}
                >
                    <h2
                        style={{
                            textAlign: 'center',
                            marginBottom: '20px',
                            color: '#3D52A0',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                        }}
                    >
                        {chart.title}
                    </h2>
                    <Bar
                        data={chart.chartData}
                        options={{
                            responsive: true,
                            plugins: {
                                title: {
                                    display: true,
                                    text: `${chart.title} Observations vs. Normal Ranges`,
                                    font: {
                                        size: 18,
                                        family: 'Arial, sans-serif',
                                    },
                                    color: '#007BFF',
                                },
                                legend: {
                                    position: 'top',
                                    labels: {
                                        font: {
                                            family: 'Arial, sans-serif',
                                        },
                                    },
                                },
                            },
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default DashboardDisplay;
