import React from 'react';
import './KeyFeatures.css'; // Import the CSS file for styling

const KeyFeatures = () => {
    return (
        <div className="key-features">
            <h2>Key Features</h2>
            <div className="feature-box">
                <h3>Activity Tracking</h3>
                <ul>
                    <li>Steps, distance, and calorie count</li>
                    <li>Workout tracking (e.g., running, cycling, swimming, gym sessions)</li>
                </ul>
            </div>
            <div className="feature-box">
                <h3>Health Monitoring</h3>
                <ul>
                    <li>Heart rate</li>
                    <li>Sleep patterns</li>
                    <li>Blood oxygen levels (SpO2)</li>
                    <li>Stress and recovery levels</li>
                </ul>
            </div>
            <div className="feature-box">
                <h3>Nutrition Tracking</h3>
                <ul>
                    <li>Calorie intake</li>
                    <li>Macronutrient tracking (carbs, protein, fats)</li>
                    <li>Hydration reminders</li>
                </ul>
            </div>
            <div className="feature-box">
                <h3>Personal Goals and Progress</h3>
                <ul>
                    <li>Setting daily/weekly fitness goals</li>
                    <li>Progress charts and trends</li>
                    <li>Personalized fitness recommendations</li>
                </ul>
            </div>
            <div className="feature-box">
                <h3>Notifications and Alerts</h3>
                <ul>
                    <li>Sedentary reminders</li>
                    <li>Goal achievement notifications</li>
                    <li>Health alerts (e.g., irregular heart rate)</li>
                </ul>
            </div>
        </div>
    );
};

export default KeyFeatures;