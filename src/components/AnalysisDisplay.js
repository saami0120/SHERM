import React from 'react';

const AnalysisDisplay = ({ analysis }) => {
    if (!analysis) {
        return <p style={{ textAlign: 'center', color: '#555', fontSize: '16px' }}>
            No analysis available yet.
        </p>;
    }

    // Parse and format the analysis into sections and bullet points
    const formatAnalysis = (text) => {
        const sections = text.split(/<br>|\\n|\\r/).filter(Boolean); // Split into sections

        return sections.map((section, index) => {
            // Extract the section title and content
            const [title, ...contentLines] = section.split(':');
            const content = contentLines.join(':').trim();

            // Split content into bullet points based on '*' markers
            const bulletPoints = content.split('*').filter(Boolean);

            return (
                <div
                    key={`section-${index}`}
                    style={{
                        backgroundColor: '#f0f8ff', // Light blue background
                        border: '1px solid #a1c4fd', // Light border
                        borderRadius: '8px',
                        marginBottom: '20px',
                        padding: '20px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    {/* Section Title */}
                    <h3 style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: '#0056b3',
                        fontSize: '20px',
                        marginBottom: '10px',
                    }}>
                        {title.trim()}
                    </h3>

                    {/* Bullet Points */}
                    <ul style={{
                        marginLeft: '20px',
                        color: '#333',
                        lineHeight: '1.6',
                        fontSize: '16px',
                    }}>
                        {bulletPoints.map((point, idx) => (
                            <li key={`bullet-${index}-${idx}`} style={{ marginBottom: '8px' }}>
                                {point.trim()}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        });
    };

    return (
        <div style={{
            margin: '20px auto',
            padding: '20px',
            maxWidth: '800px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}>
            <h2 style={{
                textAlign: 'center',
                fontSize: '26px',
                fontWeight: 'bold',
                color: '#003366',
                marginBottom: '20px',
            }}>
                Analysis Result
            </h2>
            <div>{formatAnalysis(analysis)}</div>
        </div>
    );
};

export default AnalysisDisplay;
