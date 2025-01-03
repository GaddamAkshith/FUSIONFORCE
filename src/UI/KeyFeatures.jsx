import React from 'react';
import '../styles/KeyFeatures.css'; // Import the CSS file for styling
const googleMapsUrl = "https://www.google.com/maps/place/PU+Fitness+GYM/@22.2899973,73.3289468,15z"; // Link to the location
const KeyFeatures = () => {
    return (
        <div className="key-features">
            <h2>Key Features</h2>
            <div className="feature-box">
                <img src="https://img.freepik.com/premium-vector/fitness-tracker-with-stylish-design-that-motivates-you-stay-active_507704-15818.jpg?w=740" alt="Activity Tracking" className="feature-image" />
                <h3>Activity Tracking</h3>
                <ul>
                    <li>Steps, distance, and calorie count</li>
                    <li>Workout tracking (e.g., running, cycling, swimming, gym sessions)</li>
                </ul>
            </div>
            <div className="feature-box">
                <img src="https://img.freepik.com/free-vector/heart-rate-smartwatch-portable-pulse-tracker-wrist-clock-watch-with-touchscreen-healthcare-app-fitness-assistant-gadget-workout-vector-isolated-concept-metaphor-illustration_335657-4307.jpg?t=st=1735874013~exp=1735877613~hmac=d1a9cb6af887bf936bfc9f69314d8e6c7386cbd4ae56fce36d22c26a14f02711&w=740" alt="Health Monitoring" className="feature-image" />
                <h3>Health Monitoring</h3>
                <ul>
                    <li>Heart rate</li>
                    <li>Sleep patterns</li>
                    <li>Blood oxygen levels (SpO2)</li>
                    <li>Stress and recovery levels</li>
                </ul>
            </div>
            <div className="feature-box">
                <img src="https://img.freepik.com/free-vector/healthy-eating-colored-concept-with-round-icon-set-combined-around-smartphone-female-hands_98292-7641.jpg?t=st=1735874071~exp=1735877671~hmac=c90f897231e5ac94776d0ec15462e02417766c3da4b2f8465d2699d8250c33b2&w=740" alt="Nutrition Tracking" className="feature-image" />
                <h3>Nutrition Tracking</h3>
                <ul>
                    <li>Calorie intake</li>
                    <li>Macronutrient tracking (carbs, protein, fats)</li>
                    <li>Hydration reminders</li>
                </ul>
            </div>
            <div className="feature-box">
                <img src="https://img.freepik.com/free-vector/ambition-abstract-concept-illustration-business-ambition-determination-setting-big-goal-making-fast-career-self-confident-getting-what-you-want-desire-success_335657-33.jpg?t=st=1735874129~exp=1735877729~hmac=de16a727f6706293b446613870423b6c39813700ecefe0da33e87c83d2a2dbde&w=740" alt="Personal Goals and Progress" className="feature-image" />
                <h3>Personal Goals and Progress</h3>
                <ul>
                    <li>Setting daily/weekly fitness goals</li>
                    <li>Progress charts and trends</li>
                    <li>Personalized fitness recommendations</li>
                </ul>
            </div>
            <div className="feature-box">
                <img src="https://img.freepik.com/free-vector/alert-concept-illustration_114360-238.jpg?t=st=1735874210~exp=1735877810~hmac=14bad18f2e4ebb0535944a6d2f791473a0e4088a7f252eea43c63434ca1f17cc&w=740" alt="Notifications and Alerts" className="feature-image" />
                <h3>Notifications and Alerts</h3>
                <ul>
                    <li>Sedentary reminders</li>
                    <li>Goal achievement notifications</li>
                    <li>Health alerts (e.g., irregular heart rate)</li>
                </ul>
            </div>
            <div className="feature-box">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29533.463485836128!2d73.32894681083984!3d22.28999730000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fda23fd4584a7%3A0xe131d20a9744cfe3!2sPU%20Fitness%20GYM!5e0!3m2!1sen!2sin!4v1735867664358!5m2!1sen!2sin" 
                width="600" 
                height="150" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <h3>Notifications and Alerts</h3>
            <ul>
                <li>Sedentary reminders</li>
                <li>Goal achievement notifications</li>
                <li>Health alerts (e.g., irregular heart rate)</li>
            </ul>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <button className="location-button">View Location</button>
            </a>
        </div>
        </div>
    );
};

export default KeyFeatures;