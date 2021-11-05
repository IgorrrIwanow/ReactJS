import { ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

export const Chat = ({ name, id }) => {
    return (
        <ListItem component={Link} to={`/chats/${id}`}>
            <ListItemText>{name}</ListItemText>
        </ListItem>
    )
}

