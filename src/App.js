  import React, {useState, useEffect} from "react";
  import Form from "./components/Form";
  import MessageList from "./components/MessageList";



function App() {
  const [messageList, setMessageList] = useState([]);
  
  const sendMessage = (author, text) => {
    const newMessageList = [...messageList];
    const newMessage = {
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
      <Form sendMessage={sendMessage}/>
      <MessageList messageList={messageList}/>
    </div>
    
  );
}

export default App;
