import { useState,useRef,useEffect } from "react";
import Upload from "../upload/Upload";
import "./newPrompt.css";
import { IKImage } from "imagekitio-react";
import model from "../../api/gemini";
import Markdown from "react-markdown"

const NewPrompt = () => {
  const [question,setQuestion]= useState("")
  const [answer,setAnswer]= useState("")


  const [img,setImg] = useState({
    isLoading:false,
    error:"",
    dbData:{},
    aiData:{},
  })
  const endRef = useRef(null);  


  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Hello" }],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
  });

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" }); 
  }, [answer,question,img.dbData]); 

  const add = async(text)=>{
    setQuestion(text)
    const result = await chat.sendMessageStream(Object.entries(img.aiData).length ? [img.aiData,text]:[text]);
    let accumlatedText="";
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      console.log(chunkText);
      accumlatedText+=chunkText;
    setAnswer(accumlatedText);

    }

    setImg({isLoading:false,
    error:"",
    dbData:{},
    aiData:{},})

  }
  const handlleSubmit = async(e)=>{
    e.preventDefault()
    const text = e.target.text.value;
    if(!text) return;

    add(text)
  }
  return (
    <>
    {/* ADD NEW CHAT */}
    {img.isLoading && <div className="">Loading...</div>}
    {img.dbData?.filePath && (
      <IKImage urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
      path={img.dbData?.filePath}
      width="380"/>
    )}
    {question && <div className="message user">{question}</div>}
    {answer && <div className="message">{<Markdown>{answer}</Markdown>}</div>}
    <div className="endChat" ref={endRef}></div>
      <form className="newForm" on onSubmit={handlleSubmit}>
      <Upload setImg={setImg}/>
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
