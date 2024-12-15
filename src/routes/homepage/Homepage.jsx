import { Link } from 'react-router-dom';
import './homepage.css';

const Homepage = () => {
  return (
    <div className='homepage'>
    <img src='/orbital.png' alt="" className='orbital'/>
      <div className="left">
        <h1>SAPHERA CHATBOT</h1>
        <h2>Your journey with intelligent conversations begins here—explore, interact, and innovate!</h2>
        <h3>Welcome! I'm Saphera, your AI chatbot, here to assist you with anything you need. Whether you're looking for information, support, 
          or just a friendly chat, I'm here to help you navigate through your queries and tasks. Let's get started!</h3>
          <Link to="/dashboard">Get Started here</Link>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Homepage;