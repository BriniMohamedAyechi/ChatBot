import { Link } from "react-router-dom";
import "./chatList.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

import {useQuery} from '@tanstack/react-query'

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const ChatList = () => {
  const { user } = useUser();

  const { isPending, error, data } = useQuery({
    queryKey: ['userChats'],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`,{credentials:"include"}).then((res) =>
        res.json(),
      ),
  })

  return (
    <div className="chatList">
      <Link to="/" className="logo">
        <img src="/logo.svg" alt="" />
        <span>SAPHERA AI</span>
      </Link>
      <hr />
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore Sahpera</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">Recent Chats</span>
      <div className="list">
        {isPending? "Loading...":error? "Something went Wrong":data?.map(chat=>(
          <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>{chat.title}</Link>
        ))}
      </div>
      <hr />
      <div className="user">
        <SignedIn>
          <div
            onClick={(e) => e.currentTarget.querySelector("button")?.click()}
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <UserButton />
            <span style={{ marginLeft: "8px" }}>{user.username}</span>
          </div>
        </SignedIn>
      </div>
    </div>
  );
};

export default ChatList;
