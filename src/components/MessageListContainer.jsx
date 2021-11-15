import React, {useState, useEffect} from "react";
import MessageList from './MessageList';
import Form from "./Form";

const MessageListContainer = () => {
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
        <div className="formContainer">
          <MessageList messageList={messageList}/> 
          <Form sendMessage={sendMessage}/>           
        </div>
    )
}

export default MessageListContainer;