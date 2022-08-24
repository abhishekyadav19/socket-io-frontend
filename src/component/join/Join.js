import React, { useState } from 'react'
import "./Join.css";
import logo from "../images/logo.svg";
import { useNavigate } from "react-router-dom";


export let user;

const Join = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate()

    const sendUser = (e) => {
        user = name;
        name.trim() && (navigate("/chat"))
    }
    
    return (
        <div className="JoinPage">
            <div className="JoinContainer">
                <img src={logo} alt="logo" />
                <h1>Venturez Chat</h1>
                <input onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" type="text" id="joinInput" value={name} 
                 onKeyDown={(e)=>e.key==="Enter" ? sendUser(): null}/>
                <button onClick={sendUser} className="joinbtn">Login In</button>
            </div>
        </div>
    )
}

export default Join