import React, {useCallback, useEffect} from "react";
import ChatList from "./ChatList";
import MessageListContainer from './MessageListContainer';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeMessageByChatId } from '../store/messages/actions';


const ChatContainer = ({messageList,sendMessage}) => {
    

    return (
        <div className="container">
            <ChatList list={[{ name: "Alex", id: "1" },
                             { name: "Petr", id: "2" },
                             { name: "Ivan", id: "3" },
                             { name: "Sergey", id: "4"}
                            ]} 
            />
            <Switch>
                <Route path="/chats/:chatId">
                    <MessageListContainer messageList={messageList} sendMessage={sendMessage} />
                </Route>
            </Switch>

        </div>
    )
}

export default ChatContainer;