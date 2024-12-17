import { Link } from "react-router-dom";
import "./chatList.css";

const ChatList = () => {
  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore Sahpera</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">Recent Chats</span>
      <div className="list">
        <Link to="/">My Chat title</Link>
        <Link to="/">My Chat title</Link>
        <Link to="/">My Chat title</Link>
        <Link to="/">My Chat title</Link>
        <Link to="/">My Chat title</Link>
        <Link to="/">My Chat title</Link>
        <Link to="/">My Chat title</Link>
        <Link to="/">My Chat title</Link>
        <Link to="/">My Chat title</Link>
        <Link to="/">My Chat title</Link>
      </div>
      <hr />
    </div>
  );
};

export default ChatList;
