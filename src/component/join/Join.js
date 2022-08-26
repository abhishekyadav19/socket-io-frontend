import React, { useEffect, useState } from 'react'
import "./Join.css";
import logo from "../images/logo.svg";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';


export let user;

const Join = () => {
    const [name, setName] = useState("");
    const [gname, setGname] = useState("")
    // console.log("this is name:",name);
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const sendUser = (e) => {
        user = name
        if (name) {
            name.trim() && (navigate("/chat"))
        } else {
            setError("* Please Fill the Name")
        }
    }


    if (user = gname) {
        (navigate("/chat"))
    }


    const handleChange = (e) => {
        setName(e.target.value)
        // console.log(e.target.value, "name is");
        e.target.value.trim().length > 0 && setError("")
    }

    const loginSuccess = (response) => {
        console.log(response, "Login Success");
        setGname(response.profileObj.name)
    }
    const responseGoogle = (response) => {
        console.log(response, "Login Failure");
    }

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: "618283752899-r4iksih94clfddat1049omd0onfghdek.apps.googleusercontent.com",
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    }, []);

    return (
        <div className="JoinPage">
            <div className="JoinContainer">
                <img src={logo} alt="logo" />
                <h1>Venturez Chat</h1>
                <div className='inpt-main'>
                    <input onChange={handleChange} placeholder="Enter Your Name" type="text" id="joinInput" value={name}
                        onKeyDown={(e) => e.key === "Enter" ? sendUser() : null} autoComplete="off" />
                    <span className='error'>{error}</span>
                </div>
                <div className='googlelogin-bx'>
                    <GoogleLogin
                        clientId="618283752899-r4iksih94clfddat1049omd0onfghdek.apps.googleusercontent.com"
                        buttonText="Google Login"
                        onSuccess={loginSuccess}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
                <button onClick={sendUser} className="joinbtn">Login In</button>
            </div>
        </div>
    )
}

export default Join