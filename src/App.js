  import React, {useState, useEffect} from "react";



function App() {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');

  const onChangeMessageInput = (event) => {
    setValue(event.target.value);
  }

  const sendMessage = (author, text) => {
    const newMessageList = [...messageList];
    const newMessage = {
      author,
      text
    }
    newMessageList.push(newMessage);
    setMessageList(newMessageList);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    sendMessage('user', value);

    setValue('');
  }

  useEffect(()=>{
    if (messageList.length === 0) {
      return;
    }

    const tail = messageList[messageList.length-1];

    if (tail.author === "bot") {
      return;
    }

    const timerId = setTimeout(()=>{
      sendMessage("bot", "hello human");
    }, 1500);

    return ()=>{
      clearTimeout(timerId);
    }
  }, [messageList]);

  return (
    <div>
      <h1>homeWork</h1>
      <ul>
        {messageList.map((item) => (
          <li>
            {item.author} - {item.text}
          </li> 
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChangeMessageInput} type="text"/>
        <button type="submit">send</button>
      </form>


    </div>
    
  );
}

export default App;
