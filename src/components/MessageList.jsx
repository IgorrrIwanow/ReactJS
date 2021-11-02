import React from "react";

const MessageList = ({ messageList }) => {

    return (
        <ul>
            {messageList.map((item) => (
                <li>
                    {item.author} - {item.text}
                </li>
            ))}
        </ul>)
}

export default MessageList