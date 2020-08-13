import React, {useState}from 'react'
import "./ChatScreen.css"
import Avatar from "@material-ui/core/Avatar"
import { Button } from '@material-ui/core'

function ChatScreen() {
    const [input ,setInput]=useState('');
    const [messages,setMessages]=useState([
        {
            name:"mark",
            image:"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg",
            message:'whatsup',
        },
        {
            name:"mark",
            image:"...",
            message:'hows it going',
        },
        {
           
            message:'great',
        }
    ])
    const handleSend=(e)=>{
        e.preventDefault();
        setMessages([...messages,{message:input}]);
        setInput("");
    };

    return (
        <div className="chatScreen">
            <p className="chatscreen_timestamp">You matched with this Mark on 10/09/19</p>
            {messages.map(message=>(
                message.name?(
                    <div className="chatscreen__message">
                        <Avatar
                            className="chatscreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatscreen__text  ">{message.message}</p>
                </div>
                ) : (
                    <div className="chatscreen__message">
                        <p className="chatscreen__textUser ">{message.message}</p>
                    </div> 
                )
             
            ))}
        
                <form className="chatscreen__input">
                <input 
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                className="chatscreen__inputfield" type="text"
                placeholder="type a message.."></input>
                <button onClick={handleSend} type="submit" className="chatscreen__inputbutton">SEND</button>
                </form>
           
        </div>
    )
}

export default ChatScreen
