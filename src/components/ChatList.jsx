import { List } from '@mui/material';
import { Chat } from './Chat';

const ChatList = ({ list, onDelete }) => {

    return (
        <div className="chatsList">
            <List>
                {list.map((item) => (
                    <div style={{display: 'flex', width: '350px'}} >
                         <Chat key={item.id} name={item.name} id={item.id}/>
                         <button style={{marginRight: '10px',}} onClick={()=>onDelete(item.id)}>delete</button>
                    </div>
                   

                ))}
            </List>
        </div>
    )
}

export default ChatList