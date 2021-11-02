import { List } from '@mui/material';
import { Chat }  from './Chat';

const ChatList = ({list}) => {
   
    return(
        
        <List>
            {list.map((item) => (
               <Chat key={item.id} name={item.name} id={item.id}/>
            ))}
        </List>
        
    )
}

export default ChatList