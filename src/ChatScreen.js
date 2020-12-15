import { Avatar } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import "./ChatScreen.css";

function ChatScreen(){
    const [input,setInput] = useState("");
    const [messages,setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://s2.glbimg.com/MLxTbVdLCTIjaJTKpop90yZx29c=/top/e.glbimg.com/og/ed/f/original/2020/03/30/ellen-rocche.png',
            message: 'Whats up'
        },
        {
            name: 'Ellen',
            image: 'https://s2.glbimg.com/MLxTbVdLCTIjaJTKpop90yZx29c=/top/e.glbimg.com/og/ed/f/original/2020/03/30/ellen-rocche.png',
            message: 'How it is going'
        },
        {
            message: 'Nice!'
        },
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages,{message:input}]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen_timestamp">MATCHED SINCE 2000</p>
            {messages.map(  message => (
                message.name ? (               
                <div className="chatScreen_message">
                    <Avatar className="chatScreen_avatar"
                        alt={message.name}
                        src={message.image}
                    />
                    <p className="chatScreen_text">{message.message}</p>
                </div> 
                ) : (
                <div className="chatScreen_message">
                    <p className="chatScreen_textUser">{message.message}</p>
                </div>
                )
            ))}
                <form className="chatScreen_input">
                    <input 
                    value = {input}
                    onChange={e => setInput(e.target.value)}
                    className="chatScreen_inputField"
                    placeholder="Type a message..."
                    type="text"/>
                    <button onClick={handleSend} type="submit" className="chatScreen_inputButton ">SEND</button>
                </form>
        </div>
    );
}

export default ChatScreen;