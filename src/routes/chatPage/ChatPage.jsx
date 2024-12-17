import { useEffect, useRef } from "react";
import "./chatPage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";

const ChatPage = () => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" }); 
  }, []);
  
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test Message AI</div>
          <div className="message user">Test Message from user</div>
          <div className="message ">Test Message from AI</div>
          <div className="message user">Test Message AI</div>
          <div className="message">Test Message AI</div>
          <div className="message user">Test Message from user</div>
          <div className="message ">Test Message from AI</div>
          <div className="message user">Test Message AI</div>
          <div className="message">Test Message AI</div>
          <div className="message user">Test Message from user</div>
          <div className="message ">Test Message from AI</div>
          <div className="message user">Test Message AI</div>
          <div className="message">Test Message AI</div>
          <div className="message user">Test Message from user</div>
          <div className="message ">Test Message from AI</div>
          <div className="message user">Test Message AI</div>
          <div className="message">Test Message AI</div>
          <div className="message user">Test Message from user</div>
          <div className="message ">Test Message from AI</div>
          <div className="message user">Test Message AI</div>
          <div className="message">Test Message AI</div>
          <div className="message user">Test Message from user</div>
          <div className="message ">Test Message from AI</div>
          <div className="message user">Test Message AI</div>
          <div className="message">Test Message AI</div>
          <div className="message user">Test Message from user</div>
          <div className="message ">Test Message from AI</div>
          <div className="message user">Test Message AI</div>
          <div ref={endRef}/>
        </div>
        
      </div>
      <NewPrompt/>
      <div className="chatupper"></div>
    </div>
  );
};

export default ChatPage;
