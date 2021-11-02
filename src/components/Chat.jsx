import { ListItem, ListItemText } from '@mui/material';

export const Chat = ({ name }) => {
    return (
        <ListItem>
            <ListItemText>{name}</ListItemText>
        </ListItem>
    )
}

