  import React, {useState, useEffect} from "react";
  import Header from "./components/Header";
  import "./index.css";
  import ChatContainer from "./components/ChatContainer";

function App() {
  const [messageList, setMessageList] = useState([]);
  
  const sendMessage = (author, text) => {
    const newMessageList = [...messageList];
    const newMessage = {
      id: Date.now(),
      author,
      text
    }
    newMessageList.push(newMessage);
    setMessageList(newMessageList);
  }

  useEffect(()=>{
    if (messageList.length === 0) {
      return;
    }

    const tail = messageList[messageList.length-1];

    if (tail.author === "bot") {
      return;
    }

    sendMessage("bot", "hello human");

  }, [messageList]);

  return (
    <div>
      <Header />
      <ChatContainer messageList={messageList} sendMessage={sendMessage}/>
    </div>
    
  );
}

export default App;
