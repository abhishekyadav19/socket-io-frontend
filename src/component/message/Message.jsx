import React from 'react'
import "./message.css";


const Message = ({ user, message, classs }) => {
    return(
        (user) ?
        (
            <div className={`messageBox ${classs}`}  >
                {`${user}: ${message}`}
            </div>
        )
        :
        (
            <div className={`messageBox ${classs}`}>
                {`You: ${message}`}
            </div>
        )
)

}

export default Message