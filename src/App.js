import React from "react"
import './App.css';
import io from "socket.io-client";
import { Routes, Route } from "react-router-dom";
import Join from "./component/join/Join";
import Chat from "./component/chat/Chat";

// const ENDPOINT = "http://localhost:4500/";
// const sockets = io(ENDPOINT,{transports: ["websocket"]});




function App() {
//  sockets.on("connect", ()=>{})
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Join />}></Route>
        <Route exact path="/chat" element={<Chat/>}></Route>
      </Routes>
    </>
  ); 
} 

export default App;