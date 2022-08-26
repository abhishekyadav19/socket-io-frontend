import React, { useEffect, useState } from 'react'
import { user } from "../join/Join"
import socketIo from "socket.io-client";
import "./chat.css";
import sendLogo from "../images/send.png";
import ReactScrollToBottom from "react-scroll-to-bottom";
import closeIcon from "../images/closeIcon.png";
import Message from '../message/Message';

const ENDPOINT = "https://echatsapp.herokuapp.com/";
let socket;
const Chat = () => {
  const [messages, setMessages] = useState([])
  const [chat, setChat] = useState("")
  const [id, setId] = useState("")
  const send = () => {
    if(chat.trim() === ""){
      return false
    }else{
      socket.emit("message", { chat, id})
    }
    // (chat.trim() === "") ? null : socket.emit("message", { chat, id })
    // chat && socket.emit("message", { chat, id });
    setChat("")
  }

  useEffect(() => {
    socket = socketIo(ENDPOINT, { transports: ["websocket"] });

    socket.on("connect", () => {
      setId(socket.id)

    })

    socket.emit('joined', { user })
    socket.on('welcome', (data) => {
      setMessages([...messages, data])
      console.log(data.user, data.message);
    })
    socket.on('userJoined', (data) => {
      setMessages([...messages, data])
      console.log(data.user, data.message);
    })

    socket.on("leave", (data) => {
      setMessages([...messages, data])
      console.log(data.user, data.message);
    })

    return () => {
      socket.on("disconnect")
      socket.off()
    }
  }, [])


  useEffect(() => {
    socket.on("sendMessage", (data) => {
      setMessages([...messages, data])
      // console.log(data.user, data.message, data.id)
      // console.log(messages,"hello");
    })

    return () => {
      socket.off()
    }
  }, [messages])
  
  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header">
          <h2>Venturez Chat</h2>
          <a href="/"> <img src={closeIcon} alt="Close" /></a>
        </div>
        <ReactScrollToBottom className="chatBox">
          {messages?.map((items, i) => <Message user={items.id === id ? "" : items.user} message={items.message} classs={items.id === id ? 'right' : 'left'} key={i}/>)}
        </ReactScrollToBottom>
        <div className="inputBox">
          <input type="text" id="chatInput" value={chat}
            onChange={(e) => setChat(e.target.value)}
            onKeyDown={(e) => e.key === "Enter"  ? send() : null } />
          <button onClick={send} className="sendBtn">
            <img src={sendLogo} alt="Send" />
          </button>
        </div>
      </div>
    </div>

  )
}

export default Chat






