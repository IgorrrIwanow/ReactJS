import React from "react";

const MessageList = ({ messageList }) => {

    return (
        <ul>
            {messageList.map((item) => (
                <li key={item.id}>
                    {item.author} - {item.text}
                </li>
            ))}
        </ul>)
}

export default MessageList