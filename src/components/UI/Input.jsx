import * as React from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
   root: {
      width: '300px'
   }
})

export default function Input({value, onChangeMessageInput, inputRef}) {
   const classes = useStyles();

   return (
         <TextField 
            inputRef={inputRef}
            id="outlined-basic" 
            label="Введите сообщение" 
            variant="outlined"  
            value={value} 
            onChange={onChangeMessageInput} 
            type="text"
            className={classes.root}
         />  
   );
}