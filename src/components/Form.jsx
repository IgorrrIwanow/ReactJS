import React, { useState } from 'react';
import Input from './UI/Input';
import Button from './UI/Button'

const Form = ({sendMessage}) => {
    const [value, setValue] = useState('');

    const onChangeMessageInput = (event) => {
        setValue(event.target.value);
      }

    const onSubmit = (event) => {
        event.preventDefault();
        sendMessage('user', value);
    
        setValue('');
      }

    return (
        <form onSubmit={onSubmit}>
            <Input value={value} onChangeMessageInput={onChangeMessageInput} />
            <Button />
        </form>
    )
}

export default Form