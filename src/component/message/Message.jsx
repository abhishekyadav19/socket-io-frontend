import React from 'react'
import "./message.css";


const Message = ({ user, message, classs }) => {
    let time =new Date().toLocaleTimeString('en-US',{hour:"numeric",minute:"numeric",hour12:true});
    return (
        (user) ?
            (
                <div className={`messageBox ${classs}`}  >
                    {`${user}: ${message}`}
                   <span> {time}</span>
                </div>
            )
            :
            (
                <div className={`messageBox ${classs}`}>
                    {`You: ${message}`}
                    <span> {time}</span>
                </div>
            )
    )

}

export default Message