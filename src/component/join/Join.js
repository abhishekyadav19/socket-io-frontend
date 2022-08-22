import React, { useState } from 'react';
import "../join/Join.css";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom"

let user;

const Join = () => {
    const [name, setName] = useState({
        name: ""
    })
    const navigate = useNavigate()
    // const sumtHandler= (e) =>{
    //     e.prventDefalult();
    //     if(name){
    //         user = document.getElementById('joinInput').value;
    //         document.getElementById('joinInput').value = "";
    //         navigate("/chat")
    //     }
    // }
    return (
        <>
            <div className='join_page'>
                <div className='join_container'>
                    <img src={logo} alt="logo" />
                    <h1>C CHAT</h1>
                    <input 
                    id='join_input' 
                    type="text"
                    placeholder='Enter user name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
            </div>
            </div>
        </>
    )
}

export default Join
