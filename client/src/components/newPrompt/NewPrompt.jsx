import { useState, useRef, useEffect } from "react";
import Upload from "../upload/Upload";
import "./newPrompt.css";
import { IKImage } from "imagekitio-react";
import Markdown from "react-markdown";

const NewPrompt = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
    aiData: {},
  });
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [answer, question, img.dbData]);

  const add = async (text) => {
    setQuestion(text);
    const formData = new FormData();
    formData.append("message", text);
  
    // Check if the image exists and append it to the form data
    if (img.aiData?.file) {
      formData.append("image", img.aiData.file);
  
    }

    setImg({ ...img, isLoading: true });
  
    try {
      // Sending a POST request with both message and image in form data
      const response = await fetch("https://llama-api-qbs3.onrender.com/send_message/", {
        method: "POST",
        body: formData,
      });
  
      const result = await response.json();
      if (response.ok) {
        setAnswer(result.response);
    
      } else {
        setAnswer(`Error: ${result.detail}`);
      }
    } catch (error) {
      setAnswer("Error sending the message.");
    }
  
    /*setImg({
      isLoading: false,
      error: "",
      dbData: {},
      aiData: {},
    }); */
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;

    add(text);

  };

  return (
    <>
      {/* ADD NEW CHAT */}
      {img.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData?.filePath}
          width="380"
        />
      )}
      {question && <div className="message user">{question}</div>}
      {answer && <div className="message">{<Markdown>{answer}</Markdown>}</div>}
      <div className="endChat" ref={endRef}></div>
      <form className="newForm" onSubmit={handleSubmit}>
        <Upload setImg={setImg} />
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" name="text" placeholder="Ask me anything..." />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
