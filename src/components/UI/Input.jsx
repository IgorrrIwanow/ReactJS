import React from 'react';

const Input = ({value, onChangeMessageInput}) => {
    

     return (
        <input value={value} onChange={onChangeMessageInput} type="text" />
     )
}

export default Input;