import React, { useState } from 'react';
import axios from 'axios';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
import { useNavigate } from 'react-router-dom'; // Import navigate

pdfjsLib.GlobalWorkerOptions.workerSrc = `${window.location.origin}/pdf.worker.js`;

const FileUploader = ({ onAnalysisComplete, userName }) => { // Added userName prop
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [analysisData, setAnalysisData] = useState(null); // Store analysis data
    const navigate = useNavigate(); // Initialize navigate

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setError(null);
    };

    const extractTextFromPDF = async (file) => {
        const fileReader = new FileReader();
        return new Promise((resolve, reject) => {
            fileReader.onload = async () => {
                try {
                    const typedArray = new Uint8Array(fileReader.result);
                    const pdf = await pdfjsLib.getDocument(typedArray).promise;

                    let text = '';
                    for (let i = 0; i < pdf.numPages; i++) {
                        const page = await pdf.getPage(i + 1);
                        const content = await page.getTextContent();
                        text += content.items.map((item) => item.str).join(' ');
                    }

                    resolve(text);
                } catch (err) {
                    reject(err);
                }
            };

            fileReader.onerror = (err) => reject(err);
            fileReader.readAsArrayBuffer(file);
        });
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please upload a PDF file.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const text = await extractTextFromPDF(file);
            console.log('Extracted text from PDF:', text);

            const response = await axios.post('http://localhost:5000/api/analyze', { text });
            console.log('Response from backend:', response.data);

            const analysis = response.data.analysis;
            setAnalysisData(analysis); // Set analysis data locally
            onAnalysisComplete(analysis); // Send data to parent
            alert('Analysis Generated, please scroll down'); // Alert after analysis completion
        } catch (err) {
            console.error('Error during upload or analysis:', err);
            setError('Failed to analyze the document. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundColor: '#f4f6f8',
                padding: '20px',
            }}
        >
            {/* Header */}
            <h1
                style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#3D52A0',
                    textAlign: 'center',
                    marginBottom: '20px',
                }}
            >
                Medical Dashboard and Diagnosis
            </h1>

            {/* File Input */}
            <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                style={{
                    padding: '12px',
                    marginBottom: '20px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    width: '50%',
                }}
            />

            {/* Buttons */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    width: '50%',
                    marginTop: '10px',
                }}
            >
                <button
                    onClick={handleUpload}
                    disabled={loading}
                    style={{
                        backgroundColor: loading ? '#ccc' : '#007BFF',
                        color: '#fff',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        fontSize: '1rem',
                        marginRight: '10px',
                    }}
                >
                    {loading ? 'Uploading...' : 'Upload and Analyze'}
                </button>
                {analysisData && (
                    <button
                        onClick={() => navigate('/dashboard', { state: { analysis: analysisData } })}
                        style={{
                            backgroundColor: '#28A745',
                            color: '#fff',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '1rem',
                        }}
                    >
                        View Dashboard
                    </button>
                )}
            </div>

            {/* Error Message */}
            {error && (
                <div style={{ color: 'red', marginTop: '20px', textAlign: 'center' }}>
                    {error}
                </div>
            )}
        </div>
    );
};

export default FileUploader;
