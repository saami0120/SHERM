const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors'); // Import CORS

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Hardcoded credentials for patients
const patients = [
    { email: 'patient1@example.com', password: 'patient123', name: 'John Doe' },
    { email: 'patient2@example.com', password: 'password456', name: 'Jane Smith' },
];

// GEMINI API Configuration
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';
const GEMINI_API_KEY = 'AIzaSyDa_sxDhZW3Hg0pYZqZ6uTvIPGzjaxggiQ';

// 1. Patient Login Endpoint
app.post('/api/patient/login', (req, res) => {
    const { email, password } = req.body;

    // Find the patient in the hardcoded array
    const patient = patients.find((p) => p.email === email && p.password === password);

    if (patient) {
        res.json({ success: true, name: patient.name });
    } else {
        res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
});

// 2. AI Analysis Endpoint
app.post('/api/analyze', async (req, res) => {
    const { text } = req.body;

    const refinedText = `This is the raw text that has been extracted from a medical report. Go through the text and analyze the findings. Structure the response neatly into sections with the following format:
- Each section should have a clear heading.
- Add blank lines between sections for readability.
- Use bullet points where appropriate.
- Finally, in a separate heading, mention standard practices/treatments advised by referencing appropriate sources.
Here is the raw data: ${text}`;

    if (!text) {
        return res.status(400).send('No text provided.');
    }

    try {
        const response = await axios.post(
            `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
            {
                contents: [
                    {
                        parts: [
                            {
                                text: refinedText,
                            },
                        ],
                    },
                ],
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        const analysis = response.data.candidates[0]?.content?.parts[0]?.text;
        res.json({ analysis });
    } catch (error) {
        console.error('Error analyzing text:', error.response?.data || error.message);
        res.status(500).send('Error analyzing text.');
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
