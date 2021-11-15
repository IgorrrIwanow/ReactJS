import React, {useCallback, useEffect} from "react";
import ChatList from "../../components/ChatList";
import MessageListContainer from '../../components/MessageListContainer';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeMessageByChatId } from '../../store/messages/actions';
import { getChatList } from '../../store/chats/selectors';
import { createChat, removeChat, setChats } from '../../store/chats/actions';


const Chats = ({messageList,sendMessage}) => {
    const style ={
        width: '50%',
        
    }

    const chats = useSelector(getChatList);
    const dispatch = useDispatch();

    const onCreate = useCallback(()=>{
        dispatch(createChat({
            id: Date.now(),
            name: 'chatName'
        }),[])
    });

    const onDelete = (chatId) => {
        dispatch(removeChat(chatId));
        dispatch(removeMessageByChatId(chatId));
    }


    return (
        <div style={{display: 'flex'}}>
            <div style={style}>
                <ChatList onDelete={onDelete} list={chats} />
                <button onClick={onCreate} style={{height: "50px", width:'100%'}}>Create chat</button>
            </div>
            
            <Switch>
                <Route path="/chats/:chatId">
                    <MessageListContainer messageList={messageList} sendMessage={sendMessage} />
                </Route>
            </Switch>

        </div>
    )
}

export default Chats;