import React, {useEffect} from "react";
import MessageList from './MessageList';
import Form from "./Form";
import {useParams, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getChatMessagesById} from "../store/messages/selectors";
import { createMessage } from "../store/messages/actions";
import { hasChatById } from "../store/chats/selectors";

const MessageListContainer = () => {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const messageList = useSelector(getChatMessagesById(chatId));
  const hasChat = useSelector(hasChatById(chatId));
  
  const sendMessage = (author, text) => {
    const newMessage = {
      author,
      text
    }
    dispatch(createMessage(newMessage, chatId))
  }

  useEffect(()=>{
    if (!messageList || messageList.length === 0) {
      return;
    }

    const tail = messageList[messageList.length-1];

    if (tail.author === "bot") {
      return;
    }

    sendMessage("bot", "hello human");

  }, [messageList]);

  if (!hasChat) {
    return <Redirect to="/chats"/>
  }

    return (
        <div className="formContainer">
          <MessageList messageList={messageList}/> 
          <Form sendMessage={sendMessage}/>           
        </div>
    )
}

export default MessageListContainer;