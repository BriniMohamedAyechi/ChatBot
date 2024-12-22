import "./dashboard.css";
import {useAuth} from "@clerk/clerk-react"




const Dashboard = () => {
  const {userId} = useAuth();
  const handleSubmit= async(e)=>{
    e.preventDefault();
    const text = e.target.text.value
    if(!text) return;
    await fetch("http://localhost:8000/api/chats",{
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({userId,text})
    })
  }
  return (
    <div className="dashboard">
      <div className="texts">
        <div className="logo">
          <img src="/logo.svg" alt="" />
          <h1>SAPHERA AI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src="/chat.png" alt=""  />
            <span>Create a New Chat</span>
          </div>
          <div className="option">
            <img src="/image.png" alt=""  />
            <span>Analyze Images</span>
          </div>
          <div className="option">
            <img src="/code.png" alt=""  />
            <span>Help me with my Code</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form on onSubmit={handleSubmit}>
          <input type="text"name ="text"placeholder="Ask me Anything..."/>
          <button >
            <img src="arrow.png" alt=""/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
