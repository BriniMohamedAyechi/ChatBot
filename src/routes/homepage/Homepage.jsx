import { Link } from 'react-router-dom';
import './homepage.css';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';


const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className='homepage'>
    <img src='/orbital.png' alt="" className='orbital'/>
      <div className="left">
        <h1>SAPHERA CHATBOT</h1>
        <h2>Your journey with intelligent conversations begins here.</h2><h2>
           Explore, interact, and innovate!</h2>
        <h3>Welcome! I'm Saphera, your AI chatbot, here to assist you with anything you need. Whether you're looking for information, support, 
          or just a friendly chat, I'm here to help you navigate through your queries and tasks. Let's get started!</h3>
          <Link to="/dashboard">Get Started here</Link>
      </div>
      <div className="right">
      <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img src={typingStatus === "human1"? "/human1.jpeg":"bot.png"} alt=''/>
            <TypeAnimation
              sequence={[
                "Human: What is AI?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: AI is the simulation of human intelligence in machines.",
                2000,
                () => {
                  setTypingStatus("human1");
                },
                "Human: How do plants grow?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: Plants grow by converting sunlight into energy through photosynthesis.",
                2000,
                () => {
                  setTypingStatus("human1");
                },
                "Human: What is the speed of light?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: It’s about 300,000 km/s in a vacuum.",
                2000,
                () => {
                  setTypingStatus("human1");
                },
                "Human: Can machines think?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: Machines process data but don’t think like humans.",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />

          </div>
         </div>
         </div>
         <div className="terms">
          <img src='/logo.svg' alt=''/>
          <div className="links">
            <Link to="/">Terms of Service</Link>
            <span>|</span>
            <Link to="/">Privacy policy</Link>
          </div>
         </div>
      </div>  

  );
};

export default Homepage;