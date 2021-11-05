  import React, {useState, useEffect} from "react";
  import Form from "./components/Form";
  import MessageList from "./components/MessageList";
  import Header from "./components/Header";
  import ChatList from "./components/ChatList";
  import "./index.css";

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
      <div className="container">
        <div className="chatsList">
          <ChatList list={[{name: "Alex", id: "1"},
                         {name: "Petr", id: "2"},
                         {name: "Ivan", id: "3"},
                         {name: "Sergey", id: "4"}
                       ]}/>
        </div>
        <div className="formContainer">
          <MessageList messageList={messageList}/> 
          <Form sendMessage={sendMessage}/>           
        </div>
        
      </div>
      
               
    </div>
    
  );
}

export default App;
