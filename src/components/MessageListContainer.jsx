import React from 'react';
import MessageList from './MessageList';
import Form from "./Form";

const MessageListContainer = ({messageList, sendMessage}) => {

    return (
        <div className="formContainer">
          <MessageList messageList={messageList}/> 
          <Form sendMessage={sendMessage}/>           
        </div>
    )
}

export default MessageListContainer;