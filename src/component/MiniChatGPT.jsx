import React, { useState } from 'react';
import { Heart, MessageCircle } from "lucide-react";
import '../styles/MiniChatGPT.css'; // Import the CSS file for styling

const MiniChatGPT = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [isThinking, setIsThinking] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleSendMessage = () => {
        setMessages([...messages, { text: newMessage, isUser: true }]);
        setNewMessage('');
        setIsThinking(true);

        const userMessage = newMessage.toLowerCase();

        // Simulate AI response
        setTimeout(() => {
            setIsThinking(false);
            if (userMessage.includes('hello') || userMessage.includes('hi')) {
                setMessages(prevMessages => [...prevMessages, { text: 'Hello! How can I assist you with your health and fitness goals today?', isUser: false }]);
            } else if (userMessage.includes('what is a good workout routine')) {
                setMessages(prevMessages => [...prevMessages, { text: 'A good workout routine typically includes a mix of cardio, strength training, and flexibility exercises. I can help you create a personalized routine based on your goals and fitness level.', isUser: false }]);
            } else if (userMessage.includes('how can i lose weight')) {
                setMessages(prevMessages => [...prevMessages, { text: 'Losing weight typically involves a combination of a healthy diet and regular exercise. I can provide you with tips and recommendations on how to create a calorie deficit and increase your physical activity.', isUser: false }]);
            } else if (userMessage.includes('what are the benefits of meditation')) {
                setMessages(prevMessages => [...prevMessages, { text: 'Meditation has numerous benefits, including reducing stress and anxiety, improving sleep, and increasing focus and concentration. I can provide you with guided meditation exercises and tips on how to incorporate meditation into your daily routine.', isUser: false }]);
            } else if (userMessage.includes('how can i improve my mental health')) {
                setMessages(prevMessages => [...prevMessages, { text: 'Improving mental health typically involves a combination of self-care, social support, and professional help. I can provide you with resources and recommendations on how to prioritize your mental health and well-being.', isUser: false }]);
            } else if (userMessage.includes('what is a healthy diet')) {
                setMessages(prevMessages => [...prevMessages, { text: 'A healthy diet typically includes a variety of whole, unprocessed foods such as fruits, vegetables, whole grains, lean proteins, and healthy fats. I can provide you with personalized nutrition recommendations and meal planning tips.', isUser: false }]);
            } else if (userMessage.includes('how can i increase my energy levels')) {
                setMessages(prevMessages => [...prevMessages, { text: 'Increasing energy levels typically involves a combination of regular exercise, healthy eating, and sufficient sleep. I can provide you with tips and recommendations on how to boost your energy levels and reduce fatigue.', isUser: false }]);
            } else if (userMessage.includes('what are the benefits of yoga')) {
                setMessages(prevMessages => [...prevMessages, { text: 'Yoga has numerous benefits, including improving flexibility and balance, reducing stress and anxiety, and increasing strength and endurance. I can provide you with yoga exercises and tips on how to incorporate yoga into your daily routine.', isUser: false }]);
            }else if (userMessage.includes('what is a good workout routine')) {
                setMessages([...messages, { text: 'A good workout routine typically includes a mix of cardio, strength training, and flexibility exercises. I can help you create a personalized routine based on your goals and fitness level.', isUser: false }]);
              } else if (userMessage.includes('how can i lose weight')) {
                setMessages([...messages, { text: 'Losing weight typically involves a combination of a healthy diet and regular exercise. I can provide you with tips and recommendations on how to create a calorie deficit and increase your physical activity.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of meditation')) {
                setMessages([...messages, { text: 'Meditation has numerous benefits, including reducing stress and anxiety, improving sleep, and increasing focus and concentration. I can provide you with guided meditation exercises and tips on how to incorporate meditation into your daily routine.', isUser: false }]);
              } else if (userMessage.includes('how can i improve my mental health')) {
                setMessages([...messages, { text: 'Improving mental health typically involves a combination of self-care, social support, and professional help. I can provide you with resources and recommendations on how to prioritize your mental health and well-being.', isUser: false }]);
              } else if (userMessage.includes('what is a healthy diet')) {
                setMessages([...messages, { text: 'A healthy diet typically includes a variety of whole, unprocessed foods such as fruits, vegetables, whole grains, lean proteins, and healthy fats. I can provide you with personalized nutrition recommendations and meal planning tips.', isUser: false }]);
              } else if (userMessage.includes('how can i increase my energy levels')) {
                setMessages([...messages, { text: 'Increasing energy levels typically involves a combination of regular exercise, healthy eating, and sufficient sleep. I can provide you with tips and recommendations on how to boost your energy levels and reduce fatigue.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of yoga')) {
                setMessages([...messages, { text: 'Yoga has numerous benefits, including improving flexibility and balance, reducing stress and anxiety, and increasing strength and endurance. I can provide you with yoga exercises and tips on how to incorporate yoga into your daily routine.', isUser: false }]);
              } else if (userMessage.includes('how can i reduce stress')) {
                setMessages([...messages, { text: 'Reducing stress typically involves a combination of relaxation techniques, time management, and social support. I can provide you with tips and recommendations on how to manage stress and improve your overall well-being.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of walking')) {
                setMessages([...messages, { text: 'Walking has numerous benefits, including improving cardiovascular health, reducing stress and anxiety, and increasing energy levels. I can provide you with tips and recommendations on how to incorporate walking into your daily routine.', isUser: false }]);
              } else if (userMessage.includes('how can i improve my sleep')) {
                setMessages([...messages, { text: 'Improving sleep typically involves a combination of establishing a bedtime routine, creating a sleep-conducive environment, and avoiding stimulating activities before bedtime. I can provide you with tips and recommendations on how to improve your sleep quality.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of swimming')) {
                setMessages([...messages, { text: 'Swimming has numerous benefits, including improving cardiovascular health, reducing stress and anxiety, and increasing strength and endurance. I can provide you with tips and recommendations on how to incorporate swimming into your fitness routine.', isUser: false }]);
              } else if (userMessage.includes('how can i reduce muscle soreness')) {
                setMessages([...messages, { text: 'Reducing muscle soreness typically involves a combination of stretching, foam rolling, and proper nutrition. I can provide you with tips and recommendations on how to reduce muscle soreness and improve your overall recovery.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of running')) {
                setMessages([...messages, { text: 'Running has numerous benefits, including improving cardiovascular health, reducing stress and anxiety, and increasing energy levels. I can provide you with tips and recommendations on how to incorporate running into your fitness routine.', isUser: false }]);
              } else if (userMessage.includes('how can i improve my posture')) {
                setMessages([...messages, { text: 'Improving posture typically involves a combination of stretching, strengthening, and proper ergonomics. I can provide you with tips and recommendations on how to improve your posture and reduce back pain.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of cycling')) {
                setMessages([...messages, { text: 'Cycling has numerous benefits, including improving cardiovascular health, reducing stress and anxiety, and increasing energy levels. I can provide you with tips and recommendations on how to incorporate cycling into your fitness routine.', isUser: false }]);
              } else if (userMessage.includes('how can i reduce anxiety')) {
                setMessages([...messages, { text: 'Reducing anxiety typically involves a combination of relaxation techniques, time management, and social support. I can provide you with tips and recommendations on how to manage anxiety and improve your overall well-being.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of strength training')) {
                setMessages([...messages, { text: 'Strength training has numerous benefits, including improving muscle mass, bone density, and overall physical function. I can provide you with tips and recommendations on how to incorporate strength training into your fitness routine.', isUser: false }]);
              } else if (userMessage.includes('how can i improve my flexibility')) {
                setMessages([...messages, { text: 'Improving flexibility typically involves a combination of stretching, foam rolling, and proper nutrition. I can provide you with tips and recommendations on how to improve your flexibility and range of motion.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of high-intensity interval training')) {
                setMessages([...messages, { text: 'High-intensity interval training has numerous benefits, including improving cardiovascular health, reducing stress and anxiety, and increasing energy levels. I can provide you with tips and recommendations on how to incorporate high-intensity interval training into your fitness routine.', isUser: false }]);
              } else if (userMessage.includes('how can i reduce inflammation')) {
                setMessages([...messages, { text: 'Reducing inflammation typically involves a combination of proper nutrition, regular exercise, and stress management. I can provide you with tips and recommendations on how to reduce inflammation and improve your overall health.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of mindfulness')) {
                setMessages([...messages, { text: 'Mindfulness has numerous benefits, including reducing stress and anxiety, improving sleep, and increasing focus and concentration. I can provide you with tips and recommendations on how to incorporate mindfulness into your daily routine.', isUser: false }]);
              } else if (userMessage.includes('how can i improve my balance')) {
                setMessages([...messages, { text: 'Improving balance typically involves a combination of stretching, strengthening, and proper ergonomics. I can provide you with tips and recommendations on how to improve your balance and reduce your risk of falls.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of tai chi')) {
                setMessages([...messages, { text: 'Tai chi has numerous benefits, including improving balance, reducing stress and anxiety, and increasing energy levels. I can provide you with tips and recommendations on how to incorporate tai chi into your fitness routine.', isUser: false }]);
              } else if (userMessage.includes('how can i reduce my risk of chronic disease')) {
                setMessages([...messages, { text: 'Reducing your risk of chronic disease typically involves a combination of proper nutrition, regular exercise, and stress management. I can provide you with tips and recommendations on how to reduce your risk of chronic disease and improve your overall health.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of qigong')) {
                setMessages([...messages, { text: 'Qigong has numerous benefits, including improving balance, reducing stress and anxiety, and increasing energy levels. I can provide you with tips and recommendations on how to incorporate qigong into your fitness routine.', isUser: false }]);
              } else if (userMessage.includes('how can i improve my immune function')) {
                setMessages([...messages, { text: 'Improving immune function typically involves a combination of proper nutrition, regular exercise, and stress management. I can provide you with tips and recommendations on how to improve your immune function and reduce your risk of illness.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of massage therapy')) {
                setMessages([...messages, { text: 'Massage therapy has numerous benefits, including reducing stress and anxiety, improving sleep, and increasing energy levels. I can provide you with tips and recommendations on how to incorporate massage therapy into your self-care routine.', isUser: false }]);
              } else if (userMessage.includes('how can i reduce my risk of injury')) {
                setMessages([...messages, { text: 'Reducing your risk of injury typically involves a combination of proper warm-up and cool-down techniques, regular stretching and strengthening exercises, and proper ergonomics. I can provide you with tips and recommendations on how to reduce your risk of injury and improve your overall physical function.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of acupuncture')) {
                setMessages([...messages, { text: 'Acupuncture has numerous benefits, including reducing stress and anxiety, improving sleep, and increasing energy levels. I can provide you with tips and recommendations on how to incorporate acupuncture into your self-care routine.', isUser: false }]);
              } else if (userMessage.includes('how can i improve my overall health and wellness')) {
                setMessages([...messages, { text: 'Improving overall health and wellness typically involves a combination of proper nutrition, regular exercise, stress management, and adequate sleep. I can provide you with tips and recommendations on how to improve your overall health and wellness.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of aromatherapy')) {
                setMessages([...messages, { text: 'Aromatherapy has numerous benefits, including reducing stress and anxiety, improving sleep, and increasing energy levels. I can provide you with tips and recommendations on how to incorporate aromatherapy into your self-care routine.', isUser: false }]);
              } else if (userMessage.includes('how can i reduce my risk of depression')) {
                setMessages([...messages, { text: 'Reducing your risk of depression typically involves a combination of proper nutrition, regular exercise, stress management, and social support. I can provide you with tips and recommendations on how to reduce your risk of depression and improve your overall mental health.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of reflexology')) {
                setMessages([...messages, { text: 'Reflexology has numerous benefits, including reducing stress and anxiety, improving sleep, and increasing energy levels. I can provide you with tips and recommendations on how to incorporate reflexology into your self-care routine.', isUser: false }]);
              } else if (userMessage.includes('how can i improve my relationships')) {
                setMessages([...messages, { text: 'Improving relationships typically involves a combination of effective communication, active listening, and empathy. I can provide you with tips and recommendations on how to improve your relationships and build stronger connections with others.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of gratitude practice')) {
                setMessages([...messages, { text: 'Gratitude practice has numerous benefits, including reducing stress and anxiety, improving sleep, and increasing feelings of happiness and well-being. I can provide you with tips and recommendations on how to incorporate gratitude practice into your daily routine.', isUser: false }]);
              } else if (userMessage.includes('how can i reduce my risk of anxiety disorders')) {
                setMessages([...messages, { text: 'Reducing your risk of anxiety disorders typically involves a combination of proper nutrition, regular exercise, stress management, and social support. I can provide you with tips and recommendations on how to reduce your risk of anxiety disorders and improve your overall mental health.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of mindfulness meditation')) {
                setMessages([...messages, { text: 'Mindfulness meditation has numerous benefits, including reducing stress and anxiety, improving sleep, and increasing focus and concentration. I can provide you with tips and recommendations on how to incorporate mindfulness meditation into your daily routine.', isUser: false }]);
              } else if (userMessage.includes('how can i improve my self-esteem')) {
                setMessages([...messages, { text: 'Improving self-esteem typically involves a combination of positive self-talk, self-care, and social support. I can provide you with tips and recommendations on how to improve your self-esteem and build a more positive self-image.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of yoga nidra')) {
                setMessages([...messages, { text: 'Yoga nidra has numerous benefits, including reducing stress and anxiety, improving sleep, and increasing feelings of relaxation and calmness. I can provide you with tips and recommendations on how to incorporate yoga nidra into your self-care routine.', isUser: false }]);
              } else if (userMessage.includes('how can i reduce my risk of burnout')) {
                setMessages([...messages, { text: 'Reducing your risk of burnout typically involves a combination of proper self-care, stress management, and social support. I can provide you with tips and recommendations on how to reduce your risk of burnout and improve your overall well-being.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of progressive muscle relaxation')) {
                setMessages([...messages, { text: 'Progressive muscle relaxation has numerous benefits, including reducing stress and anxiety, improving sleep, and increasing feelings of relaxation and calmness. I can provide you with tips and recommendations on how to incorporate progressive muscle relaxation into your self-care routine.', isUser: false }]);
              } else if (userMessage.includes('how can i improve my resilience')) {
                setMessages([...messages, { text: 'Improving resilience typically involves a combination of proper self-care, stress management, and social support. I can provide you with tips and recommendations on how to improve your resilience and better cope with challenges and setbacks.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of visualization')) {
                setMessages([...messages, { text: 'Visualization has numerous benefits, including reducing stress and anxiety, improving sleep, and increasing feelings of relaxation and calmness. I can provide you with tips and recommendations on how to incorporate visualization into your self-care routine.', isUser: false }]);
              } else if (userMessage.includes('how can i reduce my risk of chronic stress')) {
                setMessages([...messages, { text: 'Reducing your risk of chronic stress typically involves a combination of proper self-care, stress management, and social support. I can provide you with tips and recommendations on how to reduce your risk of chronic stress and improve your overall well-being.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of affirmations')) {
                setMessages([...messages, { text: 'Affirmations have numerous benefits, including reducing stress and anxiety, improving sleep, and increasing feelings of happiness and well-being. I can provide you with tips and recommendations on how to incorporate affirmations into your daily routine.', isUser: false }]);
              } else if (userMessage.includes('how can i improve my emotional intelligence')) {
                setMessages([...messages, { text: 'Improving emotional intelligence typically involves a combination of self-awareness, self-regulation, and social skills. I can provide you with tips and recommendations on how to improve your emotional intelligence and better understand and manage your emotions.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of journaling')) {
                setMessages([...messages, { text: 'Journaling has numerous benefits, including reducing stress and anxiety, improving sleep, and increasing feelings of happiness and well-being. I can provide you with tips and recommendations on how to incorporate journaling into your self-care routine.', isUser: false }]);
              } else if (userMessage.includes('how can i reduce my risk of mental health disorders')) {
                setMessages([...messages, { text: 'Reducing your risk of mental health disorders typically involves a combination of proper self-care, stress management, and social support. I can provide you with tips and recommendations on how to reduce your risk of mental health disorders and improve your overall mental health.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of self-compassion')) {
                setMessages([...messages, { text: 'Self-compassion has numerous benefits, including reducing stress and anxiety, improving sleep, and increasing feelings of happiness and well-being. I can provide you with tips and recommendations on how to incorporate self-compassion into your daily routine.', isUser: false }]);
              } else if (userMessage.includes('how can i improve my relationships with others')) {
                setMessages([...messages, { text: 'Improving relationships with others typically involves a combination of effective communication, active listening, and empathy. I can provide you with tips and recommendations on how to improve your relationships with others and build stronger connections.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of forgiveness')) {
                setMessages([...messages, { text: 'Forgiveness has numerous benefits, including reducing stress and anxiety, improving sleep, and increasing feelings of happiness and well-being. I can provide you with tips and recommendations on how to incorporate forgiveness into your daily routine.', isUser: false }]);
              } else if (userMessage.includes('how can i reduce my risk of physical health problems')) {
                setMessages([...messages, { text: 'Reducing your risk of physical health problems typically involves a combination of proper nutrition, regular exercise, and stress management. I can provide you with tips and recommendations on how to reduce your risk of physical health problems and improve your overall physical health.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of self-care')) {
                setMessages([...messages, { text: 'Self-care has numerous benefits, including reducing stress and anxiety, improving sleep, and increasing feelings of happiness and well-being. I can provide you with tips and recommendations on how to incorporate self-care into your daily routine.', isUser: false }]);
              } else if (userMessage.includes('how can i improve my overall quality of life')) {
                setMessages([...messages, { text: 'Improving overall quality of life typically involves a combination of proper nutrition, regular exercise, stress management, and social support. I can provide you with tips and recommendations on how to improve your overall quality of life and increase your feelings of happiness and well-being.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of healthy habits')) {
                setMessages([...messages, { text: 'Healthy habits have numerous benefits, including reducing stress and anxiety, improving sleep, and increasing feelings of happiness and well-being. I can provide you with tips and recommendations on how to incorporate healthy habits into your daily routine.', isUser: false }]);
              } else if (userMessage.includes('how can i reduce my risk of illness')) {
                setMessages([...messages, { text: 'Reducing your risk of illness typically involves a combination of proper nutrition, regular exercise, and stress management. I can provide you with tips and recommendations on how to reduce your risk of illness and improve your overall health.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of wellness')) {
                setMessages([...messages, { text: 'Wellness has numerous benefits, including reducing stress and anxiety, improving sleep, and increasing feelings of happiness and well-being. I can provide you with tips and recommendations on how to incorporate wellness into your daily routine.', isUser: false }]);
              } else if (userMessage.includes('how can i improve my mental clarity')) {
                setMessages([...messages, { text: 'Improving mental clarity typically involves a combination of proper nutrition, regular exercise, and stress management. I can provide you with tips and recommendations on how to improve your mental clarity and increase your focus and concentration.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of self-awareness')) {
                setMessages([...messages, { text: 'Self-awareness has numerous benefits, including reducing stress and anxiety, improving sleep, and increasing feelings of happiness and well-being. I can provide you with tips and recommendations on how to incorporate self-awareness into your daily routine.', isUser: false }]);
              } else if (userMessage.includes('how can i reduce my risk of disease')) {
                setMessages([...messages, { text: 'Reducing your risk of disease typically involves a combination of proper nutrition, regular exercise, and stress management. I can provide you with tips and recommendations on how to reduce your risk of disease and improve your overall health.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of healthy relationships')) {
                setMessages([...messages, { text: 'Healthy relationships have numerous benefits, including reducing stress and anxiety, improving sleep, and increasing feelings of happiness and well-being. I can provide you with tips and recommendations on how to build and maintain healthy relationships.', isUser: false }]);
              } else if (userMessage.includes('how can i improve my overall health')) {
                setMessages([...messages, { text: 'Improving overall health typically involves a combination of proper nutrition, regular exercise, stress management, and social support. I can provide you with tips and recommendations on how to improve your overall health and increase your feelings of happiness and well-being.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of fitness')) {
                setMessages([...messages, { text: 'Fitness has numerous benefits, including reducing stress and anxiety, improving sleep, and increasing feelings of happiness and well-being. I can provide you with tips and recommendations on how to incorporate fitness into your daily routine.', isUser: false }]);
              } else if (userMessage.includes('how can i reduce my risk of health problems')) {
                setMessages([...messages, { text: 'Reducing your risk of health problems typically involves a combination of proper nutrition, regular exercise, and stress management. I can provide you with tips and recommendations on how to reduce your risk of health problems and improve your overall health.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of nutrition')) {
                setMessages([...messages, { text: 'Nutrition has numerous benefits, including reducing stress and anxiety, improving sleep, and increasing feelings of happiness and well-being. I can provide you with tips and recommendations on how to incorporate healthy nutrition into your daily routine.', isUser: false }]);
              } else if (userMessage.includes('how can i improve my mental health')) {
                setMessages([...messages, { text: 'Improving mental health typically involves a combination of proper nutrition, regular exercise, stress management, and social support. I can provide you with tips and recommendations on how to improve your mental health and increase your feelings of happiness and well-being.', isUser: false }]);
              } else if (userMessage.includes('what are the benefits of exercise')) {
                setMessages([...messages, { text: 'Exercise has numerous benefits, including reducing stress and anxiety, improving sleep, and increasing feelings of happiness and well-being. I can provide you with tips and recommendations on how to incorporate exercise into your daily routine.', isUser: false }]);
              } else if (userMessage.includes('how can i reduce my risk of mental illness')) {
                setMessages([...messages, { text: 'Reducing your risk of mental illness typically involves a combination of proper nutrition, regular exercise, stress management, and social support. I can provide you with tips and recommendations on how to reduce your risk of mental illness and improve your overall mental health.', isUser: false }]);
              } else {
                setMessages(prevMessages => [...prevMessages, { text: 'I\'m sorry, I didn\'t understand that. Can you please rephrase?', isUser: false }]);
            }
        }, 2000);
    };

    return (
        <div className={`chat-container ${isExpanded ? 'expanded' : 'minimized'}`}>
            {!isExpanded && (
                <div className="chat-icon-container" onClick={() => setIsExpanded(true)}>
                    <MessageCircle className="chat-icon" />
                </div>
            )}
            {isExpanded && (
                <>
                    <div className="chat-header">
                        <Heart className="chat-icon" />
                        <h1 className="chat-title">Health and Fitness Assistant</h1>
                        <button className="chat-close-button" onClick={() => setIsExpanded(false)}>×</button>
                    </div>
                    <div className="chat-messages">
                        {messages.map((message, index) => (
                            <div key={index} className={`chat-message ${message.isUser ? 'chat-message-user' : 'chat-message-bot'}`}>
                                <span className="chat-message-text">{message.text}</span>
                            </div>
                        ))}
                    </div>
                    <div className="chat-input-container">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type a message..."
                            className="chat-input"
                        />
                        <button
                            onClick={handleSendMessage}
                            className={`chat-send-button ${isThinking ? 'chat-send-button-disabled' : ''}`}
                            disabled={isThinking}
                        >
                            {isThinking ? 'Thinking...' : 'Send'}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default MiniChatGPT;