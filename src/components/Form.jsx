import React, { useState, useRef, useEffect } from 'react';
import Input from './UI/Input';
import IconLabelButton from './UI/Button';

const Form = ({sendMessage}) => {
    const [value, setValue] = useState('');

    const formStyles ={
      display: "flex",
      padding: "10px",
    }

    const onChangeMessageInput = (event) => {
        setValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        sendMessage('user', value);
    
        setValue('');
    }

    const inputRef = useRef(null);

    useEffect(()=>{
      inputRef.current.focus();
    })

    return (
        <form onSubmit={onSubmit} style={formStyles}>
            <Input 
              value={value} 
              onChangeMessageInput={onChangeMessageInput}
              inputRef={inputRef}
            />
            <IconLabelButton />
        </form>
    )
}

export default Form