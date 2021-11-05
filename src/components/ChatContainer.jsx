import React from "react";
import ChatList from "./ChatList";
import MessageListContainer from './MessageListContainer';

const ChatContainer = ({messageList,sendMessage}) => {
    return (
        <div className="container">
            <ChatList list={[{ name: "Alex", id: "1" },
            { name: "Petr", id: "2" },
            { name: "Ivan", id: "3" },
            { name: "Sergey", id: "4" }
            ]} />
            <MessageListContainer messageList={messageList} sendMessage={sendMessage} />
        </div>
    )
}

export default ChatContainer;